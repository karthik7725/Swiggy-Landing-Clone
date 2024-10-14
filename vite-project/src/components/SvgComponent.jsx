import * as React from "react";
const SvgComponent = (props) => (
  <svg width={20} height={20} fill="none" aria-hidden="true" {...props}>
    <circle cx={10} cy={10} r={9} fill="url(#a)" />
    <path
      fill="#fff"
      d="M10.082 12.865a.16.16 0 0 0-.164 0l-2.602 1.532a.5.5 0 0 1-.739-.551l.699-2.822a.16.16 0 0 0-.054-.162L4.955 8.99a.5.5 0 0 1 .28-.884l3-.232a.16.16 0 0 0 .135-.096l1.17-2.714a.5.5 0 0 1 .92 0l1.17 2.714a.161.161 0 0 0 .135.096l3 .232a.5.5 0 0 1 .28.884l-2.267 1.872a.16.16 0 0 0-.054.162l.698 2.822a.5.5 0 0 1-.739.55l-2.601-1.531Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10}
        x2={10}
        y1={1}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#21973B" />
        <stop offset={1} stopColor="#128540" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
