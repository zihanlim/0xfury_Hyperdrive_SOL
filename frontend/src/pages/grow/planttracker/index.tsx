import React from "react";
import "./planttracker.css";
import DropdownMenu from "../../../components/drop-down-menu";

export const PlantTracker = (): JSX.Element => {
  return (
    <div className="grow-plant-tracker">
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
          <div className="rectangle-2" />
          <div className="text-wrapper">Scan to Pay</div>
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle-3" />
              <div className="text-wrapper-2">Grow</div>
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
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle-4" />
              <div className="text-wrapper-3">Rewards</div>
              <img
                className="rewards"
                alt="Rewards"
                src="/src/assets/rewards-2.png"
              />
            </div>
          </div>
          <img className="plant" alt="Plant" src="/src/assets/plant2-1.gif" />
          <div className="text-wrapper-4">Pandan</div>
          <div className="rectangle-5" />
          <div className="text-wrapper-5">Edition: 8/88</div>
          <div className="text-wrapper-6">My Plants</div>
          <p className="i-have-growing">
            <span className="span">I have </span>
            <span className="text-wrapper-7">8</span>
            <span className="span"> growing plants</span>
          </p>
          <div className="rectangle-6" />
          <img className="heart" alt="Heart" src="/src/assets/heart.png" />
          <div className="menu-white-wrapper">
            <div className="menu-white">
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantTracker;
