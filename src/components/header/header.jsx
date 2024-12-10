import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CountryDropdown from "./countryDropdown";
import SearchBar from "./searchBar";
import User from "./user";
import { useContext } from "react";
import { MyContext } from "../../App";
const Header = () => {
  const { countryList } = useContext(MyContext);

  return (
    <div className="container">
      <div className="row">
        <div className="logoWrapper d-flex align-items-center col-sm-2">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="col-sm-10 d-flex align-items-center part-2">
          {countryList.length !== 0 && <CountryDropdown />}

          <SearchBar />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
