import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { googleID, googleSecret } from "@/utils/secret";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleID,
      clientSecret: googleSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
