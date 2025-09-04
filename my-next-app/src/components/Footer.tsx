import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section>
        <p>&copy; {currentYear} Zdeněk Barth</p>
      </section>
    </footer>
  );
}
