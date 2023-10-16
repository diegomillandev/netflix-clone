import React, { useEffect, useState } from "react";
import {
  AiOutlinePlayCircle,
  AiOutlinePlus,
  AiOutlineLike,
} from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="thumbnailUrl"
        className="
        cursor-pointer 
        object-cover duration 
        transition
        shadow-xl 
        rounded-md 
        w-full 
        h-[12vw]
        group-hover:opacity-90
        sm:group-hover:opacity-0
        "
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration
        duration-300
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-125
        group-hover:opacity-100
        group-hover:-translate-y-3
      "
      >
        <img
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
          src={data?.thumbnailUrl}
          alt="thumbnailUrl"
        />

        <div className="z-10 bg-zinc-800 px-3 pt-4  pb-2 absolute w-full transition shadow-md rounded-b-md flex gap-3">
          <div className="text-black bg-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:opacity-90">
            <FaPlay />
          </div>
          <div className="text-white border border-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:opacity-90">
            <AiOutlinePlus />
          </div>
          <div className="text-white border border-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:opacity-90">
            <AiOutlineLike />
          </div>
        </div>

        <div className="">
          <p>{data.gern}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
