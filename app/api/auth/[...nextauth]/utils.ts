import NextAuth from "next-auth";
//import Providers from "next-auth/providers";

export default NextAuth({
  providers: [],
  secret: process.env.NEXTAUTH_SECRET, // Use an environment variable for security
});
