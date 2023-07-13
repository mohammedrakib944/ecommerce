import AdminLayout from "@/components/dashboard/AdminLayout";
import { Dashboard_data } from "../../utils/data";
import HomeChart from "@/components/dashboard/HomeChart";

const index = () => {
  return (
    <AdminLayout>
      <h2 className="mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Dashboard_data.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow  py-10 px-8 rounded-md group overflow-hidden"
          >
            <div className="flex flex-col justify-center items-center relative">
              <span className="text-4xl p-5 mx-auto absolute -top-14 -left-10 bg-gray-500/20 group-hover:bg-primary/80 text-white rounded-full -rotate-12 group-hover:rotate-0 duration-150">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <h1 className="mt-2 text_gradient">{item.value}</h1>
            </div>
          </div>
        ))}
      </div>
      <h2 className="my-4">Income Statistic</h2>
      <div className="max-w-[900px] bg-white shadow rounded-lg p-4">
        <HomeChart />
      </div>
    </AdminLayout>
  );
};

export default index;
