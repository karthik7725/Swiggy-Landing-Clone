import React from "react";
import SvgComponent from "./SvgComponent";
function Card(props) {
  return (
    <>
      <div className="w-[273px] shrink-0 flex-grow">
        <div className="h-[182px] rounded-xl overflow-hidden relative">
          <img
            src={"http://localhost:5000/images/" + props.para.image}
            className="object-cover w-full h-full"
            alt="Card"
          />
          {/* Gradient overlay this things covers up the whole image ka div inset means top,b,r,l all 0 cant u*/}
          <div className="absolute inset-0 h-48 opacity-100 bg-gradient-to-t from-black to-transparent flex items-end py-4 px-2 text-white text-2xl tracking-tighter font-bold">
            {props.para.offer}
          </div>
        </div>
        <span className="text-xl tracking-tighter font-bold">
          {props.para.title}
        </span>

        <br />
        <div className="flex items-center">
          <SvgComponent style={{ display: "inline-block" }} />
          <span className="ml-1 font-semibold tracking-tighter">
            {props.para.rating} · {props.para.minTime} - {props.para.maxTime}{" "}
            mins <br />
          </span>
        </div>

        <span className="text-gray-600">
          {" "}
          {props.para.name} <br />
          {props.para.place}{" "}
        </span>
      </div>
    </>
  );
}

export default Card;
