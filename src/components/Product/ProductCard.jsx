import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import cardStyles from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDisc, renderAdd }) {
  const { title, image, id, price, rating, description } = product;
  // console.log(product);

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        title,
        image,
        id,
        price,
        rating,
        description,
      },
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div
        className={`${cardStyles.card__container} ${
          flex ? cardStyles.product__flexed : ""
        }`}
      >
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          {flex ? <h3>{title}</h3> : <h3> {truncate(title, 41)}</h3>}
          {renderDisc && (
            <div style={{ maxWidth: "800px", fontSize: "1.25rem" }}>
                <p>{description}</p>
            </div>
          )}
          <div className={cardStyles.rating}>
            {/* rating */}
            <Rating value={rating?.rate} precision={0.1} />
            {/* rating counter */}
            <small>{rating?.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormat amount={price} />
          </div>

          {renderAdd && (
            <button className={cardStyles.button} onClick={addToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
