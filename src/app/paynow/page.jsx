import Link from "next/link";
import React from "react";
import ClientLayout from "@/components/common/ClientLayout";

const Paynow = () => {
  return (
    <ClientLayout>
      <div className="p-10 text-center">
        <h3>Payment method will added soon!</h3>
        <Link href="/status">
          <button className="btn_blue mt-3">Success Pay</button>
        </Link>
      </div>
    </ClientLayout>
  );
};

export default Paynow;
