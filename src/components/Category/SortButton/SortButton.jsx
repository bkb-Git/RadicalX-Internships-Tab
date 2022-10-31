import { useState } from "react";

const activeStyle = {
  opacity: 1,
  fill: "#793ef5",
};

const arrowActiveStyle = {
  transform: "rotate(180deg)",
  transformOrigin: "center",
  stroke: "white",
};

const SortButton = (props) => {
  const { className } = props;
  const [active, setActive] = useState(false);

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      onClick={() => setActive(!active)}
    >
      <g
        stroke="#793EF5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.5"
        style={active ? activeStyle : null}
      >
        <path d="M1.667 10.825V12.5c0 4.166 1.666 5.833 5.833 5.833h5c4.167 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833" />
        <path d="M7.058 8.867L10 11.8l2.942-2.933" id="downIcon" style={active ? arrowActiveStyle : null} />
      </g>
    </svg>
  );
};

export default SortButton;
