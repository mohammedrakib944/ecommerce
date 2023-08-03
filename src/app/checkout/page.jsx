"use client";
import ClientLayout from "@/components/common/ClientLayout";
import { AiOutlineShoppingCart, AiFillQuestionCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const router = useRouter();
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (user.email) {
      // phone, address, city, postal_code;
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

  useEffect(() => {
    if (error) {
      toast.error(error.data?.message);
    }
    if (isSuccess) {
      router.push("/profile");
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (user) {
      reset(user);
    }
    if (!order.total_price) {
      router.push("/profile");
    }
  }, [user, order]);

  return (
    <ClientLayout>
      <Toaster position="bottom-center" />
      <div className="grid gap-4 lg:gap-8 lg:grid-cols-6 py-6">
        {/* Order summery */}
        <div className="col-span-2 h-fit p-4 rounded-lg border mt-8">
          <h3 className="flex gap-2 border-b pb-2 items-center font-bold">
            <AiOutlineShoppingCart /> Your Order
          </h3>
          <div>
            <table>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="pr-8 flex items-center gap-2">
                    Shipping Cost
                    <a>
                      <AiFillQuestionCircle />
                    </a>
                  </td>
                  <td className="pl-8">${order?.shipping_cost}.00 USD</td>
                </tr>
                <tr className="font-bold">
                  <td className="pr-8">Total Price</td>
                  <td className="pl-8 min-w-[280px]">
                    ${order?.total_price}.00 USD
                  </td>
                </tr>
                {/* <tr className="border-b">
                  <td className="pr-8 flex items-center gap-2">
                    Duties & Taxes
                    <a>
                      <AiFillQuestionCircle />
                    </a>
                  </td>
                  <td className="pl-8">$2 USD</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="col-span-4">
          <h3 className="font-bold mb-3">Check Details</h3>
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
              <span className="text-xs text-red-500">
                {errors?.name?.message}
              </span>
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
              <span className="text-xs text-red-500">
                {errors?.email?.message}
              </span>
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
              <span className="text-xs text-red-500">
                {errors?.phone?.message}
              </span>
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
              <span className="text-xs text-red-500">
                {errors?.city?.message}
              </span>
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
              <span className="text-xs text-red-500">
                {errors?.postal_code?.message}
              </span>
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
              <span className="text-xs text-red-500">
                {errors?.address?.message}
              </span>
            </div>
            <button disabled={isLoading} type="submit" className="btn_sp mt-3">
              Go profile and Pay
            </button>
          </form>
        </div>
      </div>
    </ClientLayout>
  );
};

export default page;
