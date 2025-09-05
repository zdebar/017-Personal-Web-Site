export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <article>
      <footer className="w-main">
        <p>&copy; {currentYear} Zdeněk Barth</p>
      </footer>
    </article>
  );
}
