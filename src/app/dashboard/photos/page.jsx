"use client";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { API_URL } from "@/redux/features/api/apiSlice";

// redux
import {
  useDeleteImageMutation,
  useGetImagesQuery,
  useUploadImagesMutation,
} from "@/redux/features/user/userApi";
import { useSelector } from "react-redux";

const Photos = () => {
  const user = useSelector((state) => state.user);
  const [uploadImages, { isLoading, isSuccess, error: imageUploadError }] =
    useUploadImagesMutation();
  const [deleteImage] = useDeleteImageMutation();
  const { data: productImages, refetch } = useGetImagesQuery(user?._id);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // multiple image input change
  const handleMultipleImage = (event) => {
    const files = [...event.target.files];
    setImages(files);

    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // multile image upload
  const miltipleImageUpload = async (e) => {
    e.preventDefault();

    if (!images) {
      toast.error("No image selected!");
      return;
    }
    let formData = new FormData();

    Array.from(images).forEach((item) => {
      formData.append("images", item);
    });

    // send formData
    if (user._id) {
      uploadImages({ data: formData, userId: user._id });
    }
  };

  // Cancle Upload
  const cancleUpload = () => {
    setImagePreviews([]);
    setImages([]);
    document.getElementById("cancleModal").click();
  };

  // Delete Image
  const handleDelete = async (imageName) => {
    if (user && imageName) {
      if (!confirm("This image can be use on other places!")) return;
      try {
        await deleteImage({ imageName, userId: user._id });
        refetch();
        toast.success("Image Deleted!");
      } catch (err) {
        toast.error("Delete failed!");
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
      document.getElementById("cancleModal").click();
      toast.success("Images uploaded success!");
      setImagePreviews([]);
      setImages([]);
    }
    if (imageUploadError) {
      toast.error(imageUploadError.data?.message);
    }
  }, [isSuccess, imageUploadError]);

  return (
    <div>
      <div>
        <Toaster position="bottom-center" />
        {/* Modal */}
        <input type="checkbox" id="imageUploadModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-[600px] max-w-5xl">
            <h3 className="font-bold text-lg mb-4">Upload product images</h3>
            {/* Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {imagePreviews?.map((preview, index) => (
                <img
                  className="border object-contain rounded-md"
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  style={{ width: "200px", height: "auto" }}
                />
              ))}
            </div>
            <div>
              <form onSubmit={miltipleImageUpload}>
                <input
                  type="file"
                  multiple
                  onChange={handleMultipleImage}
                  className="file-input file-input-bordered w-full"
                />
                <div className="flex gap-2 pt-4 justify-end mt-3">
                  <a className="btn_black" onClick={cancleUpload}>
                    Cancle
                  </a>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="btn_blue"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
          <label
            className="modal-backdrop"
            id="cancleModal"
            htmlFor="imageUploadModal"
          >
            Close
          </label>
        </div>
        {/* Dashbard Photos */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>Photos</li>
          </ul>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2>Photos</h2>
          <label className="btn_blue gap-2" htmlFor="imageUploadModal">
            <AiOutlinePlus /> Upload new photo
          </label>
        </div>

        {/* View Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {productImages &&
            productImages?.payload?.products_image.map((image_name) => (
              <div key={image_name} className="relative">
                <button
                  onClick={() => handleDelete(image_name)}
                  className="text-white bg-red-500 p-1 absolute top-0 right-0"
                >
                  <RxCross2 />
                </button>
                <img
                  className="w-full border border-black"
                  src={API_URL + "/images/products/" + image_name}
                  alt="Imagees"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
