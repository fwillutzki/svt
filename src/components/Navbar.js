import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Idag</Link>
      <Link to="/imorgon">Imorgon</Link>
      <Link to="/overmorgon">&Ouml;vermorgon</Link>
    </div>
  );
}
