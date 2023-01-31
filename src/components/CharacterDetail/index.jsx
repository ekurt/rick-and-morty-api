"use client";

import Image from "next/image";

export default function CharacterDetail({
  id,
  name,
  image,
  status,
  species,
  gender,
  origin,
  location,
}) {
  return (
    <div
      className="w-full lg:w-[1000px] lg:h-[400px] flex flex-wrap lg:flex-nowrap justify-between items-center mt-6 px-5 lg:px-0"
      key={id}
    >
      <div className="w-full lg:w-[600px] relative z-10 h-full">
        <div className="absolute top-0 left-0 -z-20 w-full h-full">
          <Image
            src={image}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt={name}
            fill
          />
        </div>
        <div className="w-full h-full flex justify-center items-center backdrop-blur-xl">
          <Image
            src={image}
            width={300}
            height={300}
            alt={name}
            className="-rotate-6"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-y-3 pl-10 py-10 bg-green-800">
        <h3 className="text-6xl">{name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin Name: {origin.name}</p>
        <p>Location Name: {location.name}</p>
      </div>
    </div>
  );
}
