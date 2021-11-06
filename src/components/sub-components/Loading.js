import React from "react";
import "./Loading.scss";

export default function Loading({ flag }) {
  return (
    <div
      className="loading w-full flex justify-center items-center"
      style={{ background: `${flag && "#000000d4"}` }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.98 97.96">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"
            />
            <path
              className="cls-1"
              d="M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"
            />
          </g>
        </g>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M10,47.37c0,.53,0,1.07,0,1.61s0,1.08,0,1.62c1.16,34,43,49.86,67.06,25.78L104.49,49,77.09,21.59C53-2.5,11.19,13.33,10,47.37Z"
            />
            <path
              className="cls-1"
              d="M199,47.37c-1.17-34-43-49.87-67.07-25.78L104.49,49l27.39,27.4C156,100.46,197.78,84.64,199,50.6q0-.81,0-1.62C199,48.44,199,47.9,199,47.37Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
