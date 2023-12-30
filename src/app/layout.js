import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { DM_Sans } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/UI/Logo/Logo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Tapas & Vino — La Nube",
  description: "Mediterrán ételek széles választékával és autentikus spanyol hangulattal várunk Budapesten a Bartók Béla úti éttermünkben.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={dmSans.className}>
        <Logo />
        <Navbar nav={true} />
        {children}
        <Analytics />
        <Navbar NavFooter={true} />
        <Footer />
      </body>
    </html>
  );
}
