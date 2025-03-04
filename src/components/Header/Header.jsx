import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "../../assets/images/css/bootstrap.css";
import headerStyle from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <>
      <section className={headerStyle.nav__wrapper}>
        <section className={`${headerStyle.header__container} row`}>
          <div className={`${headerStyle.logo__container} `}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>

            <div className={headerStyle.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div className={headerStyle.order_span}>
                <span style={{ fontSize: "16px" }}>Delivered to</span>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={`${headerStyle.search} `}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" value="" id="" placeholder="Search product" />
            <BsSearch size={40} />
          </div>

          <div className={`${headerStyle.order__cotainer} `}>
            <Link to="#" className={headerStyle.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={headerStyle.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
