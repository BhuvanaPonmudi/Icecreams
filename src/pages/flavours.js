import BootstrapCarousel from "../components/BootstrapCarousel"
import Login from "../components/Login";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Flavours1() {
  const name = localStorage.getItem("EmailID");
  
  if (name) {
    return <BootstrapCarousel />;
  } else {
    return <Login />;
  }

}

export default Flavours1;
