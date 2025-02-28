import About from "@/components/About";
import Banner from "@/components/Banner/Banner";
import Blogs from "@/components/blog/Blogs";
import Brand from "@/components/brand/Brand";
import Choose from "@/components/choose/Choose";
import MarketingSection from "@/components/choose/MarketinSection";
import Scroll from "@/components/demo/Scrolls";
import Feature from "@/components/Feature/Feature";
import PriceTable from "@/components/priceTable/PriceTable";
import Project from "@/components/Project";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/testimonial/Testimonial";
import WorkFlow from "@/components/workflow/WorkFlow";

export default function Home() {
  return (
    <div>
      <div className="lg:my-[100px] overflow-hidden mb-10 ">
        <Banner />
      </div>
      <div className="mb-[100px]">
        <Brand />
      </div>

      <div className="">
        <About />
      </div>

      <div className="lg:mb-[100px] mb-10">
        <Services />
      </div>
      <div className="lg:mb-[100px] mb-10">
        <Feature />
      </div>
      <div className="overflow-hidden">
        <Testimonial />
      </div>
      <div className=" lg:hidden overflow-hidden">
        <div className="overflow-hidden">
          <Choose />
        </div>
        <div className="overflow-hidden">
          <MarketingSection />
        </div>
        <div className="overflow-hidden">
          <WorkFlow />
        </div>
        <div className="overflow-hidden">
          <Project />
        </div>
      </div>
      <div className="overflow-hidden">
        <Scroll />
      </div>
      <div className="overflow-hidden">
        <PriceTable />
      </div>
      <div className="overflow-hidden mb-24">
        <Blogs />
      </div>
    </div>
  );
}
