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
    <div className="sticky top-0 h-screen w-64 bg-base-200 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="avatar">
          <div className="mask mask-squircle w-56">
            <img src="/alex-img.jpg" alt="" />
          </div>
        </div>
        <span className="text text-xl text-center m-4">
          Alexander Edic
        </span>
        <div className="badge badge-l">
          Full-Stack Web Developer
        </div>
        <span className="divider"></span>
        <span className="flex justify-evenly items-center w-full">
          <div className="badge badge-xl">
            <BiEnvelope />
          </div>
          <span>edic.xander@gmail.com</span>
        </span>
        <span className="flex justify-evenly items-center w-full">
          <div className="badge badge-xl">
            <BiPhone />
          </div>
          <span>09193714311</span>
        </span>
        <span className="flex justify-evenly items-center w-full">
          <div className="badge badge-xl">
            <BiCurrentLocation />
          </div>
          <span>
            Don Galo, Parañaque City, Metro Manila
          </span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
