import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import headerStyle from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className={headerStyle.nav__wrapper}>
        <section className={headerStyle.header__container}>
          <div className={headerStyle.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={headerStyle.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={headerStyle.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" value="" id="" placeholder="Search product" />
            <BsSearch size={25} />
          </div>
          {/* Right side */}
          <div className={headerStyle.order__cotainer}>
            <Link to="#" className={headerStyle.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* Three components */}
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={headerStyle.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </section>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
