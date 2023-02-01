"use client";

import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export default function CharacterCard({ id, name, image, page }) {
  return (
    <Link href={`/${slugify(name, { lower: true })}-${id}?page=${page}`}>
      <div
        className="w-[300px] flex flex-col justify-center items-center hover:scale-125 hover:rotate-6 duration-200 transition-transform ease-linear"
        key={id}
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt={name}
          title={name}
          className="border-r-8 border-l-8 border-t-8"
        />
        <h1
          className="bg-slate-200 text-black w-full text-2xl py-2 px-2 text-center border-l-8 border-r-8 border-b-8 truncate"
          title={name}
        >
          {name}
        </h1>
      </div>
    </Link>
  );
}
