import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <>
      <NavLink to="/Configurateur">
        <button className="m-5 text-xl text-white font-bold bg-gray-800 p-4 rounded-md">
          Config ta StéphaneMobile
        </button>
      </NavLink>
      <div>Landing page</div>
    </>
  );
}

export default Landing;
