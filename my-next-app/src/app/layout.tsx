import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zdeněk Barth",
  description: "Zdeněk Barth's personal website",
  keywords: "programování, web development, react, next.js",
  authors: [{ name: "Zdeněk Barth" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}