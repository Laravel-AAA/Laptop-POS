import React from "react";

export default function Circles() {
  return (
    <div
      className="-z-1 pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 transform lg:block"
      aria-hidden="true"
    >
      <svg
        width="1360"
        height="578"
        viewBox="0 0 1360 578"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="illustration-01"
          >
            <stop stopColor="#FFF" offset="0%" />
            <stop stopColor="#EAEAEA" offset="77.402%" />
            <stop stopColor="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fillRule="evenodd">
          <circle cx="1208" cy="28" r="128" />
          <circle cx="155" cy="343" r="64" />
        </g>
      </svg>
    </div>
  );
}
