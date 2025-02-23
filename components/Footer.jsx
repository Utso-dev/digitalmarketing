import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blackColor text-whiteColor  ">
      <div className="container mx-auto lg:flex px-2.5 lg:px-0  justify-between items-center">
        <div className="space-y-4">
          <div>
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&w=256&q=75"
              alt="logo"
              width={60}
              height={60}
              className=" object-cover"
            />
          </div>
          <p className=" text-textSecondColor text-base font-semibold max-w-sm">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>

        <div className="flex flex-col  text-center mt-6 md:mt-0">
          {["FACEBOOK", "TWITTER", "LINKEDIN", "INSTAGRAM"].map((platform) => (
            <button
              key={platform}
              className=" px-8 py-9 border text-lg duration-300 font-semibold border-borderColor transition hover:bg-whiteColor hover:text-blackColor2 "
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="lg:text-right text-center mt-6 md:mt-0">
          <h2 className="xl:text-[150px] py-3 text-[50px] font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
            LET'S TALK
          </h2>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t text-center  lg:text-start border-borderColor container mx-auto  py-10 flex   flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-base font-semibold text-whiteColor">
          © 2022 - 2025 | All rights reserved <br /> by Wealcoder
        </p>
        <nav className="  flex gap-3 mb-4 lg:mb-0  mt-4 md:mt-0">
          {["about us", "contact", "career", "faqs"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="  text-whiteColor text-sm md:text-base font-semibold  uppercase"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
