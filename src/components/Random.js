import React from "react";
import Spinners from "./Spinners";
import useGif from "../hooks/useGif";
function Random() {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-1/2 bg-green-500 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinners /> : <img src={gif} width="450px" alt="gif" />}

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
