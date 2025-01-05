import React from "react";
import classes from "./Bakc.module.css"

interface BackProps {
    back:string
}

    export const Back: React.FC<BackProps> = ({ back }) => {
        const backText = back.repeat(100);
        return (
            <div>
                <h1 className={classes.back}>{backText}</h1>
            </div>
        )
    }