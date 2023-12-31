import React, { useEffect } from "react";
import "./loading02.css";
import LoadingSphere from "../../../assets/LoadingSphere.png";
import { coreService } from "../../../core/service";
import { useNavigate } from "react-router-dom";

const Loading02 = () => {
  let navigate = useNavigate();

  const goTo = () => {
    navigate("/grow/marketplace");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goTo();
    }, 2000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="loading-index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="load"></div>
          <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/fury-logo-graphic-2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading02;
