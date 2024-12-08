import { drizzle } from "drizzle-orm/postgres-js";
import { pgTable, serial, varchar, numeric, date, integer } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { genSaltSync, hashSync } from "bcrypt-ts";

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export async function getUser(email: string) {
  const users = await ensureTableExists();
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  weight: number,
  gender: string
) {
  const users = await ensureTableExists();
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  // return await db.insert(users).values({ email, password: hash }); before editing
  await db.insert(users).values({ email, password: hash });

  //return await db.insert(table).values({ firstName, lastName, weight, gender });

  return await client`INSERT INTO public."users" (firstname, lastname, weight, gender) VALUES (${firstName}, ${lastName}, ${weight}, ${gender})`;
}

async function ensureTableExists() {
  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'User'
    );`;

  if (!result[0].exists) {
    await client`
      CREATE TABLE "User" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(64),
        password VARCHAR(64)
      );`;
  }

  const table = pgTable("User", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 64 }),
    password: varchar("password", { length: 64 }),
  });

  return table;
}



// Testing
export async function fetchUserName() {
  const result = await client`
  SELECT id, email FROM public."User"`;

  return result;
}

// Get user ID:
export async function fetchUserID(userEmail: string) {
  // was any
  const result = await client`
  SELECT id FROM public."User" WHERE email = ${userEmail};`;

  return result;
}

// Get userName
export async function fetchName(userID: number) {
  const result = await client`
  SELECT firstname, lastname FROM public."users" WHERE userid = ${userID};`;

  return result;
}

// Get UserData
export async function fetchInfo(userID: number) {
  const result = await client`
  SELECT email, firstname, lastname, weight, gender FROM public."User" INNER JOIN public."users" 
        ON public."User".id = public."users".userid 
        WHERE userid = ${userID};`;

  return result;
}

export async function updateInfo(
  userID: number,
  firstName: string,
  lastName: string,
  weight: number,
  gender: string
) {
  await client`UPDATE public."users" SET firstname = ${firstName}, lastname = ${lastName}, weight = ${weight}, gender = ${gender}
  WHERE userid = ${userID};`;
}

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
}


export async function fetchClass(): Promise<Class[]> {
  const result = await client`
    SELECT classid, classname, dayoffered FROM public."classes";`;

  // Ensure the result matches the Class interface
  return result.map((row) => ({
    classid: row.classid,
    classname: row.classname,
    dayoffered: row.dayoffered,
  }));
}

// export async function insertUserClasses(
//   userId: number,
//   classId: number,
//   dateAttended: Date,
//   daysAttended: number
// ): Promise<boolean> {
//   try {
//     await client`
//       INSERT INTO public."userclasses" (userid, classid, dateattended, daysattended)
//       VALUES (${userId}, ${classId}, ${dateAttended}, ${daysAttended})
//     `;
//     return true;
//   } catch (error) {
//     console.error('Error inserting user class:', error);
//     return false;
//   }
// }

// db/userClasses.ts
export async function insertUserClasses(
  userId: number,
  classId: number,
  dateAttended: Date,
  daysAttended: number
): Promise<boolean> {
  try {
    await client`
      INSERT INTO public."userclasses" (userid, classid, dateattended, daysattended)
      VALUES (${userId}, ${classId}, ${dateAttended}, ${daysAttended})
    `;
    return true;
  } catch (error) {
    console.error('Error inserting user class:', error);
    return false;
  }
}




