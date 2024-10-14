import React, { useEffect } from "react";
import { TiArrowLeft } from "react-icons/ti";
import { TiArrowRight } from "react-icons/ti";
import { useState } from "react";
function Category() {
  const [category, setCategory] = useState([]);
  const [scroll, setScroll] = useState(0);

  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
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
      <div className="main  w-[1100px] mx-auto">
        <div className="whatsonyourmind flex justify-between my-3">
          <span className="text-3xl font-bold tracking-tighter">
            {" "}
            What's on your mind?{" "}
          </span>
          <div className="left_right_buttons flex">
            <TiArrowLeft
              className="text-4xl bg-slate-300 rounded-3xl mx-2 cursor-pointer"
              onClick={() => {
                if (scroll >= 0) {
                  return;
                }
                if (scroll == -300) {
                  setScroll((prev) => prev + 300);
                  return;
                }
                setScroll((prev) => prev + 400);
              }}
              style={{
                opacity: scroll === 0 ? 0.5 : 1,
              }}
            />
            <TiArrowRight
              className="text-4xl bg-slate-300 rounded-3xl mx-2 cursor-pointer"
              onClick={() => {
                if (scroll == -1500) {
                  return;
                }
                if (scroll == -1200) {
                  setScroll((prev) => prev - 300);
                  return;
                }
                setScroll((prev) => prev - 400);
              }}
              style={{
                opacity: scroll === -1500 ? 0.5 : 1,
              }}
            />
          </div>
        </div>

        <div className="carousel-images flex gap-x-4  h-[200px] w-full overflow-hidden">
          {category.map((value, index) => (
            <img
              src={"http://localhost:5000/images/" + value.image}
              className="shrink-0 flex-grow duration-500"
              style={{
                transform: `translateX(${scroll}%)`,
              }}
            />
          ))}
        </div>
        <hr className="my-16 bg-slate-200 h-0.5" />
      </div>
    </>
  );
}

export default Category;
