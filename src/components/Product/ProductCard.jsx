import React from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import cardStyles from "./Product.module.css"
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    if (!product || Object.keys(product).length === 0) {
      return <p>Loading product...</p>;
    }
    const {title, image, id, price, rating} = product
  return (
    <>
      <div className={cardStyles.card__container}>
        <Link to= {`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          <div className= {cardStyles.rating}>
            {/* rating */}
            <Rating value={rating.rate} precision={0.1} />
            {/* rating counter */}
            <small>{rating.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={cardStyles.button}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard