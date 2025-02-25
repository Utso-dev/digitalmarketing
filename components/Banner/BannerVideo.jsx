import { Play } from "lucide-react";

function BannerVideo() {
  return (
    <div>
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
  );
}

export default BannerVideo;
