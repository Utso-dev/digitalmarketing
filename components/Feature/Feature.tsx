"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    id: 1,
    title: "BENJON",
    title2: "WEBSITE",
    year: "2012",
    image:
      "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=1200&q=75",
  },
  {
    id: 2,
    title: "BENJON",
    title2: "WEBSITE",
    year: "2016",
    image:
      "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=1200&q=75",
  },
  {
    id: 3,
    title: "BENJON",
    title2: "WEBSITE",
    year: "2020",
    image:
      "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=1200&q=75",
  },
];

export default function Feature() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="bg-black text-white py-28 relative">
      <div className="lg:max-w-containers md:max-w-mdcontainers sm:max-w-smcontainers mx-auto lg:px-10 px-4">
        <p className="text-sm uppercase opacity-80">Featured Work</p>

        {/* Slide Counter */}
        <div className="absolute lg:top-20 top-40 left-16 sm:left-24 sm:top-44 z-50 lg:left-[40%] transform -translate-x-1/2 text-2xl font-semibold flex gap-2 items-center">
          <span className="text-5xl font-bold">{currentIndex} /</span>{" "}
          {projects.length}
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="lg:grid grid-cols-2 items-center mt-8">
                <div className="col-span-1"></div>
                <div className="col-span-1 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-670px] sm:left-[-580px] lg:left-[-560px]">
                    <h2 className="lg:text-[150px] sm:text-[80px] sm:leading-[90px] text-6xl leading-[70px] lg:leading-[150px] font-bold">
                      {project.title}
                    </h2>
                    <h2 className="lg:text-[150px] sm:text-[80px] sm:leading-[90px] text-6xl leading-[70px] pl-8 sm:pl-12 lg:pl-28 font-bold lg:leading-[150px]">
                      {project.title2}
                    </h2>
                    <p className="lg:text-[150px] sm:text-[80px] sm:leading-[90px] text-6xl  leading-[70px] lg:leading-[150px] font-bold">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className=" flex gap-4">
          <button
            onClick={goPrev}
            className="px-3 absolute left-4 sm:left-10 lg:left-56 top-1/2 z-30  py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={goNext}
            className="px-3 absolute sm:right-10 right-4 lg:right-44 top-1/2 z-30   py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
