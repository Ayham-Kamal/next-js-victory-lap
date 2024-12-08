// page.tsx
import { fetchClass } from "../db";
import { insertUserClasses } from "../db";
import ClassesClient from "./ClassesClient";

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
}

export default async function ClassesPage() {
  const userId = 2; // Simulated logged-in user ID
  let classes: Class[] = [];

  try {
    classes = await fetchClass();
  } catch (error) {
    console.error("Error fetching classes:", error);
  }

  // Example of inserting user class (move this part server-side)
  // You could invoke insertUserClasses here, before passing the props
  const success = await insertUserClasses(userId, 1, new Date(), 0); // Example usage
  if (success) {
    console.log("User successfully registered for the class!");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "20px 0", fontWeight: "bold" }}>
        Fitness Classes
      </h1>
      <ClassesClient userId={userId} classes={classes} />
    </div>
  );
}
