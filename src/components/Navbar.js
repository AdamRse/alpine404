import React from "react";
import AlpineLogo from "../images/alpine-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-950 border-gray-200 text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://www.alpinecars.fr/"
            target="_parent"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={AlpineLogo} className="h-8" alt="Alpine Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Alpine
            </span>
          </a>
        </div>
      </nav>
      <nav className="bg-gray-800">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  className="text-gray-200 hover:text-cyan-300"
                  target="_parent"
                  href="#"
                >
                  <Link to="/">
                    <p className="font-thin">Accueil</p>
                  </Link>
                </a>
              </li>
              <li>
                <a
                  className="text-gray-200 hover:text-cyan-300"
                  target="_parent"
                  href="#"
                >
                  <Link to="/">
                    <p className="font-thin">Accueil</p>
                  </Link>
                </a>
              </li>
              <li>
                <a
                  href="https://www.alpinecars.fr/"
                  target="_parent"
                  className="text-gray-200 hover:text-cyan-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/stephane__supercars/?hl=fr"
                  target="_parent"
                  className="text-gray-200 hover:text-cyan-600"
                >
                  Stéphane SuperCar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
