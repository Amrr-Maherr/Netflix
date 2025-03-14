// components/ActorCard.js
import React from "react";
import Link from "next/link";

const ActorCard = ({ actor }) => {
  return (
    <Link href={"/"}>
      <div className="group relative w-48 mx-2 my-4 flex-shrink-0">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
            alt={actor.name}
            width={300}
            height={450}
            className="rounded-md object-cover w-full h-60 md:h-72 transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="h-60 md:h-72 bg-gray-700 rounded-md flex items-center justify-center text-gray-300">
            No Image
          </div>
        )}
        <div className="text-white text-sm mt-2 text-center">{actor.name}</div>
      </div>
    </Link>
  );
};

export default ActorCard;
