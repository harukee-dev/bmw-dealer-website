import React from "react";
import cartIcon from "../../images/cart_icon.svg";
import userIcon from "../../images/user_default_icon.jpg";
import classes from "./HeaderComponent.module.css"
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.subdiv}>
            <Link to={"/"} className={classes.button}>Главная</Link>
            <Link to={"/products"} className={classes.button}>Продукты</Link>
            </div>
            <div className={classes.subdiv}>
            <Link to={'/cart'} className={classes.button}>
                <img className={classes.cartIconStyle} src={cartIcon} alt="cart_icon" />
            </Link>
            <Link to={'user_profile'} className={classes.button}>
                <img className={classes.userIconStyle} src={userIcon} alt="cart_icon" />
            </Link>
            </div>
        </div>
    )
}