import { ArrowRight } from "lucide-react";

function Project() {
  return (
    <section className=" lg:bg-[#e0e3cc] bg-whiteColor items-center justify-center p-10">
      <div className=" max-w-containers mx-auto text-center">
        <h5 className=" text-2xl font-medium text-blackColor2 ">
          Have you project in mind?
        </h5>
        <h2 className=" mt-5 lg:px-20 leading-[60px] text-5xl lg:text-[100px] text-blackColor2 font-normal lg:leading-[110px]">
          Let’s make something great together!
        </h2>
        <div className=" flex justify-center mt-10 lg:mt-28">
          <button className="w-[250px] gap-2  hover:text-whiteColor hover:bg-blackColor transition h-[250px] flex items-center justify-center border-2 border-textColor rounded-full text-xl text-textColor font-medium">
            {" "}
            Contact <br /> with Us <ArrowRight size={35} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;
