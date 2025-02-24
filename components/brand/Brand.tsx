import brands from "@/DemoApi/Brand";
import Image from "next/image";

function Brand() {
  return (
    <section className=" max-w-containers mx-auto ">
      <h3 className=" text-center text-base  lg:text-[18px] uppercase text-blackColor font-semibold">
        We worked with global largest brands
      </h3>
      <div className=" mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center ">
        {brands &&
          brands.map((item) => (
            <div key={item?.id} className="flex justify-center mt-3 lg:mt-0">
              <Image
                src={item?.img}
                alt="image"
                width={100}
                height={100}
                className=""
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Brand;
