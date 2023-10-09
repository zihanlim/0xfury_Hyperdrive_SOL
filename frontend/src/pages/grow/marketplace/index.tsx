import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import DropdownMenu from "../../../components/drop-down-menu";

import "./marketplace.css";
import { DropdownItem } from "react-bootstrap";

export const Marketplace = (): JSX.Element => {
  let navigate = useNavigate();

  const goToPlantInformation = () => {
    navigate("/grow/plantinformation");
  };

  return (
    <div className="grow-marketplace">
      <div className="overlap-wrapper">
        <div className="overlap">
          {/* <img
            className="rectangle"
            alt="Rectangle"
            src="/src/assets/rectangle-3.svg"
          /> */}
          <div className="div" />
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="/src/assets/fury-logo-graphic-1.png"
          />
          <button type="button" className="btn">
            <img
              className="hamburger"
              alt="Hamburger"
              src="/src/assets/hamburger-2.png"
            />
          </button>
          <div className="rectangle-2" />
          <div className="group">
            <div className="overlap-group">
              <button type="button" className="btn">
                <div className="text-wrapper-2">Seeds</div>
              </button>
            </div>
            <div className="div-wrapper">
              <button type="button" className="btn">
                <div className="text-wrapper-3">Plants</div>
              </button>
            </div>
            <div className="overlap-group-2">
              <button type="button" className="btn">
                <div className="text-wrapper-2">Trees</div>
              </button>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-3" />
              <button type="button" className="btn">
                <div className="text-wrapper-4">Grow</div>
                <img
                  className="plant-growth"
                  alt="Plant growth"
                  src="/src/assets/plant-growth-1.png"
                />
              </button>
            </div>
          </div>
          <button type="button" className="btn">
            <div className="text-wrapper">Scan to Pay</div>
            <img
              className="QR-code"
              alt="Qr code"
              src="/src/assets/QR-code-1.png"
            />
          </button>
          <div className="group-2">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <button type="button" className="btn">
                <div className="text-wrapper-5">Rewards</div>
                <img
                  className="rewards"
                  alt="Rewards"
                  src="/src/assets/rewards-2.png"
                />
              </button>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-3">
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="rectangle-7" />
              <button
                type="button"
                className="floatingplant"
                onClick={goToPlantInformation}
              >
                <img
                  className="ZZ-plant"
                  alt="Zz plant"
                  src="/src/assets/ZZ-plant-1.gif"
                />
              </button>
              <button type="button" className="cartbtn">
                <div className="cart-white-wrapper">
                  <img
                    className="cart-white"
                    alt="Cart white"
                    src="/src/assets/cart-white-1.png"
                  />
                </div>
              </button>
              <button type="button" className="cartbtn">
                <div className="img-wrapper">
                  <img
                    className="cart-white"
                    alt="Cart white"
                    src="/src/assets/cart-white-1.png"
                  />
                </div>
              </button>
              <div className="flexcontainer">
                <p className="text">
                  <span className="span">
                    ZZ Plant <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">SGD$30 </span>
                  <span className="text-wrapper-7">(~1.128 SOL)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-wrapper-8">Marketplace</div>
          {/* <button type="button" className="btn"> */}
          <div className="menu-white-wrapper">
            <div className="menu-white">
              <DropdownMenu />
            </div>
          </div>
          {/* </button> */}
          <img className="filter" alt="Filter" src="/src/assets/filter-1.png" />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
