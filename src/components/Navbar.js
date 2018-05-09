import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      < Link to = {process.env.PUBLIC_URL + "/"} > Idag < /Link>
      < Link to = {process.env.PUBLIC_URL + "/imorgon"} > Imorgon < /Link>
      < Link to = {process.env.PUBLIC_URL + "/overmorgon"} > &Ouml;vermorgon < /Link>
    </div>
  );
}
