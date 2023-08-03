import { API_URL } from "@/redux/features/api/apiSlice";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { useEditProductMutation } from "@/redux/features/products/productApi";
import { useGetImagesQuery } from "@/redux/features/user/userApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const EditProduct = ({ product }) => {
  // redux
  const user = useSelector((state) => state.user);
  const { data: GetCategory } = useGetCategoryQuery();
  const { data: images } = useGetImagesQuery(user?._id);
  const [editProduct, { isSuccess, error }] = useEditProductMutation();
  // states
  const [uploadImages, setUploadImages] = useState([]);
  const [isupload, setIsupload] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Select Images
  const handleImageChange = (checked, image) => {
    if (checked) {
      setUploadImages((prev) => [...prev, image]);
    } else {
      const cancleImage = uploadImages.filter((prev) => prev !== image);
      setUploadImages(cancleImage);
    }
  };

  // Submit Products
  const onSubmit = (data) => {
    if (images.length < 1 && !user) return;
    const { user_id, _id, ...rest } = data;
    const sendingData = { ...rest, images: uploadImages };
    // Edit method
    editProduct({ product_id: _id, data: sendingData });
  };

  // Error and success - message
  useEffect(() => {
    if (isSuccess) {
      // after success
      toast.success("Edit success!");
      document.getElementById("closeproductEditModal").click();
    }
    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  useEffect(() => {
    reset(product);
    setUploadImages(product.images);
    setIsupload(false);
  }, [product]);

  return (
    <div>
      <Toaster position="bottom-center" />
      <input type="checkbox" id="product-edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor="product-edit-modal"
            id="closeproductEditModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Edit product</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Data */}
            <div className="grid md:grid-cols-3 gap-x-3">
              <div>
                <label className="label">
                  <span className="label-text">Product Name *</span>
                </label>
                <input
                  {...register("product_name", { required: true })}
                  placeholder="Enter name of the product"
                  className="field_input w-full"
                />
                {errors.product_name && (
                  <span className="text-red-500 text-sm">
                    Product name is required
                  </span>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Category *</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="field_input w-full"
                >
                  <option value="" disabled>
                    Choose a category
                  </option>
                  {GetCategory &&
                    GetCategory.payload.category.map((item) => (
                      <option key={item._id} value={item.category_name}>
                        {item.category_name}
                      </option>
                    ))}
                </select>
                {errors.category && (
                  <span className="text-red-500 text-sm">
                    Category is required
                  </span>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Product description"
                  className="field_input w-full max-h-[200px] pt-2"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    Description is required
                  </span>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Buy price</span>
                </label>
                <input
                  type="Number"
                  {...register("buy_price", { required: true })}
                  placeholder="Buy price"
                  className="field_input w-full"
                />
                {errors.buy_price && (
                  <span className="text-red-500 text-sm">
                    Buying price is required
                  </span>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Sell price</span>
                </label>
                <input
                  type="Number"
                  {...register("sell_price", { required: true })}
                  placeholder="Sell price"
                  className="field_input w-full"
                />
                {errors.sell_price && (
                  <span className="text-red-500 text-sm">
                    Selling price is required
                  </span>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="Number"
                  {...register("quantity", { required: true })}
                  placeholder="Product Quantity"
                  className="field_input w-full"
                />
                {errors.quantity && (
                  <span className="text-red-500 text-sm">
                    Quantity is required
                  </span>
                )}
              </div>
            </div>

            {/* Product Images */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto mt-4 overflow-hidden">
              {uploadImages &&
                uploadImages.map((image, index) => (
                  <div key={index} className="relative">
                    <label
                      onClick={() => handleImageChange(false, image)}
                      className="text-white cursor-pointer bg-red-500 p-1 absolute top-0 right-0 rounded-lg"
                    >
                      <RxCross2 />
                    </label>
                    <img
                      className="rounded-lg"
                      src={`${API_URL}/images/products/${image}`}
                      alt="Product Image"
                    />
                  </div>
                ))}
            </div>

            {/* Images */}
            {isupload ? (
              <div>
                <h3 className="mt-3 mb-2">Gallery Images</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-[300px] overflow-y-auto mt-4">
                  {images &&
                    images.payload.products_image.map((image) => (
                      <div key={image} className="relative">
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            handleImageChange(e.target.checked, image)
                          }
                          className="absolute right-0 checkbox checkbox-success"
                        />
                        <img
                          className="rounded-lg"
                          src={`${API_URL}/images/products/${image}`}
                          alt="Product Image"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="btn_outline mt-4"
                onClick={() => setIsupload(true)}
              >
                Upload Images
              </button>
            )}

            <button className="btn_sp mt-6 float-right " type="submit">
              eidt Product
            </button>
            <div className="min-h-[20px] w-full">.</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
