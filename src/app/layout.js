import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/UI/Logo/Logo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "La Nube",
  description: "La Nube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={dmSans.className}>
        <Logo />
        <Navbar nav={true} />
        {children}
        <Navbar NavFooter={true} />
        <Footer />
      </body>
    </html>
  );
}
