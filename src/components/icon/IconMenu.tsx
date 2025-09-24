interface IconProps {
  size?: string;
  color?: string;
}

export default function IconMenu(props: IconProps) {
  return (
    <>
      <svg
        width={props.size ? props.size : "20px"}
        height={props.size ? props.size : "20px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H14M4 18H9"
          stroke={props.color ? props.color : "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
