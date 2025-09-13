export default function StrongParagraph({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <p>
      <strong>{label}</strong> – {children}
    </p>
  );
}
