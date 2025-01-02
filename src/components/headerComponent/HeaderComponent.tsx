import React from "react";
import classes from "./HeaderComponent.module.css"
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.subdiv}>
            <Link to={"/"} className={classes.button}>Home</Link>
            <Link to={"/design"} className={classes.button}>Design</Link>
            <Link to={'/features'} className={classes.button}>
                Features
            </Link>
            <Link to={'/reviews'} className={classes.button}>
                Reviews
            </Link>
            </div>
            <Link to={'/order'} className={classes.button}>Order Now</Link>
        </div>
    )
}