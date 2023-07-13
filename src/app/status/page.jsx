"use client";

import {
  BsCheck2All,
  BsFillHandbagFill,
  BsFillShiftFill,
} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { useEffect, useState } from "react";
import ClientLayout from "@/components/common/ClientLayout";

const Status = () => {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(null);
  const OrderStatus = [
    "Confirmed Order",
    "Processing",
    "Handover",
    "Shifted",
    "Delivered",
  ];

  const changeProgress = () => {
    if (currentStatus === "Confirmed Order") {
      setProgress(20);
    }
    if (currentStatus === "Processing") {
      setProgress(40);
    }
    if (currentStatus === "Handover") {
      setProgress(60);
    }
    if (currentStatus === "Shifted") {
      setProgress(80);
    }
    if (currentStatus === "Delivered") {
      setProgress(100);
    }
  };

  useEffect(() => {
    changeProgress();
  }, [currentStatus]);

  return (
    <ClientLayout>
      <div className="py-8">
        <h4 className="mb-2 font-semibold">
          Your order ID <span className="text-blue-600">#38092301</span>
        </h4>
        <h4 className="font-semibold mt-3">
          Status: <span className="text-success">{currentStatus}</span>
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
                Confirmed Order
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-xl hidden md:block">
                  <AiFillSetting />
                </span>
                Processing
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-2xl hidden md:block">
                  <MdDeliveryDining />
                </span>
                On the way
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-xl hidden md:block">
                  <BsFillShiftFill />
                </span>
                Shifted
              </div>
            </div>

            <div className="w-fit flex flex-col items-center">
              <div className="font-semibold mt-2 text-xs md:text-sm flex gap-2 items-center">
                <span className="text-lg hidden md:block">
                  <BsFillHandbagFill />
                </span>
                Delivered
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <hr />
        <br />
        <select
          className="select select-bordered  w-full max-w-xs"
          onChange={(e) => setCurrentStatus(e.target.value)}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Select Status
          </option>
          {OrderStatus.map((val, index) => (
            <option key={index}>{val}</option>
          ))}
        </select>
      </div>
    </ClientLayout>
  );
};

export default Status;
