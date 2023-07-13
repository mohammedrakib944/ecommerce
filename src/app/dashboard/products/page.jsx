"use client";
import AdminLayout from "@/components/dashboard/AdminLayout";
import { MdEdit, MdDelete, MdSearch } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Cartoon from "../../../../public/images/cartoon.png";
import Product_modal from "@/components/dashboard/Product_modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const [isEdit, setIsEdit] = useState(false);
  // Demo for edit data
  const modalData = {
    name: "Pixel 4 xl",
    category: "phone",
    details: "64 GB",
    image1: "",
    image2: "",
    image3: "",
    description: "noting",
    price: "28",
  };

  return (
    <AdminLayout>
      {/* Modal */}
      {isEdit ? <Product_modal product={modalData} /> : <Product_modal />}

      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Products</li>
        </ul>
      </div>
      <div className="flex items-center justify-between mb-3">
        <h2>Products</h2>
        <label
          onClick={() => setIsEdit(false)}
          htmlFor="product-modal"
          className="btn_blue gap-2"
        >
          <AiOutlinePlus /> Add new
        </label>
      </div>
      <div>
        <div className="overflow-x-auto w-full shadow">
          <div className="flex items-center gap-2 bg-white px-3 rounded-sm mb-2 shadow">
            <MdSearch />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent focus:outline-none py-2"
            />
          </div>
          <div className="bg-white">
            <table className="table  table-compact w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="pl-6">Product</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Name */}
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={Cartoon}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mackbook pro</div>
                        <div className="text-sm opacity-50">ID: 231</div>
                      </div>
                    </div>
                  </td>
                  {/* Category */}
                  <td>Laptop</td>
                  {/* Stock */}
                  <td>
                    <span className="badge_green">7 in stock</span>
                  </td>
                  {/* Price */}
                  <td>$1200</td>
                  {/* Action button */}
                  <td className="text-right">
                    <div>
                      <label
                        onClick={() => setIsEdit(true)}
                        htmlFor="product-modal"
                        className="btn_blue"
                      >
                        <MdEdit />
                      </label>
                      &nbsp;&nbsp;
                      <button className="btn_blue bg-red-700 hover:bg-red-600">
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={Cartoon}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Mackbook pro</div>
                        <div className="text-sm opacity-50">ID: 231</div>
                      </div>
                    </div>
                  </td>
                  <td>Laptop</td>
                  <td>
                    <span className="badge_red">Out of stock</span>
                  </td>
                  <td>$1200</td>
                  <td className="text-right">
                    <div>
                      <label htmlFor="product-modal" className="btn_blue">
                        <MdEdit />
                      </label>
                      &nbsp;&nbsp;
                      <button className="btn_blue bg-red-700 hover:bg-red-600">
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;
