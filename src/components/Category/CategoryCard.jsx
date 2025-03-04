import React from "react";
import cardStyles from "./Category.module.css";
import { Link } from "react-router-dom";
import "../../assets/images/css/bootstrap.css"

function CategoryCard({ data }) {
  console.log(data);
  return (
    <>
      <div className={`${cardStyles.category} `}
      >
        <Link to={`category/${data.name}`}>
          <span>
            <h2>{data?.title}</h2>
          </span>
          <img src={data?.imgLink} alt={data.name} />
          <p>Shop now</p>
        </Link>
      </div>
    </>
  );
}

export default CategoryCard;
