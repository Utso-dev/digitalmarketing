export default function MarketingSection() {
  return (
    <section className="bg-bgSecondColor py-10 lg:pt-28 lg:bg-bgthirdColor items-center justify-center lg:p-10 px-2.5 lg:px-0">
      <div className=" lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className=" col-span-1 lg:space-y-20">
          <h3 className="w-20 text-sm font-bold text-blackColor2 hidden lg:block">
            WHY CHOOSE US
          </h3>
          <h1 className="lg:text-[60px] text-center text-[28px] lg:leading-[70px] font-semibold lg:font-bold text-blackColor2  mt-2">
            KEYWORD, RESEARCH STRATEGY, SURVEY, & ANALYTICS
          </h1>
          <p className=" mb-6 text-blackColor2 text-lg  text-center lg:text-start font-semibold mt-4 lg:px-28">
            Attention, we take out our round glasses and our sweater with elbow
            patches to go back to the origins of the user experience: the first
            mention of the user and its importance was born in the
          </p>
          <div className="flex justify-center lg:justify-start  lg:mt-4">
            <button className="border text-sm font-bold border-blackColor2  px-2 py-1 rounded-full">
              GOOGLE
            </button>
            <button className="border border-blackColor2 text-sm font-bold  px-2 py-1 rounded-full">
              PINTEREST
            </button>
            <button className="border border-blackColor2 text-sm font-bold  px-2 py-1 rounded-full">
              INSTAGRAM
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid gap-6 sm:px-11  space-y-4 lg:space-y-0 ">
          <StatCard
            percentage="60%"
            title="STRATEGY"
            description="Your marketing strategy optimizing performances doesn’t have to be a guessing game."
            gap={true}
          />
          <StatCard
            percentage="95%"
            title="AUDIENCE"
            description="Your marketing strategy optimizing performances doesn’t have to be a guessing game."
          />
          <StatCard
            percentage="70%"
            title="KEYWORD"
            description="Your marketing strategy optimizing performances doesn’t have to be a guessing game."
            gap={true}
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ percentage, title, description, gap }) {
  return (
    <div
      className={`${
        gap
          ? " md:grid grid-cols-8 md:pl-28 flex gap-4 items-center"
          : " md:grid grid-cols-10 items-center flex gap-4 "
      } `}
    >
      <div className="col-span-3">
        <div className="md:w-[174px]  md:h-[174px] w-[130px]  h-[130px] flex items-center justify-center border-2 border-blackColor2 rounded-full text-4xl font-bold">
          {percentage}
        </div>
      </div>

      <div className=" col-span-5 pr-5">
        <h3 className="text-3xl font-bold text-blackColor2">{title}</h3>
        <p className="lg:text-textColor text-blackColor2 font-bold sm:font-semibold lg:font-medium text-lg mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}
