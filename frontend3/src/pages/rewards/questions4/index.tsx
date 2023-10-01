import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question4.css';
import fourthIcon from '../../../assets/04.png';
import SlideButton from '../../../components/slider-button';
import PinInput from '../../../components/pin-input';


const Question4 = () => {
  let navigate = useNavigate();

  const handleSlideContinue = () => {
    navigate("/rewards/vouchers");}
  

  // const goBack = () => {
  //   navigate("/onboarding");
  // };

  return (<div className="question4-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberone"
      alt="number"
      src={fourthIcon}
      />
      <p className="text-wrapper">
        Confirm your <span className="span">Private Key.</span>
      </p>
      <div className="text-wrapper-2">Enter the <span className="span">last 6 characters</span> of your Private Key.</div>

    <PinInput onSlideContinue={handleSlideContinue}/>

    </div>
  </div>
</div>
)
};

export default Question4;
