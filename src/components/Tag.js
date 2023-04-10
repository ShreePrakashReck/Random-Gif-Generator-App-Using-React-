import React, { useState } from "react";
import Spinners from "./Spinners";
import useGif from "../hooks/useGif";
function Tag() {
  const [tag, setTag] = useState("car");
  function clickHandler() {
    fetchData(tag);
  }
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-500 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random {tag} Gif
      </h1>
      {loading ? <Spinners /> : <img src={gif} width="450px" alt="gif" />}

      <input
        onChange={changeHandler}
        type="text"
        value={tag}
        className="text-center rounded-md"
      />

      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
