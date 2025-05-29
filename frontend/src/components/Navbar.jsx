import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <div className="navbar bg-base-300 shadow-sm rounded-t-lg">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => navigate("/")}>
                About me
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  navigate("/resume")
                }
              >
                Resume
              </a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
