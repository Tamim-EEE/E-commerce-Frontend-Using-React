import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search ms-3 me-3">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoIosSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
