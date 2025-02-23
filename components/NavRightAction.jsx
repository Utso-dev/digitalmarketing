"use client";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import NavPopover from "./NavPopover";
import Sidebar from "./Sidebar";

function NavRightAction() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className=" flex ">
        <div className="lg:px-5 px-3 border-r border-[#e5e5e5]">
          <NavPopover />
        </div>

        <button className=" pl-5" onClick={() => setOpen(!open)}>
          <AlignRight className=" lg:w-[25px] lg:h-[25px] w-5 h-5" />
        </button>
      </div>
      {open && <Sidebar setOpen={setOpen} open={open} />}
    </div>
  );
}

export default NavRightAction;
