import React, { useEffect, useState } from "react";
import "./after-onboarding2.css";
import { useNavigate } from "react-router-dom";

import WelcomeBackFlower from '../../../assets/welcomebackflower.png'

const AfterBoarding2 = () => {
  let navigate = useNavigate();
  const [address, setAddress] = useState('')
  const [copySuccess, setCopySuccess] = useState(false);

  const goTo = () => {
    navigate("/loading/loading02");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="after-onboarding-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe88bd328c829ae1d3b1d9/img/fury-logo-graphic-2@2x.png"
          />
          <img
            className="flower"
            alt="Flower"
            src={WelcomeBackFlower}
          />
          <p className="congratulations-you">
            <span className="text-wrapper">Welcome Back </span>
            <span className="text-wrapper"> to </span>
            <span className="span">Fury</span>
            <span className="text-wrapper"> wallet!</span>
          </p>
         
          <div className="overlap">
            <button type='button' className="div" onClick={goTo}>
                Let’s begin.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterBoarding2;
