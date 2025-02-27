"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function SEOSection({ item }) {
  return (
    <section className="lg:py-16 py-12 px-2.5 lg:px-0 border-t border-gray-300">
      <div className=" mx-auto  md:grid grid-cols-3 gap-8 items-center">
        {/* Left Section - Heading */}
        <motion.h2
          initial={{ x: -30, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:text-4xl md:text-2xl dark:text-whiteColor text-3xl font-bold col-span-1 mb-4 lg:mb-0 leading-tight"
        >
          {item?.title}
        </motion.h2>

        {/* Middle Section - Description */}
        <motion.div
          initial={{ x: -30, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 50, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="col-span-1"
        >
          <p className="text-textColor dark:text-whiteColor md:text-base md:font-semibold text-lg font-bold   mb-6 md:mb-4">
            {item?.description}
          </p>
          <ul className="text-blackColor md:font-semibold text-lg dark:text-textSecondColor font-bold space-y-1">
            {item.services.map((service, index) => (
              <motion.li
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                key={index}
              >
                + {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Circular Button */}
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
          className="col-span-1 flex mt-16 lg:mt-0 lg:justify-end"
        >
          <button className="w-[174px] h-[174px] border border-gray-400 rounded-full mt-4 lg:mt-0 flex items-center justify-center cursor-pointer hover:bg-blackColor group  transition">
            <span className="flex dark:text-textSecondColor items-center text-[18px] font-semibold group-hover:text-whiteColor gap-1 text-gray-700">
              Details <ArrowUpRight size={16} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
