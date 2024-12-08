import "./globals.css";

import { GeistSans } from "geist/font/sans";

let title = "Victory Lap";
let description =
  "This is a Next.js motivational fitness app. Brought to you by Team VictoryLap (Ayham Makhamra-Mohammad Awwad). It uses NextAuth.js and a Postgres database to persist the data.";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
