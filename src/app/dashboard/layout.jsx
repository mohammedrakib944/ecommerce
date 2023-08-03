"use client";
import AdminLayout from "@/components/dashboard/AdminLayout";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const layout = ({ children }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
