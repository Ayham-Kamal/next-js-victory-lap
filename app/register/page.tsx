import Link from "next/link";
import { Form } from "app/form";
import { redirect } from "next/navigation";
import { SubmitButton } from "app/submit-button";


export default function Signup() {
  // Function to handle signup logic
  async function register(formData: FormData) {
    "use server";
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const weight = formData.get("weight") as string;
    const gender = formData.get("gender") as string;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
            weight,
            gender,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data.message);
      redirect("/login"); // Redirect to login after successful signup
    } catch (error: any) {
      console.error("Error during signup:", error.message);
      // Optionally handle errors here (e.g., show an error message to the user)
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <div className="px-6 py-4">
            {/* First Name */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            {/* Last Name */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            {/* Email */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            {/* Password */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            {/* Weight */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
              Weight (in lbs)
            </label>
            <input
              type="number"
              name="weight"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            />

            {/* Gender */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="">Select...</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <SubmitButton>Sign Up</SubmitButton>
        </Form>

        <p className="text-center text-sm text-gray-600">
          {"Already have an account? "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>
          {" instead."}
        </p>
      </div>
    </div>
  );
}