import React, { useEffect } from "react";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { useState } from "react";
import Card from "./Card";
function Category() {
  const [category, setCategory] = useState([]);
  const [scroll, setScroll] = useState(0);

  const fetchCategory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/top-restaurant-chains"
      );
      const data = await response.json();
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <>
      <div className="main  w-[1100px] mx-auto my-10">
        <div className="whatsonyourmind flex justify-between my-3">
          <span className="text-3xl font-bold tracking-tighter">
            {" "}
            Top Restaurant Chains In Hyderabad{" "}
          </span>
          <div className="left_right_buttons flex">
            <TiArrowLeft
              className="text-4xl bg-slate-300 rounded-3xl mx-2 cursor-pointer"
              onClick={() => {
                if (scroll == 0) {
                  return;
                }
                if (scroll == -540) {
                  setScroll((prev) => prev + 540);
                  return;
                }
                setScroll((prev) => prev + 600);
              }}
              style={{
                opacity: scroll === 0 ? 0.5 : 1,
              }}
            />
            <TiArrowRight
              className="text-4xl bg-slate-300 rounded-3xl mx-2 cursor-pointer"
              onClick={() => {
                if (scroll == -1200) {
                  setScroll((prev) => prev - 540);
                  return;
                }
                if (scroll == -1740) {
                  return;
                }

                setScroll((prev) => prev - 600);
              }}
              style={{
                opacity: scroll === -1740 ? 0.5 : 1,
              }}
            />
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-x-3 duration-500"
            style={{
              transform: `translateX(${scroll}px)`,
            }}
          >
            {category.map((value, index) => {
              return <Card key={index} para={value} />;
            })}
          </div>
        </div>

        <hr className="my-10 bg-slate-200 h-0.5" />
      </div>
    </>
  );
}

export default Category;
