const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="content py-4">
      <p>&copy; {currentYear} Zdeněk Barth</p>
    </footer>
  );
}
