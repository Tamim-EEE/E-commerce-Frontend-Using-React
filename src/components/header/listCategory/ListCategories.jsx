import { Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoManOutline,
  IoWatchOutline,
  IoWomanOutline,
} from "react-icons/io5";
import { Button } from "@mui/material";
import { TbMoodKid } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";
import { GiPencilBrush } from "react-icons/gi";
import Electronics from "./dropElectronics";
import Groceries from "./dropGroceries";
import Footwear from "./dropFootware";
import Fashion from "./dropFashoin";

const ListCategories = () => {
  return (
    <div className="navPart-2 d-flex align-items-center">
      <ul className="list list-inline ms-auto">
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <IoHomeOutline /> &nbsp; fashion
            </Button>
          </Link>
          <Fashion />
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <IoManOutline /> &nbsp; electronics
            </Button>
          </Link>
          <Electronics />
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <IoWomanOutline /> &nbsp; groceries
            </Button>
          </Link>
          <Groceries />
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <GiPencilBrush />
              &nbsp; footwear
            </Button>
          </Link>
          <Footwear />
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <IoWatchOutline /> &nbsp; beauty
            </Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <TbMoodKid /> &nbsp; wellness
            </Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/">
            <Button>
              <RiBloggerLine /> &nbsp;bags
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListCategories;
