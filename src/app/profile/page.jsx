"use client";
import ClientLayout from "@/components/common/ClientLayout";
import OrderCard from "@/components/profile/OrderCard";
import { useGetOrderQuery } from "@/redux/features/order/orderApi";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

// redux
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const session = useSession();
  const router = useRouter();
  // Get user
  const user = useSelector((state) => state.user);
  // Get all orders
  const { data, error, refetch } = useGetOrderQuery(user?._id, {
    refetchOnMountOrArgChange: true,
  });
  // Update user
  const [updateUser, { isLoading, isSuccess, error: userUpdateError }] =
    useUpdateUserMutation();

  const { register, handleSubmit, reset } = useForm();

  // Update data
  const onSubmit = (data) => {
    if (user.email) {
      const { name, phone, city, postal_code, address, ...rest } = data;
      const updatingData = {
        name,
        phone,
        city,
        postal_code,
        address,
      };
      updateUser({ user_id: user._id, data: updatingData });
    }
  };

  // Update user
  useEffect(() => {
    if (userUpdateError) {
      toast.error(userUpdateError.data?.message);
    }
    if (isSuccess) {
      toast.success("User updated");
    }
  }, [isSuccess, userUpdateError]);

  // check get Order error
  useEffect(() => {
    if (error) {
      toast.error(error.data?.message);
    }
  }, [error]);

  useEffect(() => {
    if (!session.data) {
      router.push("/");
    }
    if (user) {
      reset(user);
    }
  }, [session, user]);

  return (
    <div>
      <Toaster position="bottom-center" />
      <ClientLayout>
        <div className="my-4 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3">All Orders</h3>
            <div>
              {data &&
                data.payload.order.map((item, index) => (
                  <OrderCard refetch={refetch} key={index} order={item} />
                ))}
            </div>
          </div>

          <div className="">
            <div className="col-span-4">
              <h3 className="font-bold mb-3">Profile details</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">Name</span>
                  <input
                    className="field_input"
                    placeholder="Abdul Karim"
                    {...register("name", {
                      required: "Name is required!",
                    })}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">Email</span>
                  <input
                    disabled
                    className="field_input"
                    placeholder="abdulkarim@gmail.com"
                    {...register("email", {
                      required: "Email is required!",
                    })}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">Phone</span>
                  <input
                    className="field_input"
                    placeholder="01....."
                    {...register("phone", {
                      required: "Phone is required!",
                    })}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">City</span>
                  <input
                    className="field_input"
                    placeholder="Rajshahi"
                    {...register("city", {
                      required: "City name required!",
                    })}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">Postal Code</span>
                  <input
                    className="field_input"
                    placeholder="XXXX"
                    {...register("postal_code", {
                      required: "Postal is required!",
                    })}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <span className="text-xs">Address</span>
                  <textarea
                    className="field_input pt-2 min-h-[100px]"
                    placeholder="Enter your delivery address..."
                    {...register("address", {
                      required: "Address is required!",
                    })}
                  />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn_sp mt-3"
                >
                  update
                </button>
              </form>
            </div>
          </div>
        </div>
      </ClientLayout>
    </div>
  );
};

export default page;
