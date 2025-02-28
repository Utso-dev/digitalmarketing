"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
function Project() {
  return (
    <section className=" lg:bg-[#e0e3cc] dark:bg-blackColor2 overflow-hidden dark:text-whiteColor bg-whiteColor items-center justify-center p-10  lg:py-24">
      <div className=" max-w-containers overflow-hidden mx-auto text-center">
        <motion.h5
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,

            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className=" text-2xl font-medium dark:text-whiteColor text-blackColor2 "
        >
          Have you project in mind?
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,

            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className=" mt-5 lg:px-20 dark:text-whiteColor leading-[60px] text-5xl lg:text-[100px] text-blackColor2 font-normal lg:leading-[110px]"
        >
          Let’s make something great together!
        </motion.h2>
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
          className=" flex justify-center mt-10 lg:mt-28"
        >
          <button className="w-[250px] dark:text-textSecondColor dark:border-textSecondColor gap-2  hover:text-whiteColor hover:bg-blackColor transition h-[250px] flex items-center justify-center border-2 border-textColor rounded-full text-xl text-textColor font-medium">
            {" "}
            Contact <br /> with Us <ArrowRight size={35} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
