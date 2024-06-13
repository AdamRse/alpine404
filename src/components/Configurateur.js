import React from "react";
// import { Link } from "react-router-dom";
import "./configurateur.css";
import SelecteurAlpine from "./Configurateur/SelecteurAlpine"
import Peinture from "./Configurateur/Peinture"

function Configurateur() {

  return (
    <>
      <SelecteurAlpine />
      <Peinture />
    </>
  );
}

export default Configurateur;
