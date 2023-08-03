import ReduxProvider from "@/redux/provider";
import "./globals.css";
import AuthProvider from "@/hooks/AuthProvider";
import UserProvider from "@/hooks/UserProvider";

export const metadata = {
  title: "ER.com",
  description: "By Rakib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>
            <UserProvider>{children}</UserProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
