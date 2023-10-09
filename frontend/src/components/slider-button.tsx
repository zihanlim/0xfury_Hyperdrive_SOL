import React, { useState } from "react";
import "./slider-button.css";
import { useNavigate } from "react-router-dom";


interface SlideToUnlockProps {
  unlockThreshold: number;
  onUnlock: () => void;
  goNext: () => void;
}

const SlideToUnlock: React.FC<SlideToUnlockProps> = ({
  unlockThreshold,
  onUnlock,
  goNext,
}) => {
  const [isUnlocked, setUnlocked] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = Number(event.target.value);
    setSliderPosition(newPosition);

    if (newPosition >= unlockThreshold) {
      setUnlocked(true);
      onUnlock();
      setSliderPosition(0);
      goNext();
      
    }
  };

  return (
    <div className="slide-to-unlock">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderPosition}
        onChange={handleSliderChange}
        className={`slider ${isUnlocked ? "unlocked" : ""}`}
      />
      <div className={`unlock-text ${isUnlocked ? "unlocked" : ""}`}>
        {isUnlocked ? "Slide to Continue" : "Slide to Continue"}
      </div>
      
    </div>
  );
};

export default SlideToUnlock;
