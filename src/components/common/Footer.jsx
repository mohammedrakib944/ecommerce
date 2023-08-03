"use client";
import { BsArrowRight } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[990px] mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div>
            <h3>Quick links</h3>
            <ul className="text-xs">
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Bags
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Shoes
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Lookbook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Info</h3>
            <ul className="text-xs">
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Shopping policy
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mt-2">
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Our mission</h3>
            <p className="text-sm mt-2">
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
        <div className="my-8 flex items-center gap-4 justify-between flex-wrap">
          <div>
            <h3>Subscribe to our email</h3>
            <div className="w-[300px]  border border-black flex items-center mt-2">
              <input
                type="text"
                className="outline-none p-2 w-full text-sm"
                placeholder="Email"
              />
              <span className="pr-2">
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <AiFillGithub />
            </a>
            <a href="#">
              <TfiWorld />
            </a>
            <a href="#">
              <AiFillFacebook />
            </a>{" "}
            <a href="#">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[990px] mx-auto pt-4 pl-4 mt-6 border-t">
        <span className="text-xs text-gray-600">© 2023, myselfrakib.com</span>
      </div>
    </div>
  );
};

export default Footer;
