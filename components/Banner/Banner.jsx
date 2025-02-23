import { MoveDown, Play } from "lucide-react";
import Image from "next/image";

function Banner() {
  return (
    <>
      <section className="max-w-containers relative mx-auto  px-2.5">
        <div className="lg:grid grid-cols-5 gap-5 ">
          <div className=" col-span-3">
            <div className="relative">
              <h4 className="font-bold uppercase text-lg lg:text-2xl after:absolute after:content-[''] after:top-1/2 left-10 lg:after:left-28 after:ml-4 after:w-10 lg:after:w-28 after:h-[1px] after:bg-black">
                Digital
              </h4>
            </div>

            <h1 className=" text-[42px] leading-10 uppercasetext-blackColor  lg:leading-[240px]  lg:text-[260px] font-extrabold lg:font-bold">
              MARK
            </h1>
            <h1 className=" lg:absolute leading-10 lg:right-0 ml-[4.5rem] uppercase text-[42px] text-blackColor lg:leading-[240px] lg:text-[260px] font-extrabold  lg:font-bold">
              ETING
            </h1>
            <p className=" lg:pr-[350px] my-5 lg:mt-10 text-[12px]  text-justify lg:text-[20px] font-normal md:font-semibold text-textColor">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              soluta eos. Numquam pariatur enim alias porro necessitatibus eaque
              reprehenderit laboriosam adipisci?
            </p>
          </div>
          <div className=" col-span-2 mt-16 hidden lg:block ">
            <div className="flex justify-end items-center gap-4">
              <div className=" relative w-[150px] h-[150px] rounded-full border overflow-hidden border-textColor  mt-2">
                <button className=" absolute w-full h-full  bg-[rgba(0,0,0,100)]">
                  <p className=" p-3 bg-blackColor rounded-full absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 b">
                    <Play color="#fff" size={15} />
                  </p>
                  <video
                    src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with actual video URL
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                  ></video>
                </button>
              </div>
              <div>
                <h5 className=" text-[16px] uppercase text-blackColor font-bold">
                  Watch
                </h5>
                <h3 className=" uppercase text-[18px] text-blackColor font-bold">
                  video intro
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" lg:grid  lg:grid-cols-3">
        <div className="col-span-1  hidden lg:block">
          <div className="  flex items-center justify-center    ">
            <button className="py-10 px-2 border border-textColor rounded-[20px] relative animate-moveDown">
              <MoveDown className=" text-textColor" />
            </button>
          </div>
        </div>

        <div className=" lg:col-span-2">
          <Image
            src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b1728b9b.jpg&w=3840&q=75"
            width={100}
            height={100}
            className="object-cover w-full lg:h-full"
            alt="banner image "
          />
        </div>
      </div>
    </>
  );
}
export default Banner;
