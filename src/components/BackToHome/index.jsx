"use client";
import Link from "next/link";

export default function BackToHome({ page }) {
  return (
    <div className="w-full lg:w-[1000px] flex justify-start align-center px-5 lg:px-0">
      <Link href={`/?page=${page}`}>
        <span className="border-2 p-2">Back to Home</span>
      </Link>
    </div>
  );
}
