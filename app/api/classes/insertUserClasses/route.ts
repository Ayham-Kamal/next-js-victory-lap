// app/api/classes/insertUserClasses/route.ts
import { insertUserClasses } from "../../../db";

export async function POST(req: Request) {

  try {
    const { userId, classId, dateAttended, daysAttended } = await req.json();

     // Log incoming data
     console.log("Received data:", { userId, classId, dateAttended, daysAttended });

    const success = await insertUserClasses(userId, classId, dateAttended, daysAttended);
    if (success) {
      return new Response("Registration successful", { status: 200 });
    } else {
      return new Response("Registration failed", { status: 400 });
    }
  } catch (error) {
    console.error("Error registering class:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
