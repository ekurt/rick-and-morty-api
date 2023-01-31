"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Pagination({ next, prev }) {
  const nextLink = next?.split("?").pop();
  const prevLink = prev?.split("?").pop();

  const [show, setShow] = useState({
    left: false,
    right: false,
  });

  const showPortalHandle = (param) => {
    setShow({ ...show, [param]: true });
    setTimeout(() => {
      setShow({ ...show, [param]: false });
    }, 500);
  };

  return (
    <div className="relative w-full flex justify-center items-center my-6">
      <div
        className={`absolute ${
          !show.left && "hidden"
        } bottom-0 -left-10 lg:left-0`}
      >
        <Image src="/portal.png" width={100} height={160} alt="Portal" />
      </div>
      <div className="w-1/2 flex justify-end items-center px-3">
        {prev && (
          <Link href={`?${prevLink}`} onClick={() => showPortalHandle("left")}>
            <Image
              src="/portal-gun-left.png"
              width={100}
              height={77}
              alt="Previous Page"
              className="active:translate-y-1 duration-100"
            />
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-start items-center px-3">
        {next && (
          <Link href={`?${nextLink}`} onClick={() => showPortalHandle("right")}>
            <Image
              src="/portal-gun-right.png"
              width={100}
              height={77}
              alt="Next Page"
              className="active:translate-y-1 duration-100"
            />
          </Link>
        )}
      </div>
      <div
        className={`absolute ${
          !show.right && "hidden"
        } bottom-0 -right-10 lg:right-0 right`}
      >
        <Image src="/portal.png" width={100} height={160} alt="Portal" />
      </div>
    </div>
  );
}
