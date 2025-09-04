import "./Icon.css";

export default function Icon({
  size = 12,
  color = "white",
  children,
}: {
  size?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className="icon"
      style={{
        width: size,
        height: size,
        background: color,
      }}
    >
      {children}
    </button>
  );
}
