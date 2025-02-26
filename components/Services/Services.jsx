"use client";
import { seoData } from "@/DemoApi/SeviceData";
import { motion } from "framer-motion";
import SEOSection from "./SEOSection";
function Services() {
  return (
    <div className="dark:bg-blackColor2">
      <section className=" py-10 px-2.5 lg:px-0 lg:py-[100px] dark:bg-blackColor2 relative  md:after:absolute md:after:content-[''] md:after:h-full md:after:w-[1px] md:after:bg-[#efefef] md:after:top-0 md:after:right-[68%] lg:after:right-[58%] ">
        <div className=" lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers mx-auto sm:pr-24">
          <div className=" md:px-28 lg:px-[300px] relative dark:text-whiteColor dark:bg-blackColor2 bg-whiteColor z-30 lg:py-10">
            <motion.h5
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-2 uppercase text-textColor dark:text-whiteColor
           text-[18px] font-semibold"
            >
              Services
            </motion.h5>
            <motion.h3
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="uppercase text-blackColor text-[32px] lg:text-[60px] sm:pr-24 dark:text-whiteColor lg:leading-[65px] font-bold"
            >
              Our marketing Services
            </motion.h3>
          </div>
          <div className=" md:pl-[240px] lg:pl-[560px] lg:pr-[300px] mt-8 lg:mt-20">
            <motion.p
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className=" text-[20px] lg:text-lg text-textColor font-semibold dark:text-textSecondColor"
            >
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend engaging with it,
              according to the meanwhile, 51% of consumers say they use Google
              to research products before buying.
            </motion.p>
          </div>
        </div>
      </section>

      <div className=" dark:bg-blackColor2 mx-auto lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers border-b broder[#efefef]  mt-16">
        {seoData &&
          seoData.map((item) => <SEOSection key={item?.id} item={item} />)}
      </div>
    </div>
  );
}

export default Services;
