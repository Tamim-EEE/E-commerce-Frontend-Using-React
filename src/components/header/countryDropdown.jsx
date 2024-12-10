import { Button } from "@mui/material";
import { LiaAngleDownSolid } from "react-icons/lia";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const context = useContext(MyContext);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(""); // Store selected country name
  const [filteredCountryList, setFilteredCountryList] = useState([]); // For filtered list

  const openModal = () => {
    setisOpenModal(true); // Open modal
    setFilteredCountryList(context.countryList); // Show the full country list when modal opens
  };

  const selectCountry = (country) => {
    setSelectedCountry(country); // Set the selected country name
    setisOpenModal(false); // Close modal after selecting
  };

  useEffect(() => {
    if (isOpenModal) {
      setFilteredCountryList(context.countryList); // Reset the list to the full list when modal opens
    }
  }, [isOpenModal, context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const list = context.countryList.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setFilteredCountryList(list); // Show filtered list
    } else {
      setFilteredCountryList(context.countryList); // Reset to full list when search is cleared
    }
  };

  return (
    <>
      <Button className="countryDropdown" onClick={openModal}>
        <div className="info d-flex flex-column">
          <span className="location">Your Location</span>
          <span className="name">
            {selectedCountry !== ""
              ? selectedCountry.length > 10
                ? selectedCountry?.substring(0, 10) + "..."
                : selectedCountry
              : "Select location"}
          </span>
        </div>
        <span className="ms-auto">
          <LiaAngleDownSolid />
        </span>
      </Button>
      <Dialog
        className="location-model"
        TransitionComponent={Transition}
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
      >
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close-button" onClick={() => setisOpenModal(false)}>
          <IoClose />
        </Button>
        <div className="search w-100">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="area-location mt-3">
          {filteredCountryList?.length !== 0 &&
            filteredCountryList?.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectCountry(item.country)}
                  className={`${
                    selectedCountry === item.country ? "active" : ""
                  }`}
                >
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
