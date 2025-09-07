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
    <a href={`#${targetId}`} title={title} style={{ textDecoration: "none" }}>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          color: "black",
          backgroundColor: "white",
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
        className="shadow"
      >
        <ChevronDownIcon />
      </div>
    </a>
  );
}
