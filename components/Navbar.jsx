"use client";

import { ThemeContext } from "@/context/DarkMode";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import blackImg from "../public/logo-black.webp";
import whitekImg from "../public/site-logo-white-2.webp";
import NavRightAction from "./NavRightAction";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" shadow-xl dark:shadow-gray-800 sticky top-0 dark:!bg-black dark:text-whiteColor left-0 !bg-whiteColor z-50">
      <nav className="container mx-auto py-4 px-2.5 dark:bg-black ">
        <div className="flex items-center gap-[3rem] justify-between lg:h-16">
          {/* <div className="w-full flex items-center justify-between gap-8 md:hidden my-4 md:my-0">
          <div className="w-full">
            <Image
              width={150}
              height={75}
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=384&q=75"
              alt="logo"
            />
          </div>

          <button
            onClick={toggleMenu}
            className="text-2xl textColor focus:outline-none"
          >
            {menuOpen ? <X /> : <AlignJustify />}
          </button>
        </div> */}
          <div className="z-50 ">
            <Image
              width={100}
              height={75}
              src={isDark ? whitekImg : blackImg}
              alt="logo "
              className=" object-cover w-[50px] sm:w-[80px] lg:w-[150px] "
            />
          </div>
          <div className="hidden md:text-[12px] dark:text-whiteColor  lg:text-[18px] uppercase font-semibold text-center md:flex space-x-2 xl:space-x-10 items-center">
            <Link
              href="/"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              About
            </Link>
            <Link
              href="/page"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Page
            </Link>
            <Link
              href="/services"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Team
            </Link>
            <Link
              href="/blog"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-blackColor dark:text-whiteColor hover:textColor px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
          </div>
          <div>
            <NavRightAction />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* <div
        className={` absolute top-22 left-0 w-full bg-white z-10 transition-transform py-3 duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="/"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/category"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          All Categories
        </Link>
        <Link
          href="/products"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          All Products
        </Link>
        <Link
          href="/top-brand"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          Brands
        </Link>
        <Link
          href="/blogs"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          Blogs
        </Link>
        <Link
          href="/about"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="block textColor hover:textColor px-3 py-2 rounded-md text-base font-medium"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
