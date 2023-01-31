"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center align-center p-5">
      <Link href="https://github.com/ekurt/rick-and-morty-api" target="_blank">
        Github
      </Link>
    </footer>
  );
}
