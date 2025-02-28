import { MoveDown } from "lucide-react";
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";
import BannerVideo from "./BannerVideo";

function Banner() {
  const text = "MARK";
  const name1 = text.split("");
  const text2 = "ETING";
  const name2 = text2.split("");

  return (
    <>
      <section className="lg:max-w-containers  dark:!bg-blackColor dark:text-whiteColor md:max-w-mdcontainers sm:max-w-smcontainers relative mx-auto  px-2.5 lg:px-0">
        <div className="sm:grid grid-cols-5 gap-5 ">
          <div className=" col-span-3">
            <BannerText />
          </div>
          <div className=" col-span-2 mt-16 hidden lg:block ">
            <BannerVideo />
          </div>
        </div>
      </section>
      <div className=" lg:grid  lg:grid-cols-3">
        <div className="col-span-1 h-full hidden lg:block">
          <div className="  flex mt-28 justify-center    ">
            <button className="py-10 px-2 border border-textColor rounded-[20px] relative animate-moveDown">
              <MoveDown className=" text-textColor" />
            </button>
          </div>
        </div>
        <div className=" lg:col-span-2 lg:mt-10">
          <BannerImage />
        </div>
      </div>
    </>
  );
}
export default Banner;
