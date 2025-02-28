"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
const Pricing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Bring their individual experience and creative",
      content:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people.",
    },
    {
      title: "Human centred design to challenges",
      content:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Design should enrich our day",
      content: "Description of how design improves daily life.",
    },
    {
      title: "Developing core web applications",
      content:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
  ];

  return (
    <section className="bg-bg4Color overflow-hidden dark:bg-blackColor dark:text-whiteColor py-16 px-2.5 md:px-12">
      <div className=" lg:max-w-containers overflow-hidden md:max-w-mdcontainers sm:max-w-smcontainers mx-auto">
        {/* Heading */}
        <div className="lg:grid grid-cols-2 gap-20">
          <div className=" col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,

                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className=" text-lg text-textColor dark:text-whiteColor font-semibold uppercase"
            >
              Pricing Table
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,

                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="lg:text-[60px] dark:text-whiteColor lg:leading-[70px] text-3xl font-bold text-blackColor mb-8"
            >
              BE KIND TO YOUR MIND
            </motion.h2>

            {/* Pricing Section */}
            <div className="">
              <div>
                {/* Accordion */}
                {accordionData.map((item, index) => (
                  <div key={index} className="border-b border-blackColor2">
                    <button
                      className="w-full text-left text-blackColor2 dark:text-whiteColor flex justify-between items-center py-5 font-bold text-lg"
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                      <span className="  texgt-xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-500 dark:text-whiteColor ease-in-out overflow-hidden transform ${
                        openIndex === index
                          ? "max-h-[300px] opacity-100 scale-y-100"
                          : "max-h-0 opacity-0 scale-y-95"
                      }`}
                    >
                      <p className="text-textColor dark:text-textSecondColor pb-6">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" col-span-1">
            {/* Subscription Cards */}
            <div className="space-y-6 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1,

                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-blackColor text-whiteColor dark:bg-blackColor2 py-8 p-6 rounded-xl relative shadow-lg"
              >
                <span className="absolute top-[-14px] right-7 bg-bgRedColor text-whiteColor text-xs font-bold px-3 py-1 rounded-lg">
                  BEST VALUE
                </span>
                <div className="flex  items-center  gap-4">
                  <div className="w-[15%] lg:w-[10%]">
                    {" "}
                    <div className="w-10 h-10  flex items-center justify-center bg-bgRedColor rounded-md">
                      <Check />
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <div className=" flex gap-2 lg:justify-between">
                        <p className="border border-gray-500 text-xs px-4 py-2 rounded-full inline-block mb-2">
                          YEARLY
                        </p>
                        <div className="text-right ">
                          <span className="text-3xl font-bold">$129</span>
                          <span className="text-lg">.99</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold">14 DAYS FREE</h3>
                      <p className="text-gray-400 mt-2 text-base font-semibold lg:pr-28">
                        Subscription fee is{" "}
                        <span className="font-semibold">$129.99 USD</span> and
                        automatically renews each year.
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1,

                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-whiteColor text-blackColor py-8 p-6 rounded-xl relative shadow-lg"
              >
                <div className="flex  items-center  gap-4">
                  <div className="w-[15%] lg:w-[10%]">
                    {" "}
                    <div className="w-10 h-10  flex items-center justify-center border border-borderColor rounded-md">
                      <Check />
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <div className=" flex gap-2 lg:justify-between">
                        <p className="border border-gray-500 text-xs px-4 py-2 rounded-full inline-block mb-2">
                          MONTHLY
                        </p>
                        <div className="text-right ">
                          <span className="text-3xl font-bold">$12</span>
                          <span className="text-lg">.99</span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold">7 DAYS FREE</h3>
                      <p className="text-gray-400 mt-2 text-base font-semibold lg:pr-28">
                        Subscription fee is{" "}
                        <span className="font-semibold">$12.99 USD</span> and
                        automatically renews each year.
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                </div>
              </motion.div>
            </div>
            {/* Call to Action */}
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
              className="flex justify-start mt-20"
            >
              <button className="w-40 h-40 border-2 border-blackColor rounded-full flex flex-col items-center justify-center transition hover:bg-blackColor hover:text-whiteColor">
                <span className="text-lg font-semibold">Try It</span>
                <span className="text-lg font-semibold">Free Now →</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
