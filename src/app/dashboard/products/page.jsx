"use client";
import { MdEdit, MdDelete, MdSearch } from "react-icons/md";
import { AiOutlinePlus, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import AddProduct from "@/components/dashboard/products/AddProduct";
import EditProduct from "@/components/dashboard/products/EditProduct";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/features/products/productApi";
import Spinner from "@/components/common/Spinner";
import { API_URL } from "@/redux/features/api/apiSlice";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [search, setSearch] = useState("");
  // redux
  const [deleteProduct, { isSuccess, error }] = useDeleteProductMutation();
  const { data, isLoading } = useGetProductsQuery(
    { search, page },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  // Page change
  const handlePageChange = (status) => {
    if (data) {
      const { nextPage, previousPage } = data.payload.pagination;
      if (status === "next") {
        setPage(nextPage);
      }
      if (status === "prev") {
        setPage(previousPage);
      }
    }
  };

  // Select a product for send on edit props
  const handleSelectedProduct = (product_id) => {
    if (data) {
      const item = data.payload.products.filter(
        (item) => item._id === product_id
      );
      setSelectedProduct(item[0]);
    }
  };

  // Search filter
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };

  // delete
  const deleteHandle = (product_id) => {
    if (!product_id) return;
    if (!confirm("Delete product?")) return;
    deleteProduct(product_id);
  };

  // Error and success - message
  useEffect(() => {
    if (isSuccess) {
      toast.success("Edit success!");
    }
    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  return (
    <div>
      <Toaster position="bottom-center" />
      {/* Modal */}
      <AddProduct />
      <EditProduct product={selectedProduct} />

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
        <label htmlFor="product-add-modal" className="btn_blue gap-2">
          <AiOutlinePlus /> Add new product
        </label>
      </div>
      <div className="overflow-x-auto w-full shadow">
        <form
          className="flex items-center gap-2 bg-white px-3 rounded-sm mb-2 shadow"
          onSubmit={handleSearch}
        >
          <MdSearch />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full  bg-transparent focus:outline-none py-2"
          />
        </form>
        <div className="bg-white overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
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
              {isLoading ? (
                <tr>
                  <td colSpan={5}>
                    <Spinner />
                  </td>
                </tr>
              ) : (
                data &&
                data.payload.products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`${API_URL}/images/products/${product.images[0]}`}
                              alt="Mohammad Rakib"
                              placeholder="blur"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {product.product_name}
                          </div>
                          <div className="text-sm opacity-50">
                            ID: {product._id}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Category */}
                    <td>{product.category}</td>
                    {/* Stock */}
                    <td>
                      <span
                        className={
                          product.quantity < 1 ? "badge_red" : "badge_green"
                        }
                      >
                        {product.quantity <= 0
                          ? "Out of stock!"
                          : product.quantity + " - in stock"}
                      </span>
                    </td>
                    {/* Price */}
                    <td className="font-bold">${product.sell_price}</td>
                    {/* Action button */}
                    <td className="text-right">
                      <div>
                        <label
                          htmlFor="product-edit-modal"
                          className="btn_blue"
                          onClick={() => handleSelectedProduct(product._id)}
                        >
                          <MdEdit />
                        </label>
                        &nbsp;&nbsp;
                        <button
                          onClick={() => deleteHandle(product._id)}
                          className="btn_blue bg-red-700 hover:bg-red-600"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {data && (
          <div className="w-full flex items-center justify-center gap-2 py-5">
            <button
              className="btn_black"
              onClick={() => handlePageChange("prev")}
              disabled={!data.payload.pagination.previousPage ? true : false}
            >
              <AiOutlineLeft />
            </button>
            <span className="bg-gray-300 text-black rounded-full text-sm font-bold py-3 px-4">
              {data.payload.pagination.currentPage}
            </span>
            <button
              className="btn_black"
              onClick={() => handlePageChange("next")}
              disabled={!data.payload.pagination.nextPage ? true : false}
            >
              <AiOutlineRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
