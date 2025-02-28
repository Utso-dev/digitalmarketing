"use client";
import { motion } from "framer-motion";
function BannerText() {
  const text = "MARK";
  const name1 = text.split("");
  const text2 = "ETING";
  const name2 = text2.split("");
  return (
    <div>
      <div>
        <div className="relative">
          <h4 className="font-bold uppercase text-lg lg:text-2xl dark:text-whiteColor after:absolute after:content-[''] dark:after:bg-whiteColor after:top-1/2 left-10 lg:after:left-28 after:ml-4 after:w-10 lg:after:w-28 after:h-[1px] after:bg-black">
            Digital
          </h4>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[80px] leading-[90px] dark:text-whiteColor sm:text-[100px] sm:leading-[100px]  uppercasetext-blackColor md:text-[110px] md:leading-[100px] lg:leading-[240px]  lg:text-[260px] font-extrabold lg:font-bold"
        >
          {" "}
          {name1.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i / 6 }}
              viewport={{ once: true }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" sm:ml-[18rem] dark:text-whiteColor md:absolute  sm:leading-[100px] z-30  sm:text-[100px] lg:right-0 md:right-10 ml-[4.5rem] md:text-[110px]  md:leading-[100px] uppercase text-[80px] leading-[90px] text-blackColor lg:leading-[240px] lg:text-[260px] font-extrabold  lg:font-bold"
        >
          {name2.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i / 6 }}
              viewport={{ once: true }}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" sm:pr-28 md:pr-28 lg:pr-[350px] my-5 lg:mt-10 text-[12px] sm:text-sm  text-justify lg:text-[20px] font-normal sm:font-semibold text-textColor"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, soluta
          eos. Numquam pariatur enim alias porro necessitatibus eaque
          reprehenderit laboriosam adipisci?
        </motion.p>
      </div>
    </div>
  );
}

export default BannerText;
