import { Button } from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbagLight } from "react-icons/pi";

const User = () => {
  return (
    <div className="part-3 d-flex align-items-center ms-auto ">
      <Button className="circle me-3">
        <AiOutlineUser />
      </Button>
      <span className="price">0.00 BDT</span>
      <Button className="bag ms-3">
        <PiHandbagLight />
        <span className="count">20</span>
      </Button>
    </div>
  );
};

export default User;
