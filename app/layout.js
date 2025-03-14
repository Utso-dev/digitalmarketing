import { Geist } from "next/font/google";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import DarkMode from "@/components/mode/DarkMode";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "digital-marketing agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        <DarkMode>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </DarkMode>
      </body>
    </html>
  );
}
