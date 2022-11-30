const ArrowLeft = (props) => {
  const { color = "#793EF5", styles } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      style={{ ...styles }}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.165 6.918L4.083 14l7.082 7.082M14.957 14H4.083M23.718 14h-4.06"
      />
    </svg>
  );
};

export default ArrowLeft;
