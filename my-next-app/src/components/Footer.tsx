const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-main py-medium">
      <p>&copy; {currentYear} Zdeněk Barth</p>
    </footer>
  );
}
