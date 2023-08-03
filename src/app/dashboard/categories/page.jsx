"use client";
import { MdEdit, MdDelete, MdSearch } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

// redux
import {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "@/redux/features/category/categoryApi";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Categories = () => {
  const user = useSelector((state) => state.user);
  const { data } = useGetCategoryQuery();
  const [addCategory, { isLoading: adding }] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  // states
  const [category_name, setCategory_name] = useState("");
  const [updateCategory_name, setUpdateCategory_name] = useState("");
  const [status, setStatus] = useState("");
  const [category_id, setcategory_id] = useState("");

  // Add categroy
  const handleAddCategory = async () => {
    if (!user) return;

    const sendData = {
      user_id: user._id,
      category_name,
    };
    try {
      await addCategory(sendData);
      toast.success("Category added!");
      setCategory_name("");
    } catch (error) {
      toast.error("Category add error!");
    }
  };

  // selected category
  const handleSelectedCategory = async (categoryId) => {
    if (data.payload) {
      const selected = data.payload.category.filter(
        (item) => item._id === categoryId
      );
      setUpdateCategory_name(selected[0].category_name);
      setStatus(selected[0].status);
      setcategory_id(categoryId);
    }
  };

  // Update Category
  const updateCategoryHandler = async () => {
    if (!category_id) return;
    try {
      await updateCategory({
        category_id,
        data: { category_name: updateCategory_name, status },
      });
      toast.success("Category Updated!");
      document.getElementById("hideEditModal").click();
    } catch (error) {
      toast.error("Category update error!");
    }
  };

  // Delete category
  const handleDeleteCategory = async (catagoryId) => {
    if (!catagoryId) return;
    if (!confirm("Do you want to delete?")) return;
    try {
      await deleteCategory(catagoryId);
      toast.success("Category Deleted!");
    } catch (error) {
      toast.error("Delete error!");
    }
  };

  return (
    <div>
      <Toaster position="bottom-center" />
      {/* MODAL */}
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="category-modal"
            id="hideEditModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2>Edit category</h2>
          <div className="lg:col-span-2">
            <p className="text-sm mt-4">Name</p>
            <input
              type="text"
              className="field_input w-full mt-2 shadow"
              placeholder="Edit category..."
              onChange={(e) => setUpdateCategory_name(e.target.value)}
              value={updateCategory_name}
            />
            <p className="text-sm mt-4">Status</p>
            <select
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
              className="select field_input w-full mt-2"
            >
              <option value="show">show</option>
              <option value="hide">hide</option>
            </select>

            <button onClick={updateCategoryHandler} className="btn_sp mt-4">
              Update
            </button>
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
            required
            value={category_name}
            onChange={(e) => setCategory_name(e.target.value)}
            type="text"
            className="field_input w-full shadow"
            placeholder="Type new category..."
          />
          <button
            disabled={adding}
            onClick={handleAddCategory}
            className="btn_sp mt-4"
          >
            Add catagory
          </button>
        </div>
        <div className="lg:col-span-3 shadow bg-white overflow-x-auto">
          {/* Table */}
          <table className="table w-full">
            {/* head */}
            <thead className="bg-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.payload.category.map((item, index) => (
                  <tr key={index} className="font-semibold">
                    <th>{index + 1}</th>
                    <td>{item.category_name}</td>
                    <td>
                      <span
                        className={
                          item.status === "show" ? "badge_green" : "badge_red"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="flex justify-end gap-3">
                      <label
                        onClick={() => handleSelectedCategory(item._id)}
                        htmlFor="category-modal"
                        className="btn_blue"
                      >
                        <MdEdit />
                      </label>
                      <button
                        onClick={() => handleDeleteCategory(item._id)}
                        className="btn_blue bg-red-700"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
