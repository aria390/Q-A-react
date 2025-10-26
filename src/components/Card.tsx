import { useState } from "react";

interface CardPropsType {
  title: string;
}

function Card({ title }: CardPropsType) {
  let [open, setopen] = useState("+");
  return (
    <div className="w-[400px] max-w-[620px] bg-white shadow-xl rounded p-5 transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="capitalize text-slate-800 font-medium">{title}</span>
        <button
          className="hover:scale-90 cursor-pointer transition-transform text-xl pb-1 border-2 border-[#c59d5f] text-[#c59d5f] flex justify-center items-center w-7  h-7"
          onClick={() => {
            if (open === "+") {
              setopen("-");
            } else {
              setopen("+");
            }
          }}
        >
          {open}
        </button>
      </div>
      <div id="text" className="hidetext mt-4 flex flex-col gap-4">
        <hr className="text-gray-500" />
        <p className="text-[#617d98] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
          illo dolores quia nemo doloribus quaerat, magni numquam repellat
          reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default Card;
