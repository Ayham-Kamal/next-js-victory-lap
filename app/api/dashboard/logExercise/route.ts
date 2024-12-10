// app/api/exercises/logExercise/route.ts
import { fetchEquipmentId, fetchMuscleId, logExercise } from "../../../db";

export async function POST(req: Request) {
  try {
    const {
      userid,
      musclename,
      workoutname,
      equipmentname,
      setschosen,
      repschosen,
      weightused,
    } = await req.json();

    console.log("Logging new exercise:", {
      userid,
      musclename,
      workoutname,
      equipmentname,
      setschosen,
      repschosen,
      weightused,
    });

    let muscleid = (await fetchMuscleId(musclename)).at(0);
    let equipmentid = (await fetchEquipmentId(equipmentname)).at(0);
    //console.log(muscleid?.muscleid, " ", equipmentid?.equipmentid);

    const success = await logExercise(
      userid,
      workoutname,
      muscleid?.muscleid,
      equipmentid?.equipmentid,
      weightused,
      setschosen,
      repschosen
    );

    if (success) {
      console.log("success");
      return new Response("Exercise logged successfully", { status: 200 });
    } else {
      console.log("no success");
      return new Response("Failed to log exercise", { status: 400 });
    }
  } catch (error) {
    console.error("Error logging exercise:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
