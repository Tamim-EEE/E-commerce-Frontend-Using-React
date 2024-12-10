import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SideNavMen = () => {
  return (
    <div className="sidemenu">
      <li>
        <Link to="/">
          <Button>home</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>men</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>women</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>beauty</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>watches</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>kids</Button>
        </Link>
      </li>
    </div>
  );
};

export default SideNavMen;
