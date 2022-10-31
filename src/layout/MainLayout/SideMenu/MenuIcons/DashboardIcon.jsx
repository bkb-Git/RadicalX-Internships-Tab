const DashboardIcon = (props) => {
  const { selected } = props;
  const color = selected ? "#793EF5" : "#1E1E1E";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ marginRight: "10px" }}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.73 2c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1M22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1zM4.23 22C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1M10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1z"
      />
    </svg>
  );
};

export default DashboardIcon;
