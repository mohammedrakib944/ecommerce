import Topbar from "@/components/home/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
// import ProgressBar from "@/components/wrappers/ProgressBar";

export const metadata = {
  title: "ER.com",
  description: "By Rakib",
};

export default function ClientLayout({ children }) {
  return (
    <div>
      <Topbar />
      <div className="max-w-[990px] mx-auto">
        <Navbar />
        <div className="px-4">{children}</div>
      </div>
      <div className="border-t mt-20 py-6">
        <Footer />
      </div>
    </div>
  );
}
