"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center align-center p-5">
      <p className="text-center">
        To contribute, visit my
        <Link
          href="https://github.com/ekurt/rick-and-morty-api"
          target="_blank"
          className="underline mx-1"
        >
          github repo.
        </Link>
        Visit
        <Link
          href="https://ekurt.dev"
          target="_blank"
          className="underline mx-1"
        >
          my website
        </Link>
        for my other projects.
      </p>
    </footer>
  );
}
