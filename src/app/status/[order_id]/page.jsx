"use client";

import { BsCheck2All, BsFillShiftFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineArrowLeft } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { useEffect, useState } from "react";
import ClientLayout from "@/components/common/ClientLayout";
import { useGetSingleOrderQuery } from "@/redux/features/order/orderApi";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Status = ({ params }) => {
  const { data, error } = useGetSingleOrderQuery(params?.order_id, {
    refetchOnMountOrArgChange: true,
  });

  //["pending", "processing", "shipped", "delivered"],

  const [progress, setProgress] = useState(0);

  const OrderStatus = ["pending", "processing", "shipped", "delivered"];

  useEffect(() => {
    if (error) {
      toast.error(error.data?.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      const status = data.payload.status;
      if (status === OrderStatus[0]) {
        setProgress(20);
      }
      if (status === OrderStatus[1]) {
        setProgress(40);
      }
      if (status === OrderStatus[2]) {
        setProgress(60);
      }
      if (status === OrderStatus[3]) {
        setProgress(80);
      }
      if (status === OrderStatus[4]) {
        setProgress(100);
      }
    }
  }, [data]);

  return (
    <ClientLayout>
      <Toaster position="bottom-center" />
      <div className="py-8">
        <Link
          href="/profile"
          className="text-blue-600 hover:underline flex items-center gap-2 w-fit"
        >
          <AiOutlineArrowLeft /> Profile
        </Link>
        <br />
        <br />
        <h4 className="mb-2 font-semibold">
          Your order ID{" "}
          <span className="text-blue-600">#{params?.order_id}</span>
        </h4>
        <h4 className="font-semibold mt-3">
          Status: <span className="text-success">{data?.payload?.status}</span>
        </h4>
        <div className="relative mt-4">
          <progress
            className="progress progress-success w-full h-5"
            value={progress}
            max="100"
          ></progress>
          <div className="flex justify-around">
            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-xl hidden md:block">
                  <BsCheck2All />
                </span>
                {OrderStatus[0]}
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-xl hidden md:block">
                  <AiFillSetting />
                </span>
                {OrderStatus[1]}
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-2xl hidden md:block">
                  <MdDeliveryDining />
                </span>
                {OrderStatus[2]}
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-xl hidden md:block">
                  <BsFillShiftFill />
                </span>
                {OrderStatus[3]}
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </ClientLayout>
  );
};

export default Status;
