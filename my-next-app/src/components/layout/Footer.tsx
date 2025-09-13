const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="cnt">
      <p>&copy; {currentYear} Zdeněk Barth</p>
    </footer>
  );
}
