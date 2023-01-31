"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center align-center p-5">
      <Link href="/">
        <Image
          src="/logo.png"
          width={300}
          height={91}
          alt="Rick and Morty API"
        />
      </Link>
    </header>
  );
}
