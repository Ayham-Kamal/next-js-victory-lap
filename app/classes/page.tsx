import { fetchClass } from "../db";
import ClassesClient from "./ClassesClient";

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
}

export default async function ClassesPage() {
  const userId = 1; // Simulated logged-in user ID
  let classes: Class[] = [];

  try {
    classes = await fetchClass();
  } catch (error) {
    console.error("Error fetching classes:", error);
  }

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
      {/* Pass data to the client-side component */}
      <ClassesClient userId={userId} classes={classes} />
    </div>
  );
}
