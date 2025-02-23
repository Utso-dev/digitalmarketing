import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function About() {
  return (
    <section className="bg-blackColor py-28 relative   after:absolute after:content-[''] after:h-full after:w-[1px] after:bg-textColor after:top-0 after:right-[39rem] ">
      <div className="max-w-containers mx-auto px-2.5 lg:px-0">
        <div className="lg:grid grid-cols-2 gap-20 ">
          <div className="col-span-1">
            <Image
              src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=1200&q=75"
              alt="about"
              width={1200} // Use actual image dimensions
              height={800} // Use actual image dimensions
              className="object-cover w-full"
            />
          </div>
          <div className="col-span-1 relative">
            <div className="">
              <div className="bg-blackColor z-30 py-8 relative">
                {" "}
                {/* Added padding for better layout */}
                <h6 className="mb-2 uppercase text-whiteColor text-[18px] font-bold">
                  Who We Are
                </h6>
                <h2 className="uppercase text-whiteColor text-3xl lg:text-[60px] lg:leading-[65px] font-bold">
                  We are a leading digital marketing agency.
                </h2>
              </div>
              <div className=" lg:pl-[11.5rem] lg:mt-20 mt-6">
                <p className=" text-textSecondColor text-[18px] leading-6 font-semibold">
                  We’re a team of strategic mdigital marketing working globally
                  with largest brands, We believe that progress only happens
                  when you refused to play things safe. We combine ideas and
                  behaviors, and insights with design, technological data to
                  produce brand experiences that customers love our services.
                </p>
                <div className=" mt-16">
                  <button className=" hover:bg-whiteColor transition-all hover:text-textColor flex gap-1 w-[174px] h-[174px] rounded-full border border-textSecondColor text-textSecondColor text-[18px] justify-center items-center font-semibold">
                    Explore Us <ArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
