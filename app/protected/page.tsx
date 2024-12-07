import { auth, signOut } from "app/auth";
import { fetchName, fetchUserID } from "../db";
import Link from "next/link";
import { use } from "react";

export default async function ProtectedPage() {
  let session = await auth();
  console.log(session);

  let userID = (await fetchUserID(String(session?.user?.email))).at(0); // To access The object of id only
  console.log(userID);

  let userName = (await fetchName(userID?.id)).at(0);
  console.log(userName);

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        Hello {userName?.firstname}, {userName?.lastname}. You are logged in
        using
        {session?.user?.email} with id {userID?.id}
        <Link
          href={{
            pathname: "/protected/testSecurity",
          }}
        >
          Go to Destination
        </Link>
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
