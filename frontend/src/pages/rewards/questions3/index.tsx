import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question3.css'
import thirdIcon from '../../../assets/03.png'
import SlideButton from '../../../components/slider-button'

const Question3 = () => {
  let navigate = useNavigate();

  const [isSliderUnlocked,setSliderUnlocked]=useState(false);

  const goNextPage = () => {
    if (isSliderUnlocked){
    navigate("/rewards/question4");}
  }

  const handleSlideContinue = () => {
    navigate("/rewards/question4");}
  



  return (<div className="question3-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numberthree"
      alt="number"
      src={thirdIcon}
      />
      <p className="text-wrapper">
        Write it down with pen and paper and 
      </p>
      <div className="text-wrapper-2">store it in multiple secret places.</div>
      
      <div className="slidebutton">
    <SlideButton unlockThreshold={100} onUnlock={handleSlideContinue} />
    </div>

      
    </div>
  </div>
</div>)
};

export default Question3;
