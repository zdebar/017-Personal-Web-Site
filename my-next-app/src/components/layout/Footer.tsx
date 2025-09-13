const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <article className="w-full">
      <footer className="cnt py-3">
        <p>&copy; {currentYear} Zdeněk Barth</p>
      </footer>
    </article>
  );
}
