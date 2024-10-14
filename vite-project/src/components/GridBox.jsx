import React, { useState, useEffect } from "react";
import { VscListFilter } from "react-icons/vsc";
import { IoChevronDownOutline } from "react-icons/io5";
import Card from "./Card";

function GridBox() {
  const options_1 = [
    {
      naame: "Filter",
      icon: <VscListFilter />,
    },
    {
      naame: "Sort By",
      icon: <IoChevronDownOutline />,
    },
    {
      naame: "Fast Delivery",
    },
    {
      naame: "New on Swiggy",
    },
    {
      naame: "Ratings 4.0+",
    },
    {
      naame: "Pure Veg",
    },
    {
      naame: "Offers",
    },
    {
      naame: "Rs.300- Rs.600",
    },
    {
      naame: "Less than Rs.300",
    },
  ];
  const [category, setCategory] = useState([]);

  useEffect(() => {
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

    fetchCategory();
  }, [category]); // Empty dependency array to run only once on mount

  return (
    <>
      <div className="restaurantswithonlinefooddelivery w-[1100px] mx-auto my-10">
        <span className="text-3xl font-bold tracking-tighter">
          Restaurants with online food delivery in Hyderabad
        </span>
        <div className="filteroptions py-5">
          <div className="flex gap-3">
            {options_1.map((value, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-400 shadow-lg flex items-center justify-center cursor-pointer px-4 py-2 whitespace-nowrap"
                >
                  <span className="text-gray-700 text-[16px] font-semibold flex items-center justify-center tracking-tighter">
                    <span>{value.naame}</span>
                    {value.icon && <span className="ml-2">{value.icon}</span>}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 ">
          {category.map((value, index) => (
            <Card key={index} para={value} />
          ))}
        </div>
      </div>
    </>
  );
}

export default GridBox;
