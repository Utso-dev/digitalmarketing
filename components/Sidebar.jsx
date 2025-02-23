"use client";

import { Minus, Plus, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ open, setOpen }) {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu]
    );
  };

  const menuItems = ["HOME", "ABOUT", "SERVICE", "PAGES", "BLOG", "CONTACT"];
  return (
    <section
      className={`fixed inset-0 z-50 bg-blackColor transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="container mx-auto pt-10">
        <div className="flex flex-col md:flex-row  space-y-10 md:space-y-0 ">
          <div className="w-full space-y-48 pt-10  md:w-1/4 flex-col h-full justify-between">
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&w=256&q=75"
              alt="logo"
              width={60}
              height={60}
              className="object-cover"
            />
            <div className=" ">
              <h4 className="font-semibold text-white text-2xl mb-4">
                Follow Us
              </h4>
              <ul className="mt-2 space-y-1 text-gray-400">
                {[
                  "Dribbble",
                  "Behance",
                  "Instagram",
                  "Facebook",
                  "Twitter",
                  "YouTube",
                ].map((social) => (
                  <li
                    key={social}
                    className="text-lg block text-whiteColor font-medium"
                  >
                    <Link href="#">{social}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <Link
                href="/about"
                className="text-lg block text-whiteColor font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg text-whiteColor font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full md:w-2/4 pt-24">
            <nav className="mt-6">
              {menuItems.map((item) => (
                <div key={item} className="border-b border-gray-800">
                  <button
                    className="flex justify-between items-center w-full  text-[40px] font-semibold text-left text-whiteColor"
                    onClick={() => toggleMenu(item)}
                  >
                    {item}
                    <div className="bg-[#ffffff1a] p-8">
                      {openMenus.includes(item) ? (
                        <Minus className="text-whiteColor  " />
                      ) : (
                        <Plus className="text-whiteColor  " />
                      )}
                    </div>
                  </button>
                  {openMenus.includes(item) && (
                    <div className=" text-whiteColor text-sm p-4">
                      Submenu for {item}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="w-full bg-blackColor2 md:w-1/4 p-6">
            <div className=" flex justify-end">
              <button
                className="p-4 rounded-full  bg-[#1d1d1d]  shadow-lg"
                onClick={() => setOpen(false)}
              >
                <X color="#fff" size={30} />
              </button>
            </div>

            <div className=" mt-24">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search keyword"
                  className="w-full py-4 px-5 0 bg-blackColor2 border  border-borderColor  text-textColor rounded-full focus:outline-none"
                />
                <Search className="absolute top-1/2 -translate-y-1/2 right-5 text-gray-400" />
              </div>

              <div className="mt-20">
                <h3 className="text-xl text-whiteColor font-bold">
                  Get in touch
                </h3>
                <div className=" space-y-2 mt-4">
                  <p className="text-whiteColor font-medium text-base ">
                    +(02) - 094 980 547
                  </p>
                  <Link
                    href="info@extradesign.com"
                    className="text-whiteColor font-medium block text-base "
                  >
                    info@extradesign.com
                  </Link>
                  <p className="text-whiteColor font-medium text-base ">
                    230 Norman Street New York, QC (USA) H8R 1A1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
