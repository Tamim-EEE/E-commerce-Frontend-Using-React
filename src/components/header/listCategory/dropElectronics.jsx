import { Button } from "@mui/material";
import { GiClothes } from "react-icons/gi";
import { IoWatchOutline } from "react-icons/io5";
import { TbShoe } from "react-icons/tb";
import { Link } from "react-router-dom";

const Electronics = () => {
  return (
    <div className="submenu shadow">
      <Link to="/">
        <Button>
          <GiClothes /> &nbsp; clothing
        </Button>
      </Link>
      <Link to="/">
        <Button>
          <TbShoe /> &nbsp; footware
        </Button>
      </Link>
      <Link to="/">
        <Button>
          <IoWatchOutline /> &nbsp; watches
        </Button>
      </Link>
    </div>
  );
};

export default Electronics;
