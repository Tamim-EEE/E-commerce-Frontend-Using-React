import { Button } from "@mui/material";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GiPencilBrush } from "react-icons/gi";
import {
  IoChevronDown,
  IoManOutline,
  IoMenuOutline,
  IoWatchOutline,
  IoWomanOutline,
} from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";
import { Link } from "react-router-dom";
import SideNavMen from "./CatforMen";
import SideNavWomen from "./CatforWomen";
import { MdArrowForwardIos } from "react-icons/md";

const DropCategories = () => {
  const [allCategoryOpen, setAllCategoryOpen] = useState(false);

  return (
    <div className="navPart-1">
      <div className="catWrapper">
        <Button
          className="allCatTab"
          onClick={() => setAllCategoryOpen(!allCategoryOpen)}
        >
          <span className="icon-1 me-2">
            <IoMenuOutline />
          </span>
          <span className="text">ALL CATEGORIES</span>
          <span className="icon-2 ms-4">
            <IoChevronDown />
          </span>
        </Button>

        <div className={`sideNavBar ${allCategoryOpen === true ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">
                <Button>
                  <IoManOutline /> &nbsp;  fashion <MdArrowForwardIos className="ms-auto" />
                </Button>
              </Link>
              <SideNavMen />
            </li>
            <li>
              <Link to="/">
                <Button>
                  <IoWomanOutline /> &nbsp; electronics <MdArrowForwardIos className="ms-auto"/>
                </Button>
              </Link>
              <SideNavWomen />
            </li>
            <li>
              <Link to="/">
                <Button>
                  <GiPencilBrush />
                  &nbsp; groceries
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Button>
                  <IoWatchOutline /> &nbsp; footware
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Button>
                  <TbMoodKid /> &nbsp; beauty
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Button>
                  <RiBloggerLine /> &nbsp; wellness
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Button>
                  <FiPhoneCall /> &nbsp; bags
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropCategories;
