import React from "react";
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
      <section id="choix">
        <div className="conteneur" style={selecteurMotion()}>
          <img src={bgPure} alt="Pure" />
          <img
            src={bgLegende}
            style={{ transform: "scaleX(-1)" }}
            alt="Legend"
          />
        </div>
          <div className="conteneur-images">
            <div className="selecteur-card">
              <img
                src={bgPure}
                onMouseEnter={() => setSelectHover(1)}
                onMouseLeave={() => setSelectHover(false)}
                alt="Pure"
              />
            </div>

            <div className="selecteur-card">
              <img
                src={bgLegende}
                style={{ transform: "scaleX(-1)" }}
                onMouseEnter={() => setSelectHover(0)}
                onMouseLeave={() => setSelectHover(false)}
                alt="Legend"
              />
            </div>
          </div>
      </section>
    </>
  );
}

export default Configurateur;
