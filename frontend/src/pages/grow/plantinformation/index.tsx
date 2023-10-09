import React from "react";
import "./plantinformation.css";
import { useNavigate } from "react-router-dom";

export const Plantinformation = (): JSX.Element => {
  let navigate = useNavigate();

  const goToMarketplace = () => {
    navigate("/grow/marketplace");
  };

  return (
    <div className="grow-plant">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="rectangle"
            alt="Rectangle"
            src="/src/assets/rectangle-3.svg"
          />
          <div className="div" /> <div className="rectangle-2" />
          <p className="nature-s-green">
            Nature&#39;s green beauty that thrives with minimal care.
          </p>
          <button type="button" className="btn">
            <div className="rectangle-3" />
            <img
              className="cart-white"
              alt="Cart white"
              src="/src/assets/cart-white-1.png"
            />
            <div className="text-wrapper">Add to Cart</div>
          </button>
          <img
            className="ZZ-plant"
            alt="Zz plant"
            src="/src/assets/ZZ-plant-1.gif"
          />
          <div className="text-wrapper-2">ZZ Plant</div>
          <button type="button" className="btn">
            <div className="rectangle-4" />
            <div className="text-wrapper-3">Edition: 1/88</div>
          </button>
          <div className="rectangle-5" />
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                SGD$30 <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-4">(~1.128 SOL)</span>
            </p>
          </div>
          <button type="button" className="btn" onClick={goToMarketplace}>
            <div className="arrow">
              <img className="img" alt="Arrow" src="/src/assets/arrow-1.png" />
            </div>
          </button>
          <div className="ellipse" />
          <div className="text-wrapper-5">1</div>
          <div className="text-wrapper-6">1</div>
          <div className="flexcontainer-2">
            <p className="span-wrapper">
              <span className="text-wrapper-7">
                Size <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-8">
                Medium <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-7">
                <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-7">
                Family <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-8">Araceae</span>
            </p>
          </div>
          <button type="button" className="btn">
            <img className="add" alt="Add" src="/src/assets/add.png" />
          </button>
          <button type="button" className="btn">
            <img className="remove" alt="Remove" src="/src/assets/remove.png" />
          </button>
          <img className="cart" alt="Cart" src="/src/assets/cart-1.png" />
        </div>
      </div>
    </div>
  );
};

export default Plantinformation;
