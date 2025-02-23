import { seoData } from "@/DemoApi/SeviceData";
import SEOSection from "./SEOSection";
function Services() {
  return (
    <>
      <section className=" py-10 px-2.5 lg:px-0 lg:py-[100px] relative  lg:after:absolute lg:after:content-[''] lg:after:h-full lg:after:w-[1px] lg:after:bg-[#efefef] lg:after:top-0 lg:after:right-[58%] ">
        <div className=" max-w-containers mx-auto">
          <div className=" lg:px-[360px] relative bg-whiteColor z-30 lg:py-10">
            <h5
              className="mb-2 uppercase text-textColor
           text-[18px] font-semibold"
            >
              Services
            </h5>
            <h3 className="uppercase text-blackColor text-[32px] lg:text-[60px]  lg:leading-[65px] font-bold">
              Our marketing Services
            </h3>
          </div>
          <div className=" lg:pl-[560px] lg:pr-[300px] mt-8 lg:mt-20">
            <p className=" text-[20px] lg:text-lg text-textColor font-semibold ">
              Consumers today rely heavily on digital means to research
              products. We research a brand of bldend engaging with it,
              according to the meanwhile, 51% of consumers say they use Google
              to research products before buying.
            </p>
          </div>
        </div>
      </section>

      <div className=" mx-auto max-w-containers border-b broder[#efefef]  mt-16">
        {seoData &&
          seoData.map((item) => <SEOSection key={item?.id} item={item} />)}
      </div>
    </>
  );
}

export default Services;
