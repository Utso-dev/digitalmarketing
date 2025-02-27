"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function BannerImage() {
  return (
    <div>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b1728b9b.jpg&w=3840&q=75"
          width={100}
          height={100}
          className="object-cover w-full lg:h-full"
          alt="banner image "
        />
      </motion.div>
    </div>
  );
}

export default BannerImage;
