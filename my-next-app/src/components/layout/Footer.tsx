const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="cnt py-3">
      <p>&copy; {currentYear} Zdeněk Barth</p>
    </footer>
  );
}
