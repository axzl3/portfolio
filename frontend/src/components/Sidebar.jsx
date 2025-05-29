import React from "react";

import {
  BiCurrentLocation,
  BiEnvelope,
  BiLocationPlus,
  BiPhone,
  BiPin,
} from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sticky flex items-center h-[70%] w-full bg-base-200 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="avatar flex justify-center">
          <div className="mask mask-squircle w-3/4">
            <img src="/alex-img.jpg" alt="" />
          </div>
        </div>
        <div className="text text-xl text-center m-4">
          Alexander Edic
        </div>
        <div className="badge badge-lg h-auto w-auto bg-base-300 shadow-md flex items-center justify-center">
          Full-Stack Web Developer
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-3 items-center w-full m-1">
          <div className="bg-base-300 font-bold h-10 w-10 p-1.25 rounded-xl text-center m-3 shadow-md">
            <BiEnvelope className="text-3xl" />
          </div>
          <div className="col-span-2 text-sm flex flex-col">
            <div className="font-bold">Email</div>
            <div>edic.xander@gmail.com</div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center w-full m-1">
          <div className="bg-base-300 font-bold h-10 w-10 p-1.25 rounded-xl text-center m-3 shadow-md">
            <BiPhone className="text-3xl" />
          </div>
          <div className="col-span-2 text-sm flex flex-col">
            <div className="font-bold">Phone</div>
            <div>09193714311</div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center w-full m-1">
          <div className="bg-base-300 font-bold h-10 w-10 p-1.25 rounded-xl text-center m-3 shadow-md">
            <BiCurrentLocation className="text-3xl" />
          </div>
          <div className="col-span-2 text-sm flex flex-col">
            <div className="font-bold">
              Location
            </div>
            <div>
              Don Galo, Parañaque City, Metro
              Manila
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
