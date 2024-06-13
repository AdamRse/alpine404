import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Capture from "../images/Capture.png";
import Capture2 from "../images/Capture2.png";
import Triptych from "./Landing/Triptych";

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];

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
            <Link>
              <img src={Capture} className="w-full h-auto" alt="Slide 1" />
            </Link>
            <Link>
              <img src={Capture2} className="w-full h-auto" alt="Slide 2" />
            </Link>
            <Link>
              <img src={Capture} className="w-full h-auto" alt="Slide 3" />
            </Link>
          </AliceCarousel>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="container">
          <h1 className="font-semibold text-3xl content-center items-center mt-4 text-white m-5">
            MADE BY RACERS
          </h1>
          <p className="flex justify-center items-center mt-5 text-white bg-slate-950 p-5">
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

        <div className="container">
          <div>
            <Triptych />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
