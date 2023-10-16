import useBillboard from "@/hooks/useBillboard";
import React, { useEffect, useRef, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";

const Billboard = () => {
  const [play, setPlay] = useState(false);
  const { data } = useBillboard();

  useEffect(() => {
    const videoRef = document.querySelector("video");
    if (play) {
      videoRef?.play();
    } else {
      videoRef?.pause();
      videoRef?.load();
    }

    setTimeout(() => {
      setPlay(!play);
    }, 20000);
  }, [play]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        loop
        muted
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="mt-5 text-white w-[80%] md:w-[80%] lg:w-[50%] text-sm md:text-lg lg:text-xl font-light drop-shadow-xl">
          {data?.description}
        </p>
        <button
          className="
          mt-5
          bg-zinc-500/90
          hover:bg-zinc-500/70
          text-white
          px-4
          flex
          items-center
          py-2
          rounded
          gap-2
          text-md
        "
        >
          <BiInfoCircle size={32} />
          More Info
        </button>
      </div>
      <p className="absolute right-0 top-3/4 bg-zinc-900/90 border-l-2 w-[5.25rem] p-2 text-white font-extralight text-sm">
        18+
      </p>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black"></div>
    </div>
  );
};

export default Billboard;
