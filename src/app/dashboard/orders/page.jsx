import AdminLayout from "@/components/dashboard/AdminLayout";
import { MdDelete, MdSearch } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const Orders = () => {
  return (
    <AdminLayout>
      {/* MODAL */}
      <input type="checkbox" id="orders-edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="orders-edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2>Details</h2>
          <form className="py-4 grid gap-3 md:grid-cols-2">
            <div>
              <p>
                Order ID: <span className="font-semibold">#23522</span>
              </p>
              <p>
                Mobile: <span className="font-semibold">017902342</span>
              </p>
              <p>
                Address: <span className="font-semibold">Monnafer Mor</span>
              </p>
            </div>
            <div>
              {/* only status edit */}
              <select className="select select-bordered w-full max-w-xs">
                <option disabled>Select Status</option>
                <option value="">Pending</option>
                <option value="">Processing</option>
                <option value="">Shipped</option>
                <option value="">Deliverd</option>
              </select>
              <button className="btn_main mt-4">Update</button>
            </div>
          </form>
        </div>
      </div>
      {/* MODAL */}
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
        <div className="overflow-x-auto shadow">
          <table className="table table-compact w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Paid</th>
                <th>status</th>
                <th>Products</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>#412</th>
                <td>12/02/2022, 12:04</td>
                <td>018293912</td>
                <td>Monnafer Mor, Rajshahi</td>
                <td>
                  <span className="badge_green">Yes</span>
                </td>
                <td>
                  <span className="badge_blue">Pending</span>
                </td>
                <td>Mackbook Pro 14"</td>
                <td className="flex justify-end">
                  <label
                    htmlFor="orders-edit-modal"
                    className="btn_small gap-2"
                  >
                    Details <BsChevronRight />
                  </label>
                  &nbsp;&nbsp;
                  <button className="btn_small bg-red-600">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>#412</th>
                <td>12/02/2022, 12:04</td>
                <td>018293912</td>
                <td>Monnafer Mor, Rajshahi</td>
                <td>
                  <span className="badge_green">Paid</span>
                </td>
                <td>
                  <span className="badge_green">Shipped</span>
                </td>
                <td>Mackbook Pro 14", I phone 14 pro"</td>
                <td className="flex justify-end">
                  <label
                    htmlFor="orders-edit-modal"
                    className="btn_small gap-2"
                  >
                    Details <BsChevronRight />
                  </label>
                  &nbsp;&nbsp;
                  <button className="btn_small bg-red-600">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>#412</th>
                <td>12/02/2022, 12:04</td>
                <td>018293912</td>
                <td>Monnafer Mor, Rajshahi</td>
                <td>
                  <span className="badge_red">No</span>
                </td>
                <td>
                  <span className="badge_red">Cancled</span>
                </td>
                <td>Mackbook Pro 14"</td>
                <td className="flex justify-end">
                  <label
                    htmlFor="orders-edit-modal"
                    className="btn_small gap-2"
                  >
                    Details <BsChevronRight />
                  </label>
                  &nbsp;&nbsp;
                  <button className="btn_small bg-red-600">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>#412</th>
                <td>12/02/2022, 12:04</td>
                <td>018293912</td>
                <td>Monnafer Mor, Rajshahi</td>
                <td>
                  <span className="badge_red">No</span>
                </td>
                <td>
                  <span className="badge_blue">Processing</span>
                </td>
                <td>Mackbook Pro 14"</td>
                <td className="flex justify-end">
                  <label
                    htmlFor="orders-edit-modal"
                    className="btn_small gap-2"
                  >
                    Details <BsChevronRight />
                  </label>
                  &nbsp;&nbsp;
                  <button className="btn_small bg-red-600">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>#412</th>
                <td>12/02/2022, 12:04</td>
                <td>018293912</td>
                <td>Monnafer Mor, Rajshahi</td>
                <td>
                  <span className="badge_red">No</span>
                </td>
                <td>
                  <span className="badge_green">Delivered</span>
                </td>
                <td>Mackbook Pro 14"</td>
                <td className="flex justify-end">
                  <label
                    htmlFor="orders-edit-modal"
                    className="btn_small gap-2"
                  >
                    Details <BsChevronRight />
                  </label>
                  &nbsp;&nbsp;
                  <button className="btn_small bg-red-600">
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

export default Orders;
