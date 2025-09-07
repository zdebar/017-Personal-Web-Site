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
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        color: "black",
        position: "absolute",
        top: "-25px",
        right: "4px",
        textAlign: "center",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.8rem",
        cursor: "pointer",
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
