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
            </code>
            <br></br>
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
