// import Link from 'next/link';

// export default function Page() {
//   return (
//     <div className="flex h-screen bg-black">
//       <div className="w-screen h-screen flex flex-col justify-center items-center">
//         <svg
//           width="283"
//           height="64"
//           viewBox="0 0 283 64"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-36 h-36"
//           aria-label="Vercel logo"
//         >
//           <path
//             d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
//             fill="white"
//           />
//         </svg>
//         <div className="text-center max-w-screen-sm mb-10">
//           <h1 className="text-stone-200 font-bold text-2xl">
//             Next.js + Postgres Auth Starter
//           </h1>
//           <p className="text-stone-400 mt-5">
//             This is a{' '}
//             <a
//               href="https://nextjs.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-stone-400 underline hover:text-stone-200 transition-all"
//             >
//               Next.js
//             </a>{' '}
//             starter kit that uses{' '}
//             <a
//               href="https://next-auth.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-stone-400 underline hover:text-stone-200 transition-all"
//             >
//               NextAuth.js
//             </a>{' '}
//             for simple email + password login and a{' '}
//             <a
//               href="https://vercel.com/postgres"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-stone-400 underline hover:text-stone-200 transition-all"
//             >
//               Postgres
//             </a>{' '}
//             database to persist the data.
//           </p>
//         </div>
//         <div className="flex space-x-3">
//           <Link
//             href="/protected"
//             className="text-stone-400 underline hover:text-stone-200 transition-all"
//           >
//             Protected Page
//           </Link>
//           <p className="text-white">·</p>
//           <a
//             href="https://vercel.com/templates/next.js/prisma-postgres-auth-starter"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-stone-400 underline hover:text-stone-200 transition-all"
//           >
//             Deploy to Vercel
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8 sm:p-20"
      style={{
        backgroundImage: "url('/loginBackground.jpg')", // Replace with your image path
      }}
    >
      <div className="grid grid-cols-1 gap-8 bg-white/95 dark:bg-black/85 p-8 rounded-lg shadow-lg sm:max-w-3xl sm:w-full">
        <header className="flex justify-center">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="VictoryLap logo"
            width={350}
            height={100}
            priority
          />
        </header>

        <main className="flex flex-col items-center justify-center text-center">
          <p className="text-sm sm:text-base font-[family-name:var(--font-geist-mono)] text-white mb-8">
            Welcome to your motivational fitness app. Get started by{" "}
            <code className="bg-black/[.15] dark:bg-white/[.15] px-1 py-0.5 rounded font-semibold">
              Log In/Sign Up.
            </code><br></br>
            Brought to you by Team VictoryLap.
          </p>

          {/* Centered buttons */}
          <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
            <Link
              href="/protected"
              className="rounded-full border border-solid border-black dark:border-white transition-colors flex items-center justify-center bg-white text-black hover:bg-gray-200 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              <Image
                className="dark"
                src="/image.png"
                alt="Vercel logomark"
                width={50}
                height={50}
              />
              Log In
            </Link>
          </div>
        </main>

        <footer className="flex gap-6 flex-wrap items-center justify-center text-white">
          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="Learn"
              width={16}
              height={16}
            />
            Learn
          </Link>
          <Link
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Examples"
              width={16}
              height={16}
            />
            Examples
          </Link>
          <Link
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Go to next.js"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </Link>
        </footer>
      </div>
    </div>
  );
}







