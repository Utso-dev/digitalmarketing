import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function NavPopover() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="custome" className="p-2">
            <Search className="lg:!w-[25px] lg:!h-[25px] !w-5 !h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" lg:left left2 py-2 px-2 dark:!bg-blackColor dark:text-whiteColor  bg-bgColor">
          <div>
            <input
              className="lg:py-3 py-1 dark:!bg-blackColor dark:text-whiteColor  px-2 w-full lg:px-4 text-sm lg:text-base bg-whiteColor outline-none border-none lg:rounded-[10px]"
              type="text"
              placeholder="Search.."
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default NavPopover;
