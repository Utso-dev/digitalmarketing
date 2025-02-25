"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-blackColor py-28 relative lg:after:absolute lg:after:content-[''] after:h-full after:w-[1px] after:bg-textColor after:top-0 after:right-[39rem]">
      <div className="md:max-w-containers sm:max-w-smcontainers mx-auto px-2.5 lg:px-0">
        <div className="md:grid grid-cols-2 lg:gap-20 md:gap-7">
          <div className="col-span-1">
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=1200&q=75"
              alt="about"
              width={1200}
              height={800}
              className="object-cover w-full"
            />
          </div>
          <div className="col-span-1 relative">
            <div className="sm:pr-28 md:pr-0">
              <div className="bg-blackColor z-30 md:py-0 py-8 relative">
                {/* Animated Heading */}
                <motion.h6
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-2 uppercase text-whiteColor text-[18px] font-bold"
                >
                  Who We Are
                </motion.h6>

                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.5 }} // Slight delay
                  className="uppercase text-whiteColor text-3xl lg:text-[60px] lg:leading-[65px] font-bold"
                >
                  We are a leading digital marketing agency.
                </motion.h2>
              </div>

              <div className="lg:pl-[11.5rem] lg:mt-20 mt-6">
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.8 }}
                  className="text-textSecondColor text-[18px] leading-6 font-semibold"
                >
                  We’re a team of strategic digital marketing experts working
                  globally with top brands. We believe that progress happens
                  when you refuse to play it safe. We combine ideas, behaviors,
                  and insights with design, technology, and data to create brand
                  experiences that customers love.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    type: "spring",
                    bounce: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className=" mt-16 "
                >
                  <button className=" hover:bg-whiteColor transition-all hover:text-textColor flex gap-1 w-[174px] h-[174px] rounded-full border border-textSecondColor text-textSecondColor text-[18px] justify-center items-center font-semibold">
                    Explore Us <ArrowUpRight />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
