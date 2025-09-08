import ChevronDownIcon from "./ChevronDownIcon";

type ChevronDownButtonProps = {
  targetId: string;
  title?: string;
};

export default function ChevronDownButton({
  targetId,
  title = "Scroll down",
}: ChevronDownButtonProps) {
  return (
    <a
      href={`#${targetId}`}
      title={title}
      style={{
        textDecoration: "none",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        color: "black",
        position: "absolute",
        top: "-20px",
        right: "4px",
        textAlign: "center",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.8rem",
        cursor: "pointer",
        zIndex: 10,
      }}
      className="shadow bg-white"
    >
      <ChevronDownIcon />
      <style jsx>{`
        .bg-white {
          background-color: white;
        }
        .bg-white:hover {
          background-color: lightgray;
        }
      `}</style>
    </a>
  );
}
