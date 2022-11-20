import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import ABOUT from "../assets/About.png";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about__container">
        <div className="about__image">
          <img src={ABOUT} alt="about"></img>
        </div>
        <div className="about">
          <h1>About</h1>
          {/* <h4>DigiBlock is one place for all your acedmics record & work experience. Get NFTs, cryptos on completing courses. Use the cryptos to get heavy discounts on your next course.</h4> */}
          <h4>
            DigiBlock is worlds #1 Soulbound Token based DApp. Get NFTs for
            your work experience, courses taken and even earn tokens to get
            heavy discounts on your next course. 
            <br/>
            Just share your wallet address to
            share your overall resume with empolyers in one click.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
