import React from "react"
import classes from "./HomePage.module.css"
import dotsImage from "../../images/dots-under-bmw-title.png"

export const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <h1 className={classes.bmwBackgroundTitle}>BMW</h1>
            <h1 className={classes.bmwMainTitle}>BMW <br/> M8 2018</h1>
            <img className={classes.dotsImage} src={dotsImage} alt="dots-image" />
        </div>
    )
}