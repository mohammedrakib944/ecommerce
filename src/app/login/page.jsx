"use client";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const Login = () => {
  //   const router = useRouter();
  //   const session = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    toast.error("Wrong credientials!");
  };

  return (
    <div className="max-w-[600px] h-screen mx-auto flex flex-col items-center justify-center">
      <Toaster position="bottom-centere" />
      <div className="text-xl flex gap-3 justify-center items-center">
        <p className="font-bold py-3 text_gradient">User login</p>
      </div>
      <form className="min-w-[360px]">
        <label className="text-sm">Username</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded px-2 shadow border mb-2">
          <span className="text-2xl  text-gray-500 border-r pr-2">
            <MdPerson />
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="focus:outline-none py-3 w-full"
          />
        </div>
        <label className="text-sm ">Password</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded px-2 shadow border">
          <span className="text-xl text-gray-500 border-r pr-3">
            <RiLockPasswordFill />
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="focus:outline-none py-3 w-full"
          />

          <button
            type="button"
            className="text-xl text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <button onClick={loginHandler} type="submit" className="btn btn_blue">
            Login
          </button>
          <Link className="text-center btn_black" href="/">
            Cancle
          </Link>
        </div>

        {/* <p className="mt-5">
          Don't have account?{" "}
          <Link href="/auth/registration" className="text_link">
            Create Account
          </Link>
        </p> */}
      </form>
    </div>
  );
};

export default Login;
