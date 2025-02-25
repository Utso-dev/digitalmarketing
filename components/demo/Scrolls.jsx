"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Choose from "../choose/Choose";
import MarketingSection from "../choose/MarketinSection";
import Project from "../Project";
import WorkFlow from "../workflow/WorkFlow";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    let sections = panelsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.offsetWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full overflow-hidden hidden lg:block">
      <div
        ref={containerRef}
        className="relative flex overflow-hidden h-screen"
      >
        <div className="flex w-[400vw]">
          <div
            ref={(el) => (panelsRef.current[0] = el)}
            className="w-screen h-screen "
          >
            <Choose />
          </div>
          <div
            ref={(el) => (panelsRef.current[1] = el)}
            className="w-screen h-screen "
          >
            <MarketingSection />
          </div>
          <div
            ref={(el) => (panelsRef.current[2] = el)}
            className="w-screen h-screen "
          >
            <WorkFlow />
          </div>
          <div
            ref={(el) => (panelsRef.current[3] = el)}
            className="w-screen h-screen "
          >
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}
