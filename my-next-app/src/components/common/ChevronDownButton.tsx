import ChevronDownIcon from "../icons/ChevronDownIcon";

export default function ChevronDownButton({
  targetId,
  title = "Scroll down",
}: {
  targetId: string;
  title?: string;
}) {
  return (
    <a href={`#${targetId}`} title={title} className="btn-chv">
      <ChevronDownIcon className="icon-chv icn" />
    </a>
  );
}
