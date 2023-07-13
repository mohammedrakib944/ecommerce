"use client";
import AdminLayout from "@/components/dashboard/AdminLayout";
import { MdEdit, MdDelete, MdSearch } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Categories = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <AdminLayout>
      {/* MODAL */}
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="category-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2>Edit category</h2>
          <div className="lg:col-span-2">
            <input
              type="text"
              className="input input-bordered w-full mt-4 shadow"
              placeholder="Edit category..."
            />
            <div className="flex items-center gap-4 mt-4">
              <input
                type="checkbox"
                checked={isVisible}
                onChange={(e) => setIsVisible(e.currentTarget.checked)}
                className="checkbox checkbox-primary"
              />
              <label className="font-semibold">Visible</label>
            </div>
            <button className="btn btn-block bg-primary mt-4">Update</button>
          </div>
        </div>
      </div>
      {/* MODAL */}

      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Categories</li>
        </ul>
      </div>
      <h2 className="mb-4">Categories</h2>
      {/* Search */}
      <div className="flex items-center gap-2 bg-white px-3 rounded-sm mb-2 shadow-sm">
        <MdSearch />
        <input
          type="text"
          placeholder="Search category..."
          className="w-full bg-transparent focus:outline-none py-2"
        />
      </div>
      {/* Search */}
      <div className="grid gap-6 lg:grid-cols-5 pt-2">
        {/* ADD category */}
        <div className="lg:col-span-2">
          <input
            type="text"
            className="input w-full shadow"
            placeholder="Type new category..."
          />
          <div className="flex items-center gap-4 mt-4">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.currentTarget.checked)}
              className="checkbox checkbox-primary"
            />
            <label className="font-semibold">Visible</label>
          </div>
          <button className="btn_sp mt-4">Add catagory</button>
        </div>
        <div className="lg:col-span-3 shadow bg-white overflow-x-auto">
          {/* Table */}
          <table className="table w-full">
            {/* head */}
            <thead className="bg-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Items</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mobile</td>
                <td>18</td>
                <td>
                  <span className="badge_green">Visible</span>
                </td>
                <td className="flex justify-end gap-3">
                  <label htmlFor="category-modal" className="btn_blue">
                    <MdEdit />
                  </label>
                  <button className="btn_blue bg-red-700">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Laptop</td>
                <td>4</td>
                <td>
                  <span className="badge_red">Hidden</span>
                </td>
                <td className="flex justify-end gap-3">
                  <label htmlFor="category-modal" className="btn_blue">
                    <MdEdit />
                  </label>
                  <button className="btn_blue bg-red-700">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;
