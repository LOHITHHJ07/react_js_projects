import React from "react";
import "./Hero.css";
import lohith from "../images/lohith1.jpeg";

function Hero() {
  return (
    <div>
      <img id="photo" src={lohith} alt="broken" height="300" width="300" />
      <h2 className="nametag">Hi I am Lohith!</h2>
      <div className="about">
        <p>
          Exceptionally creative and dependable Entry Level Web Developer with a
          stellar customer service record and superb work ethic. <br />
          Broadly and deeply knowledgeable in a wide variety of computer
          languages as well as the principles and techniques of website
          construction and maintenance.{" "}
        </p>
        <p>
          Highly adept at conveying complex technical information to a variety
          of professional and lay audiences in a clear and understandable
          manner.
        </p>
      </div>
    </div>
  );
}

export default Hero;
