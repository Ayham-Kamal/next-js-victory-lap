// page.tsx
import {
  fetchClass,
  insertUserClasses,
  fetchRegistered,
  fetchUserID,
} from "../../db";
import ClassesClient from "./ClassesClient";
import { auth } from "app/auth";
import Link from "next/link";
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

  return (
    <div>
    <header>
    <div
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f7f9fc",
          }}
        >
          <Link href={{pathname: "/protected/dashboard"}}>
            <button
              style={{
                width: "20%",
                padding: "12px",
                backgroundColor: "#4a90e2",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              // onMouseOver={(e) => (e.target.style.backgroundColor = "#357ab7")}
              // onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
            >
              Go Back to Dashboard
            </button>
          </Link>
        </div>
    </header>
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
    </div>
  );
}
