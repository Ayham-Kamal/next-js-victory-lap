import { fetchUserName } from "@/app/db";

export default async function List() {
  const Emails = await fetchUserName(); // wasn't

  if (!Emails || Emails.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }
  console.log(Emails);
  return (
    <ul>
      {Emails.map((Email) => (
        <li key={Email.id}>
          <h2>
            <strong>{Email.email}</strong>
          </h2>
        </li>
      ))}
    </ul>
  );
}
