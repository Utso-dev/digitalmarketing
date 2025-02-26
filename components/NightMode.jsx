"use client";
import { ThemeContext } from "@/context/DarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { Settings, X } from "lucide-react";
import { useContext, useState } from "react";

function NightMode() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        exit={{ opacity: 0 }}
        className={`${
          isOpen
            ? " opacity-0"
            : "absolute top-1/2 -translate-y-1/2 right-0 opacity-1"
        } text-whiteColor p-4 bg-blackColor`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        >
          <Settings />
        </motion.div>
      </motion.button>

      {/* AnimatePresence for Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0, y: "-50%" }}
            animate={{ x: 0, opacity: 1, y: "-50%" }}
            exit={{ x: "100%", opacity: 0, y: "-50%" }}
            transition={{ type: "spring", damping: 15 }}
            className="fixed top-1/2 -translate-y-1/2 right-0 bg-black p-9 text-white w-60 shadow-lg rounded-l-lg flex flex-col items-center"
          >
            {/* Cursor Selection */}
            <div className="w-full">
              <h4 className="text-xl font-bold mb-2 ">Cursor</h4>
              <select className="w-full bg-[#303030] border-transparent py-2 rounded px-4">
                <option value="default">Default</option>
                <option value="animation">Animation</option>
              </select>
            </div>

            {/* Mode Selection */}
            <div className="mt-6 w-full">
              <h4 className="text-xl font-bold mb-2 ">Mode</h4>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setIsDark(false)}
                  className={`${
                    isDark ? "text-textSecondColor" : "text-white"
                  } px-6 py-2 rounded bg-[#303030]  font-semibold`}
                >
                  Light
                </button>
                <button
                  onClick={() => setIsDark(true)}
                  className={`${
                    isDark ? "text-white" : "text-textSecondColor"
                  } px-6 py-2 rounded bg-[#303030]  font-semibold`}
                >
                  Dark
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" absolute top-1/2 -translate-y-1/2 right-60 text-whiteColor p-4 bg-blackColor "
            >
              {isOpen ? <X /> : <Settings />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NightMode;
