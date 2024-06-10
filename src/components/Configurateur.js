import React from 'react'
import { Link } from "react-router-dom";

function Configurateur() {
  return (
    <>
      <Link to="/">
        <button className="m-5 text-xl text-white font-bold bg-gray-800 p-4 rounded-md">
          Aller à la landing page
        </button>
      </Link>
      <div>Configurateur</div>
    </>
  )
}

export default Configurateur