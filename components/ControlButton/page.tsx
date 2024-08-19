import React, { useState } from "react";
import { BiSolidCoin } from "react-icons/bi";

const ControlButton = ({ value, increment, decrement, onChange }) => {
  return (
    <>
      <form className="mt-2 max-w-xs mx-auto flex flex-col items-center justify-center">
        {" "}
        <label
          htmlFor="bedrooms-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Choose amount of tokens you want to buy:
        </label>
        <div className="relative flex items-center max-w-[11rem]">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="bedrooms-input"
            className="bg-black dark:bg-black dark:hover:bg-black dark:border-primary hover:bg-black border border-primary rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={decrement}
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="bedrooms-input"
            data-input-counter=""
            data-input-counter-min={1}
            data-input-counter-max={10}
            aria-describedby="helper-text-explanation"
            className="border bg-black border-x-0 border-primary h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-primary block w-full pb-6 dark:bg-black dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-primary"
            placeholder=""
            value={value}
            onChange={onChange}
            required={true}
            disabled={true}
          />
          <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <BiSolidCoin />
            <span>NFT</span>
          </div>
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="bedrooms-input"
            className="bg-gray-100 dark:bg-black dark:hover:bg-black dark:border-primary hover:bg-black border border-primary rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={increment}
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        {/* <p
    id="helper-text-explanation"
    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
  >
    Please select the number of tokens.
  </p> */}
      </form>
    </>
  );
};

export default ControlButton;