const ArrowRight = (props) => {
  const { color = "#828282", styles } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      style={{ ...styles }}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12.025 4.942L17.083 10l-5.058 5.059M9.175 10h7.767M2.917 10h2.891"
      />
    </svg>
  );
};

export default ArrowRight;
