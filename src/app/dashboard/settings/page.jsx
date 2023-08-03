"use client";
import Link from "next/link";

const Settings = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="max-w-[800px] grid gap-6 lg:grid-cols-2 ">
        {/* Update password */}
        <form className="">
          <h2>Change password</h2>
          <h3 className="mt-4 mb-2 text-sm">Current password *</h3>
          <input
            type="text"
            placeholder="Current password"
            className="field_input text-sm w-full"
          />
          <h3 className="mt-4 mb-2 text-sm">New password *</h3>
          <input
            type="text"
            placeholder="New password"
            className="field_input text-sm w-full"
          />
          <h3 className="mt-4 mb-2 text-sm">Confirm password *</h3>
          <input
            type="text"
            placeholder="Confirm password"
            className="field_input text-sm w-full"
          />
          <br />
          <button className="btn_sp mt-6">Save password</button>
        </form>
        {/* Update settings */}
        <form>
          <h2 className="mb-4">Settings</h2>
          <h3 className="mt-4 text-sm">Featured product</h3>
          <select
            defaultValue="DEFAULT"
            className="select select-bordered field_input text-sm w-full mt-2"
          >
            <option value="DEFAULT" disabled>
              Select One
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <h3 className="mt-4 mb-2 text-sm">Shipping price ($USD)</h3>
          <input
            type="number"
            placeholder="$10.00"
            className="field_input text-sm w-full"
          />
          <br />
          <button type="submit" className="btn_sp mt-6">
            Save settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
