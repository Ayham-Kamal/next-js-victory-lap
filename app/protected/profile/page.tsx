import Image from "next/image";
import { fetchInfo, updateInfo, fetchUserID } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "app/auth";

export default async function ProfilePage() {
  let session = await auth();
  let userID = (await fetchUserID(String(session?.user?.email))).at(0); // To access The object of id only
  let userInfo = (await fetchInfo(userID?.id)).at(0);

  let Email = String(userInfo?.email);
  let Firstname = String(userInfo?.firstname);
  let Lastname = String(userInfo?.lastname);
  let Weight = Number(userInfo?.weight);
  let Gender = String(userInfo?.gender);
  let profilePicture = "/ProfilePic.png";

  async function Update(formData: FormData) {
    "use server";
    let firstName = formData.get("firstname") as string;
    let lastName = formData.get("lastname") as string;
    let weight = Number(formData.get("weight"));
    let gender = formData.get("gender") as string;

    // console.log(firstName, lastName, weight, gender);

    //If user made changes, save changes to db, else, keep old data
    if (firstName.length == 0) {
      //console.log("Empty First");
      firstName = Firstname;
    }
    if (lastName.length == 0) {
      //console.log("Empty Last");
      lastName = Lastname;
    }
    if (weight == 0) {
      //console.log("Empty Weight");
      weight = Weight;
    }
    if (gender == null) {
      //console.log("Empty Gender");
      gender = Gender;
    }

    updateInfo(userID?.id, firstName, lastName, weight, gender);
    // console.log(firstName, lastName, weight, gender);

    redirect("/protected/profile");
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        padding: "20px",
        color: "#333",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        flexDirection: "column", // Stack elements vertically
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column", // Stack child elements vertically
          flexGrow: 1, // Allow the form content to take available space
          justifyContent: "space-between", // Space between form and button
        }}
      >
        {/* Profile Header */}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
              width: "130px",
              height: "130px",
              margin: "0 auto 10px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #4a90e2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={profilePicture}
              alt={`${Firstname} ${Lastname}`}
              width={150}
              height={150}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h2 style={{ margin: "5px 0" }}>{`${Firstname} ${Lastname}`}</h2>
          <p style={{ margin: "5px 0", color: "#777" }}>{Email}</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Gender: {Gender}</p>
        </div>

        {/* Form */}
        <form
          action={Update}
          className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
          style={{ flexGrow: 1 }} // Allow the form to grow and take available space
        >
          <div>
            <label
              htmlFor="firstname"
              className="block text-xs text-gray-600 uppercase"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder={Firstname}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-xs text-gray-600 uppercase"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder={Lastname}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-xs text-gray-600 uppercase"
            >
              Weight (kg)
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              step="1"
              placeholder="70"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 uppercase">
              Gender
            </label>
            <div className="mt-1 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-700">Female</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-700">Other</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
          >
            Edit
          </button>
        </form>

        {/* Go Back Button */}
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f7f9fc",
          }}
        >
          <Link href="/dashboard">
            <button
              style={{
                width: "100%",
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
      </div>
    </div>
  );
}
