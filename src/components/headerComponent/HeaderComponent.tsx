import React from "react";
import cartIcon from "../../images/cart_icon.svg";
import userIcon from "../../images/user_default_icon.jpg";
import classes from "./HeaderComponent.module.css"

export const HeaderComponent = () => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.subdiv}>
            <button className={classes.button}>Главная</button>
            <button className={classes.button}>Продукты</button>
            </div>
            <div className={classes.subdiv}>
            <button className={classes.button}>
                <img className={classes.cartIconStyle} src={cartIcon} alt="cart_icon" />
            </button>
            <button className={classes.button}>
                <img className={classes.userIconStyle} src={userIcon} alt="cart_icon" />
            </button>
            </div>
        </div>
    )
}