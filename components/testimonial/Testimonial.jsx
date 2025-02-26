"use client";
import { ThemeContext } from "@/context/DarkMode";
import { testimonials } from "@/DemoApi/Testimonial";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quateWhit from "../../public/Pi7_quote.png";
import quate from "../../public/quote.png";
function Testimonial() {
  const swiperRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({
        x: (clientX - window.innerWidth / 2) * 0.07,
        y: (clientY - window.innerHeight / 2) * 0.07,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section
      className={`${
        isDark
          ? "dark:bg-blackColor2 testimonialDark lg:mb-[100px] mb-20"
          : "testimonials relative bg-white lg:mb-[100px] mb-20 "
      }`}
    >
      <div className=" hidden lg:block">
        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[90px] left-[26%]  "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5fcd9521.jpg&w=256&q=75"
              alt="test"
              width={150}
              height={100}
            />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[500px] left-[2%] "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.82004ae1.jpg&w=128&q=75"
              alt="test"
              width={100}
              height={100}
            />
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[700px] left-[8%] "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.632d09dc.jpg&w=384&q=75"
              alt="test"
              width={250}
              height={100}
            />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[150px] right-[30%] "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.44563823.jpg&w=96&q=75"
              alt="test"
              width={100}
              height={100}
            />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[550px] right-[5%] "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.83e5f14f.jpg&w=256&q=75"
              alt="test"
              width={200}
              height={100}
            />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{
            x: position.x,
            y: position.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          className=" absolute top-[680px] right-[15%] "
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=256&q=75"
              alt="test"
              width={130}
              height={100}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers lg:w-1/3 mx-auto ">
        <div className="max-w-containers flex justify-center  text-center ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={3000}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center flex-col items-center"
              >
                <div className="text-5xl flex justify-center text-black mb-4 text-center">
                  <Image
                    src={isDark ? quateWhit : quate}
                    alt="quote"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-lg dark:text-whiteColor italic font-medium text-gray-700">
                  {testimonial.quote}
                </p>
                <h3 className="mt-10 dark:text-whiteColor font-bold text-3xl text-blackColor">
                  {testimonial.name}
                </h3>
                <p className="text-textSecondColor mt-1 text-sm font-bold">
                  {testimonial.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" flex justify-center mt-7 gap-4">
          <button
            onClick={goPrev}
            className="px-3  z-30  py-3 dark:border-textSecondColor dark:hover:bg-whiteColor dark:text-textSecondColor border border-blackColor rounded-full text-blackColor hover:bg-blackColor hover:text-whiteColor transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goNext}
            className="px-3 dark:border-textSecondColor dark:hover:bg-whiteColor dark:text-textSecondColor z-30  py-3 border border-blackColor rounded-full text-blackColor hover:bg-blackColor hover:text-whiteColor transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
