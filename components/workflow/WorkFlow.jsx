"use client";
import Image from "next/image";
import CountUp from "react-countup";

function WorkFlow() {
  return (
    <section className="bg-bgSecondColor overflow-hidden dark:bg-blackColor dark:text-whiteColor md:pt-28 pt-14 pb-10 lg:pb-48">
      <div className="max-w-containers overflow-hidden mx-auto">
        <div className="lg:grid grid-cols-2 gap-7">
          <div className="col-span-1 pb-10">
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex text-center justify-around">
                <div>
                  <h3 className="lg:text-[100px] dark:text-whiteColor text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    <CountUp end={25} duration={5} />K
                  </h3>
                  <p className="text-xl text-textColor  font-semibold">
                    Project <br /> completed
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-[100px] text-5xl dark:text-whiteColor leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    <CountUp end={8} duration={5} />k
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Happy <br /> customers
                  </p>
                </div>
              </div>
              <div className="flex text-center justify-around mt-10">
                <div>
                  <h3 className="lg:text-[100px] dark:text-whiteColor text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    <CountUp end={15} duration={5} />
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Years <br /> experiences
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-[100px] text-5xl dark:text-whiteColor leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    <CountUp end={98} duration={5} />
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Awards
                    <br /> achievement
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-3.40d27be6.png&w=750&q=75"
              alt="work-flow"
              width={500}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow;
