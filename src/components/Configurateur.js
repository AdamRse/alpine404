
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import bgPure from "../images/configurateur/modele/selection/pure.png";
import bgLegende from "../images/configurateur/modele/selection/legende.png";
import "./configurateur.css";

function Configurateur() {
  const [selectHover, setSelectHover] = useState(false);

  function selecteurMotion(){
    let defaultLeftMargin = 10;
    if(selectHover===0) defaultLeftMargin = 0
    else if(selectHover===1) defaultLeftMargin = defaultLeftMargin*2;
    return {left: defaultLeftMargin+"%"}
  }

  return (
    <>
      <section id='choix'>
        <div className='conteneur'>
          <img src={bgPure} />
          <img src={bgLegende} style={{transform: "scaleX(-1)"}} />
        </div>
        <div className='selecteur'>
            <div className='conteneur-images'>
              <div className='selcteur-card'>
                <img src={bgPure} onMouseEnter={setSelectHover(1)} onMouseLeave={selectHover(false)} />
              </div>
              
              <div className='selcteur-card'>
                <img src={bgLegende} style={{transform: "scaleX(-1)"}} onMouseEnter={setSelectHover(0)} onMouseLeave={selectHover(false)} />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Configurateur;
