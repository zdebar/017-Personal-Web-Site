const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="content py-medium">
      <p>&copy; {currentYear} Zdeněk Barth</p>
    </footer>
  );
}
