import React from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useRef } from 'react';
    
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


function Landing() {
  gsap.registerPlugin( ScrollTrigger);
  const main = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );
  return (
    <>

      <NavLink to="/Configurateur">
        <button className="m-5 text-xl text-white font-bold bg-gray-800 p-4 rounded-md">
          Config ta StéphaneMobile
        </button>
      </NavLink>
      <div>Landing page</div>
      <div>
      <section className="section flex-center column">
        <h2>Basic ScrollTrigger with React</h2>
        <p>Scroll down to see the magic happen!!</p>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </div>
    </>
  );
}

export default Landing;
