// "use client";
import { useRouter } from "next/router";
import { auth } from "app/auth";
import { fetchUserID } from "@/app/db";
export default async function Secure() {
  let session = await auth();
  let userID = (await fetchUserID(String(session?.user?.email))).at(0); // To access The object of id only
  return (
    <div>
      <p>This is secured</p>
      <p>id {userID?.id} </p>
    </div>
  );
}
