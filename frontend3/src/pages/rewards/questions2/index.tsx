import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './question2.css'
import secondIcon from '../../../assets/02.png'
import whiteCopy from '../../../assets/copy-white-1.png'
import arrow from '../../../assets/Arrow 1.png'


const Question2 = () => {
  let navigate = useNavigate();
  // const [yes, setYes] = useState(false)
  // const [no, setNo] = useState(false)
  const [privatekeys, setPrivatekeys] = useState('')
  const [copySuccess, setCopySuccess] = useState(false);


  const goNextPage = () => {
    navigate("/rewards/question3");
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(privatekeys);
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };



  return (<div className="question2-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <img 
      className="numbertwo"
      alt="number"
      src={secondIcon}
      />
        <p className="text-wrapper">
            Copy your Private Key and save it in a place that you trust and only you can access.
          </p>
          
        {copySuccess && <span className="p">
          {'Copied! Please paste it somewhere safe!'}
          <button type='button' className="btn" onClick={goNextPage}>
          <div className="ellipse"><img className="arrow" alt="Arrow" src={arrow} /></div>
          </button>
          </span>}
        
   
          <button type='button' className="btn" onClick={copyToClipboard}>
          <div className="overlap">
            <div className="div">Copy Private Key</div>
            <img className="copy-white" alt="Copy white" src={whiteCopy} />
          </div>
          </button>
          

            
      
    </div>
  </div>
</div>)
};

export default Question2;
