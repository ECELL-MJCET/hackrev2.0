import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hack Revolution",
  description:
    "A social coding competition where computer programmers come together to innovate and enhance software/hardware ideas",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
