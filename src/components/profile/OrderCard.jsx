import Link from "next/link";
import { API_URL } from "@/redux/features/api/apiSlice";
import { useDeleteOrderMutation } from "@/redux/features/order/orderApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const OrderCard = ({ refetch, order }) => {
  const [deleteOrder, { isSuccess, error, isLoading: deleting }] =
    useDeleteOrderMutation();

  const deleteOrderHandler = (order_id) => {
    if (!confirm("Order is removed!")) return;
    deleteOrder(order_id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted success!");
      refetch();
    }
    if (error) {
      toast.error(error.data?.message);
    }
  }, [isSuccess, error]);

  return (
    <div className="border p-4 rounded-md shadow mb-2">
      <p className="mb-2">
        Order ID: <span className="font-semibold">{order?._id}</span>
      </p>
      <h4 className="text-sm text-gray-400">Products: </h4>
      {order?.products.map((product, index) => (
        <div key={index} className="flex gap-3 items-center border-y my-2">
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

      <div className="text-sm">
        <p>
          Total Price:{" "}
          <span className="font-bold">${order?.total_price}.00</span>
        </p>
        <p>
          Payment:{" "}
          {order?.is_paid ? (
            <span className="text-green-600 font-semibold mt-2">Paid</span>
          ) : (
            <Link href={`/paynow/${order?._id}`}>
              <button className="btn_blue my-3">Pay Now</button>
            </Link>
          )}
        </p>
        <p className="mb-2">
          Status:{" "}
          <span className="font-semibold text-green-600">{order?.status}</span>
        </p>
        <div className="flex justify-between">
          <Link
            href={`/status/${order?._id}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            Track order
          </Link>
          {order?.status === "pending" && (
            <button
              disabled={deleting}
              className="font-semibold text-red-500 hover:underline text-xs"
              onClick={() => deleteOrderHandler(order?._id)}
            >
              Cancle Order
            </button>
          )}

          {order?.status === "delivered" && (
            <button
              disabled={deleting}
              className="font-semibold text-red-500 hover:underline text-xs"
              onClick={() => deleteOrderHandler(order?._id)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
