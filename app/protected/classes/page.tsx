// page.tsx
import {
  fetchClass,
  insertUserClasses,
  fetchRegistered,
  fetchUserID,
} from "../../db";
import ClassesClient from "./ClassesClient";
import { auth } from "app/auth";

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
}

export default async function ClassesPage() {
  // Get User ID
  let session = await auth();
  let userID = (await fetchUserID(String(session?.user?.email))).at(0);
  let classes: Class[] = [];

  // Classes user is registered in
  let userClasses = await fetchRegistered(userID?.id);
  //console.log(userClasses);

  try {
    classes = await fetchClass();
  } catch (error) {
    console.error("Error fetching classes:", error);
  }

  // Example of inserting user class (move this part server-side)
  // You could invoke insertUserClasses here, before passing the props
  // const success = await insertUserClasses(userId, 1, new Date(), 0); // Example usage
  // if (success) {
  //   console.log("User successfully registered for the class!");
  // }

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          margin: "20px 0",
          fontWeight: "bold",
        }}
      >
        Fitness Classes
      </h1>
      <ClassesClient
        userId={userID?.id}
        classes={classes}
        userClasses={userClasses}
      />
    </div>
  );
}
