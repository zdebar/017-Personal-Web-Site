import "../styles/index.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const viewport = "width=device-width, initial-scale=1.0";

export const metadata = {
  title: "Zdeněk Barth",
  description: "Zdeněk Barth's personal website",
  keywords: "coding, web development, react, next.js, typescript, portfolio",
  authors: [{ name: "Zdeněk Barth" }],
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-headings",
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className + " " + ubuntu.className}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
