import React, { createContext, useContext, useState } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Capture from "../images/Capture.png";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

function Landing() {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: main }
  );
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="container">
          <AliceCarousel mouseTracking>
            <Link href="#">
              <img src={Capture} className="w-full h-auto" alt="Slide 1" />
            </Link>
            <Link href="#">
              <img src={Capture} className="w-full h-auto" alt="Slide 2" />
            </Link>
            <Link href="#">
              <img src={Capture} className="w-full h-auto" alt="Slide 3" />
            </Link>
          </AliceCarousel>
        </div>
      </div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96"></div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-slate-600 dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-slate-600 dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="flex justify-center">
        <div className="container">
          <h1 className="font-semibold text-3xl content-center items-center m-4">
            MADE BY RACERS
          </h1>
          <p className="flex justify-center items-center ">
            En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois
            piliers : agilité, élégance, esprit de compétition. Conçue par des
            pilotes pour ceux qui veulent maîtriser l’asphalte, la légende
            Alpine s’est érigée à travers des victoires mythiques, et un
            engagement sportif sans limite. Depuis 2016, à travers notre
            nouvelle gamme A 110, nous continuons à gravir tous les échelons du
            sport automobile. Demain, nous voulons réinventer la sportivité
            automobile avec des technologies innovantes issues de la Formule 1,
            pour des pilotes passionnés.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
