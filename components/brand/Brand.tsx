"use client";
import brands from "@/DemoApi/Brand";
import { motion } from "framer-motion";
import Image from "next/image";
function Brand() {
  return (
    <section className=" max-w-containers mx-auto ">
      <h3 className=" text-center text-base  lg:text-[18px] uppercase text-blackColor font-semibold">
        We worked with global largest brands
      </h3>
      <div className=" mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center ">
        {brands &&
          brands.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index / 20 }}
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
