import React from "react";
import classes from "./DesignPage.module.css"

export const DesignPage = () => {
    return (
        <div className={classes.designPage}>
            <h1 className={classes.backgroundTitle}>M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8</h1>
            <h1 className={classes.backgroundTitleTwo}>M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8M8</h1>
            <div className={classes.titleContainer}>
                <div style={{display: "flex", gap: "1vh"}}>
                    <h1 className={classes.mainTitle}>DESIGN</h1>
                    <h1 className={classes.mainTitle}>YOUR</h1>
                </div>
                <h1 className={classes.handwrittenTitle}>dream car</h1>
            </div>
        </div>
    )
}