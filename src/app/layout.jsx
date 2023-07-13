import Topbar from "@/components/home/Topbar";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
// import ProgressBar from "@/components/wrappers/ProgressBar";

export const metadata = {
  title: "ER.com",
  description: "By Rakib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Topbar />
        <div className="max-w-[990px] mx-auto">
          <Navbar />
          <div className="px-4"></div>
        </div>
        <div className="border-t mt-20 py-6">
          <Footer />
        </div> */}
      </body>
    </html>
  );
}
