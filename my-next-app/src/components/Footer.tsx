import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer>
        <article>
          <p>&copy; {currentYear} Zdeněk Barth</p>
        </article>
      </footer>
    </section>
  );
}
