import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black p-6 mt-10">
      <div className="w-[1200px]  justify-between flex p-4 gap-4 items-start mx-auto text-white">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <div className="size-[50px] mt-2">
              <img src="../../public/swiggy_footer.png" alt="Swiggy" />
            </div>
            <span className="text-4xl font-bold">Swiggy</span>
          </div>
          <span className="mt-3 ml-3 text-slate-500 text-xl font-bold">
            © 2024 Bundl Technologies
            <br /> Pvt. Ltd
          </span>
        </div>
        <div className="flex flex-col font-bold gap-5">
          <span className="text-2xl">Company</span>
          <span className="text-slate-500 text-xl">About</span>
          <span className="text-slate-500 text-xl ">Careers</span>
          <span className="text-slate-500 text-xl">Teams</span>
        </div>
        <div className="flex flex-col font-bold  gap-20">
          <div className="top flex flex-col gap-5">
            <span className="text-2xl">Contact Us</span>
            <span className="text-slate-500 text-xl">Help & Support</span>
            <span className="text-slate-500 text-xl">Partner with us</span>
            <span className="text-slate-500 text-xl">Ride with us</span>
          </div>
          <div className="bottom flex flex-col gap-5">
            <span className="text-2xl">Legal</span>
            <span className="text-slate-500 text-xl">Terms & Conditions</span>
            <span className="text-slate-500 text-xl">Cookie Policy</span>
            <span className="text-slate-500 text-xl">Privacy Policy</span>
          </div>
        </div>
        <div className="flex flex-col font-bold gap-5">
          <span className="text-2xl">We deliver to:</span>
          <span className="text-slate-500 text-xl">Bangalore</span>
          <span className="text-slate-500 text-xl ">Gurgaon</span>
          <span className="text-slate-500 text-xl">Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
