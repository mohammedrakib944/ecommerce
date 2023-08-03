"use client";
import { MdDelete, MdSearch } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";
import moment from "moment";
import Spinner from "@/components/common/Spinner";
import OrdersEdit from "@/components/dashboard/orders/OrdersEdit";
import { useState } from "react";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState({});
  const { data: orders, isLoading } = useGetAllOrdersQuery();
  return (
    <div>
      <OrdersEdit order={selectedOrder} />
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Orders</li>
        </ul>
      </div>
      <h2 className="mb-4">Orders</h2>
      <div>
        <div className="flex items-center gap-2 bg-white px-3 rounded-sm mb-2 shadow-sm">
          <MdSearch />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full bg-transparent focus:outline-none py-2"
          />
        </div>
        {/* TABLE */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="overflow-x-auto bg-white shadow">
            <table className="table table-zebra table-compact">
              {/* head */}
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total Amount</th>
                  <th>Paid</th>
                  <th>status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {orders &&
                  orders.map((order, index) => (
                    <tr key={index}>
                      <td>#{order._id}</td>
                      <td>
                        {moment(order.created_at).format("DD-MM-YYYY, h:mm a")}
                      </td>
                      <td className="font-semibold">{order.total_price}</td>
                      <td>
                        {order.is_paid ? (
                          <span className="badge_green">YES</span>
                        ) : (
                          <span className="badge_red">NO</span>
                        )}
                      </td>
                      <td>
                        {order.status === "delivered" ? (
                          <span className="badge_green">{order.status}</span>
                        ) : (
                          <span className="badge_blue">{order.status}</span>
                        )}
                      </td>
                      <td className="flex justify-end">
                        <label
                          htmlFor="orders-edit-modal"
                          className="btn_blue gap-2"
                          onClick={() => setSelectedOrder(order)}
                        >
                          Details <BsChevronRight />
                        </label>
                        &nbsp;&nbsp;
                        <button className="btn_blue bg-red-600">
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
