import { API_URL } from "@/redux/features/api/apiSlice";
import { useEditStatusMutation } from "@/redux/features/order/orderApi";
import moment from "moment";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const OrdersEdit = ({ order }) => {
  const [setStatus, setSetStatus] = useState("");
  const [editStatus, { isLoading, error, isSuccess }] = useEditStatusMutation();

  const handleEdit = (e) => {
    e.preventDefault();
    if (order?._id) {
      const sendingData = {
        order_id: order?._id,
        status: setStatus,
      };
      editStatus(sendingData);
    }
  };

  // handle errors
  useEffect(() => {
    if (error) {
      toast.error(error.data?.message);
    }
    if (isSuccess) {
      toast.success("Status updated!");
    }
  }, [error, isSuccess]);

  // set initial status
  useEffect(() => {
    setSetStatus(order?.status);
  }, [order]);

  return (
    <div>
      <Toaster position="bottom-center" />
      <input type="checkbox" id="orders-edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="orders-edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="mb-2">Details</h2>
          <h4 className="text-sm text-gray-400">Products: </h4>
          {order &&
            order?.products?.map((product, index) => (
              <div
                key={index}
                className="flex gap-3 items-center border-y my-2"
              >
                <img
                  src={`${API_URL}/images/products/${product.images[0]}`}
                  width="100"
                  className="object-cover"
                  alt="product image"
                />
                <div>
                  <p className="text-sm font-bold">{product.product_name}</p>
                  <p className="text-xs">Price: ${product.sell_price}</p>
                  {/* <p className="text-xs">Quantity: 1</p> */}
                </div>
              </div>
            ))}
          <div>
            <p>
              <span className="font-semibold mt-2">#{order?._id}</span>
            </p>
            <p className="text-sm mt-2">
              Time:{" "}
              <span className="font-semibold">
                {moment(order?.created_at).format("DD-MM-YYYY, h:mm a")}
              </span>
            </p>
            <p className="text-sm">
              Total amount:{" "}
              <span className="font-semibold">${order?.total_price}</span>
            </p>
            <p className="text-sm">
              Paid:{" "}
              {order?.is_paid ? (
                <span className="badge_green">YES</span>
              ) : (
                <span className="badge_red">NO</span>
              )}
            </p>
          </div>
          <form className="mt-3 pt-2 border-t" onSubmit={handleEdit}>
            <h2 className="mb-2">Update Status</h2>
            <div>
              {/* only status edit */}
              <select
                value={setStatus}
                className="select field_input w-full"
                onChange={(e) => setSetStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
              <button
                disabled={isLoading}
                type="submit"
                className="btn_sp mt-4"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrdersEdit;
