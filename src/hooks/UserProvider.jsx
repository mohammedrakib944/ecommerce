"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
// redux
import { useSelector } from "react-redux";
import { useGetUserQuery } from "@/redux/features/user/userApi";
import Spinner from "@/components/common/Spinner";

const UserProvider = ({ children }) => {
  // states
  const [userId, setUserId] = useState("");
  const [fetchUserFlag, setFetchUserFlag] = useState(false);
  const session = useSession();

  // redux
  const user = useSelector((state) => state.user);
  const { isLoading } = useGetUserQuery(userId, {
    skip: !fetchUserFlag,
  });

  useEffect(() => {
    if (!userId) {
      const auth = JSON.parse(localStorage.getItem("auth"));
      setUserId(auth?.user_id);
    }

    if (!user.email && userId && session.status === "authenticated") {
      setFetchUserFlag(true);
    }
  }, [userId, session]);

  if (isLoading) return <Spinner title="Loading..." />;

  return <div>{children}</div>;
};

export default UserProvider;
