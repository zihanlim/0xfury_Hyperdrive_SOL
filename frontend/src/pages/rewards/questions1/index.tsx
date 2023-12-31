import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./question1.css";
import YesUnclicked from "../../../assets/yes unclicked.png";
import Yesclicked from "../../../assets/yes clicked.png";
import NoUnclicked from "../../../assets/no unclicked.png";
import Noclicked from "../../../assets/no clicked.png";
import firstIcon from "../../../assets/01.png";

const Question1 = () => {
  let navigate = useNavigate();
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const goBack = () => {
    navigate("/rewards/first");
  };

  const goNextPage = () => {
    navigate("/rewards/question2");
  };

  return (
    <div className="question1-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="numberone" alt="number" src={firstIcon} />
          <p className="text-wrapper">
            Look around. <span className="span">Are you by yourself?</span>
            Are there any <span className="span">cameras or CCTVs</span> around
            or near you?
          </p>
          <p className="yesno">
            <button
              type="button"
              className="btn"
              onClick={() => {
                setYes(!yes);
                if (no) {
                  setNo(false);
                }
                goBack();
              }}
            >
              <img
                className="answeryes"
                alt="yes"
                src={yes ? YesUnclicked : Yesclicked}
              />
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setNo(!no);
                if (yes) {
                  setYes(false);
                }
                goNextPage();
              }}
            >
              <img
                className="noanswer"
                alt="no"
                src={no ? NoUnclicked : Noclicked}
              />
            </button>
          </p>
          <p className="warning">
            <a
              onClick={() => {
                goBack();
              }}
            >
              <span className="span-skip">Skip</span>
            </a>
          </p>
          <p className="warning1">(you will lose all rewards opportunities)</p>
        </div>
      </div>
    </div>
  );
};

export default Question1;
