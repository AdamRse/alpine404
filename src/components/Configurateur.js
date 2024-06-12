import React from 'react'
import { useState } from "react";
// import { Link } from "react-router-dom";
import bgPure from "../images/configurateur/modele/selection/pure.png";
import bgLegende from "../images/configurateur/modele/selection/legende.png";
import "./configurateur.css";

function Configurateur() {
  const [selectHover, setSelectHover] = useState(false);

  function selecteurMotion(){
    let defaultLeftMargin = 10;
    if(selectHover===0) defaultLeftMargin = -defaultLeftMargin*2
    else if(selectHover===1) defaultLeftMargin = 0;
    else defaultLeftMargin = -defaultLeftMargin
    console.log(selectHover, defaultLeftMargin);
    return {left: defaultLeftMargin+"%"}
  }

  return (
    <>
      <section id='choix'>
        <div className='conteneur' style={selecteurMotion()}>
          <img src={bgPure} />
          <img src={bgLegende} style={{transform: "scaleX(-1)"}} />
        </div>
        <div className='selecteur'>
            Select a car
            <div className='conteneur-images'>
              <div className='selcteur-card'>
<<<<<<< HEAD
                <img src={bgPure} onMouseEnter={() => { setSelectHover(1) }} onMouseLeave={() => { setSelectHover(false)}} />
              </div>
              
              <div className='selcteur-card'>
                <img src={bgLegende} style={{transform: "scaleX(-1)"}} onMouseEnter={() => { setSelectHover(0)}} onMouseLeave={() => { setSelectHover(false)}} />
=======
                <img src={bgPure} onMouseEnter={() => { setSelectHover(1) }} onMouseLeave={() => { setSelectHover(false)}} alt="Pure" />
              </div>
              
              <div className='selcteur-card'>
                <img src={bgLegende} style={{transform: "scaleX(-1)"}} onMouseEnter={() => { setSelectHover(0)}} onMouseLeave={() => { setSelectHover(false)}} alt="Legend" />
>>>>>>> 0e92427 (fix du sélécteur, il faudra juste changer la police (dans tous les sens du terme))
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Configurateur;
