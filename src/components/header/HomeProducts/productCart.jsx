import { Button, Rating } from "@mui/material";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const ProductCart = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
          alt=""
          className="w-100"
        />
        <span className="badge text-bg-primary">16.67%</span>
        <div className="info">
          <h4>Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar</h4>
          <span className="text-success d-block">IN STOCK</span>
          <div className="action">
            <Button className="shadow">
              <BsArrowsFullscreen />
            </Button>
            <Button className="shadow">
              <FiHeart style={{ fontSize: "18px" }} />
            </Button>
          </div>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            precision={0.5}
            size="small"
          />

          <div className="price">
            <span className="oldPrice">120 BDT</span>
            <span className="netPrice ms-2 text-danger">100 BDT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
