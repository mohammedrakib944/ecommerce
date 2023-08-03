"use client";
import ClientLayout from "@/components/common/ClientLayout";
import { usePaymentSuccessMutation } from "@/redux/features/order/orderApi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const Paynow = ({ params }) => {
  const [paymentSuccess, { isLoading, isSuccess, error }] =
    usePaymentSuccessMutation();
  const router = useRouter();

  // handle payment success
  const handlePaymentSuccess = () => {
    if (params.order_id) {
      paymentSuccess(params.order_id);
    }
  };

  // use payment success
  useEffect(() => {
    if (isSuccess) {
      router.push("/profile");
    }
    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  return (
    <ClientLayout>
      <Toaster />
      <div className="p-10 text-center">
        <h3>Payment method will added soon!</h3>

        <button
          disabled={isLoading}
          onClick={() => handlePaymentSuccess()}
          className="btn_blue mt-3"
        >
          Success Pay
        </button>
      </div>
    </ClientLayout>
  );
};

export default Paynow;
