import NavigateIcon from "./NavigateButton";

export default function HomeIcon() {
  return (
    <NavigateIcon href="/" title="Home" className="blackIcn icn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M3 9.5L12 4L21 9.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </NavigateIcon>
  );
}
