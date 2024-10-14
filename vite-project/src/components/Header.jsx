import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../../public/logo_192x192.avif";
import { GoBriefcase } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscListFilter } from "react-icons/vsc";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { TbCurrentLocation } from "react-icons/tb";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  const blackOverlay = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const navItems = [
    {
      icon: <GoBriefcase />,
      naam: "Swiggy Corporate",
    },
    {
      icon: <IoSearch />,
      naam: "Search",
    },
    {
      icon: <BiSolidOffer />,
      naam: "Offers",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      naam: "Help",
    },
    {
      icon: <FaUser />,
      naam: "Sign In",
    },
    {
      icon: <IoCartOutline />,
      naam: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay fixed h-full w-full z-50 duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          // pointerEvents: modalOpen ? "auto" : "none",
        }}
        onClick={blackOverlay}
      >
        <div
          className="location w-1/3 h-full bg-white duration-300 absolute flex justify-end"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Content inside white overlay from left - search , location */}
          <div className=" my-8 w-[370px] m-2">
            <div className="locationsearch">
              <IoMdClose
                className="text-3xl cursor-pointer"
                onClick={blackOverlay}
              />
              <div className="getcurrentlocation my-7 ">
                <input
                  type="text"
                  placeholder="Search for area,street name..."
                  className="bg-white placeholder:text-lg border border-gray-300 p-2 w-[340px] h-[50px]  focus:shadow-md font-medium outline-none"
                />
                <div className="my-8 border p-5 w-[340px] h-[100px] border-gray-300 flex hover:text-orange-500 cursor-pointer">
                  <div className=" flex cursor-pointer ">
                    <TbCurrentLocation className="text-2xl" />
                    <div className="ml-3">
                      <span className="text-md font-semibold ">
                        Get Current Location
                      </span>
                      <br></br>
                      <span className="text-md text-gray-400">Using GPS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className="bg-white sticky top-0 z-40 shadow-xl p-[20px] duration-500"
        style={{
          display: isSticky ? "block" : "none",
          visibility: isSticky ? "visible" : "hidden",
        }}
      >
        {/* This is a options basically copied from gridbox options */}
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="filteroptions py-3 flex">
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
          <div>
            <div className="searchbar h-[60px] bg-gray-200 rounded-xl w-[300px] ml-3 flex  flex items-center">
              <input
                className="p-2 w-[270px] bg-gray-200 rounded-xl placeholder:tracking-tighter text-xl focus:outline-none"
                type="text"
                placeholder="Search for restaurant and food"
              />

              <CiSearch className="text-2xl" />
            </div>
          </div>
        </div>
      </header>

      <header
        className="bg-white sticky top-0 z-40 shadow-xl p-[20px] duration-500"
        style={{
          display: !isSticky ? "block" : "none",
          visibility: !isSticky ? "visible" : "hidden",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="left_thing flex items-center">
            <div className="size-16">
              <img
                src={Logo}
                className="w-full hover:scale-110 cursor-pointer duration-100"
                alt="Logo"
              />
            </div>

            <div
              className="flex justify-center items-center ml-10 cursor-pointer hover:text-orange-500"
              onClick={blackOverlay}
            >
              <span className="font-bold border-b-2 border-black mx-4">
                Other
              </span>
              <FaChevronDown className="text-orange-500" />
            </div>
          </div>
          <nav className="right_thing flex items-center list-none">
            {navItems.map((value, index) => (
              <li
                key={index}
                className="flex items-center mx-3 cursor-pointer hover:text-orange-500"
              >
                {value.icon}
                <span className="font-semibold text-[18px] p-2">
                  {value.naam}
                </span>
                {value.sup && (
                  <sup className="text-orange-500">{value.sup}</sup>
                )}
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
