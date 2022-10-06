import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logoImg} alt='logo' />
        <h1>Our Meals</h1>
        <HeaderCartButton onPress={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
