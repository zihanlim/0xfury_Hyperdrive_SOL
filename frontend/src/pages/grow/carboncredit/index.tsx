import React from "react";
import "./carboncredit.css";
import DropdownMenu from "../../../components/drop-down-menu";

export const CarbonCredits = (): JSX.Element => {
  return (
    <div className="grow-carbon-credits">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="rectangle"
            alt="Rectangle"
            src="/src/assets/rectangle-3.png"
          />
          <div className="div" />
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="/src/assets/fury-logo-graphic-1.png"
          />
          <img
            className="hamburger"
            alt="Hamburger"
            src="/src/assets/hamburger-2.png"
          />
          <div className="text-wrapper">Carbon Credits</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                88 <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-2">carbon credits!</span>
            </p>
          </div>
          <img
            className="img"
            alt="Rectangle"
            src="/src/assets/rectangle-4.svg"
          />
          <div className="text-wrapper-3">Sell / Buy Credits</div>
          <div className="text-wrapper-4">You have</div>
          <img
            className="carbon-credit"
            alt="Carbon credit"
            src="/src/assets/carbon-credit-1.png"
          />
          <div className="group">
            <div className="menu-white">
              <DropdownMenu />
            </div>
          </div>
          <div className="rectangle-2" />
          <div className="text-wrapper-5">Scan to Pay</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle-3" />
              <div className="text-wrapper-6">Grow</div>
              <img
                className="plant-growth"
                alt="Plant growth"
                src="/src/assets/plant-growth-1.png"
              />
            </div>
          </div>
          <img
            className="QR-code"
            alt="Qr code"
            src="/src/assets/QR-code-1.png"
          />
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="rectangle-4" />
              <div className="text-wrapper-7">Rewards</div>
              <img
                className="rewards"
                alt="Rewards"
                src="/src/assets/rewards-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredits;
