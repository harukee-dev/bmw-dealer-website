import React from "react"
import classes from "./HomePage.module.css"

export const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <h1 className={classes.bmwBackgroundTitle}>BMW</h1>
            <h1 className={classes.bmwMainTitle}>BMW <br/> M8 2018</h1>
        </div>
    )
}