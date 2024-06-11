import React from "react";
import AlpineLogo from "../images/alpine-logo.png";

function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://www.alpinecars.fr/"
            target="_parent"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={AlpineLogo} className="h-8" alt="Alpine Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Alpine
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            ></a>
            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            ></a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="./"
                  className="text-gray-900 dark:text-white hover:underline hover:dark:text-cyan-300"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="./Configurateur.js"
                  className="text-gray-900 dark:text-white hover:underline hover:dark:text-cyan-300"
                >
                  Configurateur
                </a>
              </li>
              <li>
                <a
                  href="https://www.alpinecars.fr/"
                  target="_parent"
                  className="text-gray-900 dark:text-white hover:underline hover:dark:text-cyan-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/stephane__supercars/?hl=fr"
                  target="_parent"
                  className="text-gray-900 dark:text-white hover:underline hover:dark:text-cyan-300"
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
