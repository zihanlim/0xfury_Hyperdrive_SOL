import React from "react";
import './vouchers.css'
import voucher1 from '../../../assets/voucher1.png'
import voucher2 from '../../../assets/voucher2.png'

const Vouchers = () => {

  return (<div className="vouchers-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <p className="text-wrapper">
        You did it!
      </p>
      <div className="text-wrapper-2">Choose your reward</div>
      <img
            className="voucher1"
            alt="voucher1"
            src={voucher1}
        />
        <img
            className="voucher2"
            alt="voucher2"
            src={voucher2}
        />
        <img
            className="fury-logo-graphic"
            alt="Fury logo graphic"
            src="https://cdn.animaapp.com/projects/64fe857ab4e762deb167d3a8/releases/64fe87577896e9144c66eabd/img/fury-logo-graphic-2.png"
          />
    </div>
  </div>
</div>)
};

export default Vouchers;
