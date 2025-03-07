import { Bell, Search } from "lucide-react";
import React from "react";

export default function TopNavbarComponent({searchValue}) {
  // handle on form submit
  const handleSubmit = (e) => {
    // inputed=e.target.value
    console.log("inputed",e)
    searchValue(e.target.value);
    // to prevent the page from reload
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center w-[80%] left-85 fixed pr-10">
      <form className="relative w-[70%] ">
        {/* search button */}
        <button className="cursor-pointer">
          <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
        </button>

        {/* search input */}
        <input
          onInput={handleSubmit}
          type="text"
          placeholder="Search assignment here"
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>
      

      {/* notification bell */}
      <div className="relative mr-5 ml-5 h-12 bg-white p-2.5 rounded-full">
        <Bell className="w-7 h-7 text-primary-text" />
        {/* red dot */}
        <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 left-6"></div>
      </div>

      {/* profile image */}
      <div className="h-16 rounded-xl w-[25%] bg-white py-2.5 px-10 flex gap-3 items-start">
        <img
          src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />

        {/* username and email */}
        <div>
          <p className="capitalize text-base">dark moon</p>
          <p className="text-gray-400 text-sm">darkmoon@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
