import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

function NavMenu() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="w-full bg-blackColor">
          <div>hai</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NavMenu;
