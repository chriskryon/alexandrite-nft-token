import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";

const CoinSwitcher = ({ isChecked, onCheckboxChange, quantity, price }) => {
  return (
    <>
      <label className="border border-primary themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-black p-1 block">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <FaEthereum />
          ETH
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <IoLogoUsd />
          USD
        </span>
      </label>
      <div className="border border-primary flex flex-col mt-1">
        <label className="w-auto themeSwitcherTwo shadow-card relative cursor-pointer select-none items-center justify-center rounded-md bg-black p-1 block">
          <span
            className={`flex flex-col items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium text-center`}
          >
            <span className="pb-2">{quantity} ALEX = </span>
            <p className="border-t border-primary pt-2">
              {price} {isChecked ? "USD" : "ETH"}
            </p>
          </span>
        </label>
      </div>
    </>
  );
};

export default CoinSwitcher;