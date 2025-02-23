import Image from "next/image";

function WorkFlow() {
  return (
    <section className="bg-bgSecondColor pt-28">
      <div className="max-w-containers mx-auto">
        <div className="lg:grid grid-cols-2 gap-7">
          <div className="col-span-1 pb-10">
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex text-center justify-around">
                <div>
                  <h3 className="lg:text-[100px] text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    25k
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Project <br /> completed
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-[100px] text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    8k
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Happy <br /> customers
                  </p>
                </div>
              </div>
              <div className="flex text-center justify-around mt-10">
                <div>
                  <h3 className="lg:text-[100px] text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    15
                  </h3>
                  <p className="text-xl text-textColor font-semibold">
                    Years <br /> experiences
                  </p>
                </div>
                <div>
                  <h3 className="lg:text-[100px] text-5xl leading-[60px] lg:leading-[110px] text-blackColor2 font-semibold">
                    98
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
