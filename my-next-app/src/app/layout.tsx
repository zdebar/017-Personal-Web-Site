import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const viewport = "width=device-width, initial-scale=1.0";

export const metadata = {
  title: "Zdeněk Barth",
  description: "Zdeněk Barth's personal website",
  keywords: "coding, web development, react, next.js, typescript, portfolio",
  authors: [{ name: "Zdeněk Barth" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
