"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function Blogs() {
  return (
    <>
      {/* <section className=" py-[100px] relative  after:absolute after:content-[''] after:h-full after:w-[1px] after:bg-[#efefef] after:top-0 after:right-[58%] ">
        <div className=" max-w-containers mx-auto">
          <div className=" px-[360px] relative bg-whiteColor z-30 py-10">
            <h5
              className="mb-2 uppercase text-textColor
           text-[18px] font-semibold"
            >
              Recent Blog
            </h5>
            <h3 className="uppercase text-blackColor text-[60px] leading-[65px] font-bold">
              Read Updated Journal
            </h3>
          </div>
          <div className=" pl-[560px] pr-[300px] mt-20">
            <p className=" text-[18px] text-textColor font-semibold ">
              Read our blog and try to see everything from every perspective.
              Our passion lies in making everything accessible and aesthetic for
              everyone.
            </p>
          </div>
        </div>
      </section> */}
      <section className=" py-10 px-2.5 lg:px-0 lg:py-[100px] relative  lg:after:absolute lg:after:content-[''] lg:after:h-full lg:after:w-[1px] lg:after:bg-[#efefef] lg:after:top-0 lg:after:right-[58%] ">
        <div className=" lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers mx-auto">
          <div className=" lg:px-[360px] relative bg-whiteColor z-30 lg:py-10">
            <motion.h5
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-2 uppercase text-textColor
           text-[18px] font-semibold"
            >
              Recent Blog
            </motion.h5>
            <motion.h3
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="uppercase text-blackColor text-[32px] lg:text-[60px]  lg:leading-[65px] font-bold"
            >
              Read Updated Journal
            </motion.h3>
          </div>
          <div className=" lg:pl-[560px] lg:pr-[300px] mt-8 lg:mt-20">
            <motion.p
              initial={{ y: -100, x: 50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className=" text-[20px] lg:text-lg text-textColor font-semibold "
            >
              Read our blog and try to see everything from every perspective.
              Our passion lies in making everything accessible and aesthetic for
              everyone.
            </motion.p>
          </div>
        </div>
      </section>
      <div className=" lg:mt-24 lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers mx-auto">
        <div className="md:grid  md:grid-cols-2 gap-3 lg:gap-8 ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className=" "
          >
            <Link href="blog/details" className="col-span-1 relative block">
              <Image
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75"
                alt="blogs"
                width={300}
                height={500}
                className="w-[50%] md:w-[60%] lg:w-[50%] sm:w-[30%]"
              />
              <div className="absolute w-[60%]  sm:w-[50%] sm:top-[0%] h-full lg:h-[60%]  top-[0px] md:left-28 left-[10%] lg:top-[42%] lg:left-[34%] bg-whiteColor pl-6 lg:pl-9 lg:py-9 py-6 space-y-3">
                <h5 className="text-base text-textColor font-semibold">
                  UI Design . 02 May 2019
                </h5>
                <h3 className="pb-4 text-2xl text-blackColor leading-[30px] font-bold">
                  How to bring fold to your startup company with Axtra
                </h3>
                <div className="border-t-[1px] border-textSecondColor">
                  <button className="pt-3 text-base text-textSecondColor font-semibold flex gap-2">
                    Read More <ArrowUpRight />
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Link
              href="blog/details"
              className="col-span-1 mt-5 lg:mt-0 relative block"
            >
              <Image
                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75"
                alt="blogs"
                width={300}
                height={500}
                className="w-[50%] md:w-[60%]  lg:w-[50%] sm:w-[30%]"
              />
              <div className="absolute w-[60%] md:left-28  lg:h-[60%]  sm:w-[50%] sm:top-[0%]   top-[0px] left-[10%] lg:top-[42%] lg:left-[34%] bg-whiteColor pl-6 lg:pl-9 lg:py-9  py-7 space-y-3">
                <h5 className="text-base text-textColor font-semibold">
                  UI Design . 02 May 2019
                </h5>
                <h3 className="pb-4 text-2xl text-blackColor leading-[30px] font-bold">
                  How to bring fold to your startup company with Axtra
                </h3>
                <div className="border-t-[1px] border-textSecondColor">
                  <button className="pt-3 text-base text-textSecondColor font-semibold flex gap-2">
                    Read More <ArrowUpRight />
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
