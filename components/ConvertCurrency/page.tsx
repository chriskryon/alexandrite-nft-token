import React, { useState } from "react";
import { BiSolidCoin } from "react-icons/bi";

const ConvertCurrency = () => {
  return (
    <>
      <form className="max-w-xl mx-auto">
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
          <div className="flex">
            <label
              htmlFor="fiat-currency-input"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <div className="relative w-full">
              <input
                type="number"
                id="fiat-currency-input"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="421 USD"
                required={false}
              />
            </div>
            <button
              id="dropdown-fiat-currency-button"
              data-dropdown-toggle="dropdown-fiat-currency"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              <svg
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 me-2"
                viewBox="0 0 20 15"
              >
                <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
                <mask
                  id="a"
                  style={{ maskType: "luminance" }}
                  width={20}
                  height={15}
                  x={0}
                  y={0}
                  maskUnits="userSpaceOnUse"
                >
                  <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
                </mask>
                <g mask="url(#a)">
                  <path
                    fill="#D02F44"
                    fillRule="evenodd"
                    d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                    clipRule="evenodd"
                  />
                  <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                  <g filter="url(#filter0_d_343_121520)">
                    <path
                      fill="url(#paint0_linear_343_121520)"
                      fillRule="evenodd"
                      d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                      clipRule="evenodd"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_343_121520"
                    x1=".933"
                    x2=".933"
                    y1="1.433"
                    y2="6.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#F0F0F0" />
                  </linearGradient>
                  <filter
                    id="filter0_d_343_121520"
                    width="6.533"
                    height="5.667"
                    x=".933"
                    y="1.433"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={1} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_343_121520"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_343_121520"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              USD{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown-fiat-currency"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-fiat-currency-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.6"
                          height={14}
                          y=".5"
                          fill="#fff"
                          rx={2}
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width={20}
                          height={15}
                          x={0}
                          y={0}
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.6"
                            height={14}
                            y=".5"
                            fill="#fff"
                            rx={2}
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#D02F44"
                            fillRule="evenodd"
                            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                            clipRule="evenodd"
                          />
                          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                          <g filter="url(#filter0_d_343_121520)">
                            <path
                              fill="url(#paint0_linear_343_121520)"
                              fillRule="evenodd"
                              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                              clipRule="evenodd"
                            />
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_343_121520"
                            x1=".933"
                            x2=".933"
                            y1="1.433"
                            y2="6.1"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset={1} stopColor="#F0F0F0" />
                          </linearGradient>
                          <filter
                            id="filter0_d_343_121520"
                            width="6.533"
                            height="5.667"
                            x=".933"
                            y="1.433"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy={1} />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_343_121520"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_343_121520"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      USD
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.6"
                          height={14}
                          y=".5"
                          fill="#fff"
                          rx={2}
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width={20}
                          height={15}
                          x={0}
                          y={0}
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.6"
                            height={14}
                            y=".5"
                            fill="#fff"
                            rx={2}
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path fill="#043CAE" d="M0 .5h19.6v14H0z" />
                          <path
                            fill="#FFD429"
                            fillRule="evenodd"
                            d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                      EUR
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.1"
                          height="13.5"
                          x=".25"
                          y=".75"
                          fill="#fff"
                          stroke="#F5F5F5"
                          strokeWidth=".5"
                          rx="1.75"
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width={20}
                          height={15}
                          x={0}
                          y={0}
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.1"
                            height="13.5"
                            x=".25"
                            y=".75"
                            fill="#fff"
                            stroke="#fff"
                            strokeWidth=".5"
                            rx="1.75"
                          />
                        </mask>
                        <g fill="#FF3131" mask="url(#a)">
                          <path d="M14 .5h5.6v14H14z" />
                          <path
                            fillRule="evenodd"
                            d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                      CAD
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                      >
                        <rect
                          width="19.6"
                          height={14}
                          y=".5"
                          fill="#fff"
                          rx={2}
                        />
                        <mask
                          id="a"
                          style={{ maskType: "luminance" }}
                          width={20}
                          height={15}
                          x={0}
                          y={0}
                          maskUnits="userSpaceOnUse"
                        >
                          <rect
                            width="19.6"
                            height={14}
                            y=".5"
                            fill="#fff"
                            rx={2}
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
                            clipRule="evenodd"
                          />
                          <path
                            stroke="#DB1F35"
                            strokeLinecap="round"
                            strokeWidth=".667"
                            d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
                          />
                          <path
                            fill="#E6273E"
                            fillRule="evenodd"
                            d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                      GBP
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="p-3 text-sm font-medium text-gray-500 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"
              />
            </svg>
            <span className="sr-only">Convert currency</span>
          </button>
          <div className="flex">
            <label
              htmlFor="crypto-input"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <div className="relative w-full">
              <input
                type="number"
                id="crypto-input"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="0.323 BTC"
                required={false}
              />
            </div>
            <button
              id="dropdown-crypto-button"
              data-dropdown-toggle="dropdown-crypto"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 16 15">
                <path
                  fill="#F7931A"
                  d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"
                />
                <path
                  fill="#fff"
                  d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"
                />
              </svg>
              BTC{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown-crypto"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-crypto-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-4 w-4 me-2"
                        fill="none"
                        viewBox="0 0 16 15"
                      >
                        <path
                          fill="#F7931A"
                          d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"
                        />
                        <path
                          fill="#fff"
                          d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"
                        />
                      </svg>
                      BTC
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-4 w-4 me-2"
                        fill="none"
                        viewBox="0 0 10 17"
                      >
                        <path
                          fill="#343434"
                          d="M5 .5l-.11.364v10.582l.11.105 4.91-2.902L5 .5z"
                        />
                        <path fill="#8C8C8C" d="M5 .5L.086 8.65 5 11.55V.5z" />
                        <path
                          fill="#3C3C3B"
                          d="M5 12.48l-.061.075v3.77L5 16.5l4.914-6.922L5 12.48z"
                        />
                        <path
                          fill="#8C8C8C"
                          d="M5 16.5v-4.02L.086 9.578 5 16.5z"
                        />
                        <path
                          fill="#141414"
                          d="M5 11.55L9.91 8.65 5 6.418v5.133z"
                        />
                        <path
                          fill="#393939"
                          d="M.086 8.649L5 11.551V6.418L.086 8.649z"
                        />
                      </svg>
                      ETH
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-4 w-4 me-2"
                        fill="none"
                        viewBox="0 0 16 17"
                      >
                        <path
                          fill="#C2A633"
                          d="M16 8.5a8 8 0 11-16 0 8 8 0 0116 0z"
                        />
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M5.355 12.685h2.761S12 13.015 12 8.567c0-4.275-3.546-4.26-4.232-4.257H5.355v3.73H4.38v.914h.974v3.73zM6.91 5.858H8c.407 0 2.458.167 2.461 2.74.003 2.542-2.064 2.54-2.396 2.539H6.91V8.954h1.715v-.913H6.91V5.858z"
                          clipRule="evenodd"
                        />
                      </svg>
                      DOGE
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-4 w-4 me-2"
                        fill="none"
                        viewBox="0 0 16 13"
                      >
                        <g clipPath="url(#clip0_460_40742)">
                          <path
                            fill="url(#paint0_linear_460_40742)"
                            d="M2.599 9.8a.524.524 0 01.37-.152h12.77c.233 0 .35.282.185.447L13.4 12.617a.523.523 0 01-.37.153H.261a.261.261 0 01-.184-.447l2.522-2.522z"
                          />
                          <path
                            fill="url(#paint1_linear_460_40742)"
                            d="M2.599.383a.538.538 0 01.37-.153h12.77c.232 0 .35.282.184.446L13.401 3.2a.523.523 0 01-.37.153H.26a.262.262 0 01-.185-.447L2.599.383z"
                          />
                          <path
                            fill="url(#paint2_linear_460_40742)"
                            d="M13.401 5.062a.523.523 0 00-.37-.153H.261a.262.262 0 00-.184.446l2.522 2.523c.097.096.23.153.37.153h12.77c.233 0 .35-.282.185-.447L13.4 5.062z"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_460_40742"
                            x1="14.519"
                            x2="5.681"
                            y1="-1.277"
                            y2="15.65"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00FFA3" />
                            <stop offset={1} stopColor="#DC1FFF" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_460_40742"
                            x1="10.654"
                            x2="1.817"
                            y1="-3.294"
                            y2="13.633"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00FFA3" />
                            <stop offset={1} stopColor="#DC1FFF" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_460_40742"
                            x1="12.574"
                            x2="3.737"
                            y1="-2.292"
                            y2="14.635"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00FFA3" />
                            <stop offset={1} stopColor="#DC1FFF" />
                          </linearGradient>
                          <clipPath id="clip0_460_40742">
                            <path
                              fill="#fff"
                              d="M0 0h16v12.54H0z"
                              transform="translate(0 .23)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      SOL
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row space-y-2 sm:space-y-0"></div>
      </form>
    </>
  );
};

export default ConvertCurrency;