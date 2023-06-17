import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const StackCard = (props) => {
  return (
    <div className="flex justify-between w-5/12 my-10 border p-10 border-slate-600 hover:bg-teal-900/40 hover:scale-105 cursor-pointer transition-all duration-300 ease-out">
      <div className="w-1/2 text-xl">{props.name}</div>
      <ul className="w-1/2 flex flex-col items-end">
        {props.tech.map((element) => {
          return (
            <li key={element} className="flex gap-1 items-center my-2">
              {element}
              <BsArrowLeft />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackCard;
