import ChevronDownIcon from "./ChevronDownIcon";

export default function ChevronDownButton({
  targetId,
  title = "Scroll down",
}: {
  targetId: string;
  title?: string;
}) {
  return (
    <a href={`#${targetId}`} title={title} className="btn-chv">
      <ChevronDownIcon className="chvIcon icn" />
    </a>
  );
}
