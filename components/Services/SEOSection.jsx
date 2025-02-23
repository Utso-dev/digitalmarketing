import { ArrowUpRight } from "lucide-react";

export default function SEOSection({ item }) {
  return (
    <section className="lg:py-16 py-12 px-2.5 lg:px-0 border-t border-gray-300">
      <div className=" mx-auto  lg:grid grid-cols-3 gap-8 items-center">
        {/* Left Section - Heading */}
        <h2 className="lg:text-4xl text-3xl font-bold col-span-1 mb-4 lg:mb-0 leading-tight">
          {item?.title}
        </h2>

        {/* Middle Section - Description */}
        <div className="col-span-1">
          <p className="text-textColor text-lg font-bold   mb-6 lg:mb-4">
            {item?.description}
          </p>
          <ul className="text-blackColor text-lg font-bold space-y-1">
            {item.services.map((service, index) => (
              <li key={index}>+ {service}</li>
            ))}
          </ul>
        </div>

        {/* Right Section - Circular Button */}
        <div className="col-span-1 flex mt-10 lg:mt-0 lg:justify-end">
          <div className="w-[174px] h-[174px] border border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blackColor group  transition">
            <span className="flex items-center text-[18px] font-semibold group-hover:text-whiteColor gap-1 text-gray-700">
              Details <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
