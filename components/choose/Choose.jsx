"use client";
import { motion } from "framer-motion";
function Choose() {
  return (
    <section className=" bg-bgSecondColor overflow-hidden dark:bg-blackColor dark:text-whiteColor py-10 lg:py-48">
      <div className=" lg:max-w-containers overflow-hidden md:max-w-mdcontainers sm:max-w-smcontainers mx-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className=" px-6 text-4xl dark:text-whiteColor lg:leading-[200px] text-center uppercase lg:text-[200px] font-bold text-blackColor"
        >
          why choose us
        </motion.h1>
      </div>
    </section>
  );
}

export default Choose;
