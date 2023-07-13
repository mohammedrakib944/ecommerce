import AdminLayout from "@/components/dashboard/AdminLayout";
import Link from "next/link";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="max-w-[800px] grid lg:grid-cols-2">
        {/* Update settings */}
        <form>
          <h2 className="mb-4">Settings</h2>
          <h3 className="mt-4">Featured product</h3>
          <select className="select select-bordered w-full max-w-xs mt-4">
            <option disabled selected>
              Select One
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <h3 className="mt-4 mb-4">Shipping price ($USD)</h3>
          <input
            type="number"
            placeholder="$10.00"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <button type="submit" className="btn_main mt-6">
            Save settings
          </button>
        </form>

        {/* Update password */}
        <form>
          <h2>Change password</h2>
          <h3 className="mt-4 mb-4">Current password *</h3>
          <input
            type="password"
            placeholder="Current password"
            className="input input-bordered w-full max-w-xs"
          />
          <h3 className="mt-4 mb-4">New password *</h3>
          <input
            type="password"
            placeholder="New password"
            className="input input-bordered w-full max-w-xs"
          />
          <h3 className="mt-4 mb-4">Confirm password *</h3>
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <button className="btn_main mt-6">Save password</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Settings;
