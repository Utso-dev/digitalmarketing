"use client";
import brands from "@/DemoApi/Brand";
import { motion } from "framer-motion";
import Image from "next/image";
function Brand() {
  return (
    <section className=" max-w-containers mx-auto ">
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" text-center text-base  lg:text-[18px] uppercase text-blackColor font-semibold"
      >
        We worked with global largest brands
      </motion.h3>
      <div className=" mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center ">
        {brands &&
          brands.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index / 15 }}
              viewport={{ once: true }}
              key={item?.id}
              className="flex justify-center mt-3 lg:mt-0"
            >
              <Image
                src={item?.img}
                alt="image"
                width={100}
                height={100}
                className=""
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default Brand;
