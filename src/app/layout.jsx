import "./globals.css";
import AuthProvider from "@/components/common/AuthProvider";

export const metadata = {
  title: "ER.com",
  description: "By Rakib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
