import React from "react";
import { Link } from "react-router-dom";
import {
  Background,
  BackgroundHolder,
  FirstChoice,
  SecondChoice,
} from "./BMIHomeStyle";

function BMIHome() {
  return (
    <Background>
      <BackgroundHolder>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          to="/normal"
        >
          {" "}
          <FirstChoice>Normal</FirstChoice>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          to="/normal"
        >
          <SecondChoice>Other Normal</SecondChoice>
        </Link>
      </BackgroundHolder>
    </Background>
  );
}

export default BMIHome;
