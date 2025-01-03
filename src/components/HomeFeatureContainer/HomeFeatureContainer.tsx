import React from "react";
import classes from "./HomeFeatureContainer.module.css"

interface IHomeFeatureContainerProps {
    firstTitle: string,
    secondTitle: string
}

export const HomeFeatureContainer: React.FC<IHomeFeatureContainerProps> = ({firstTitle, secondTitle}) => {
    return (
        <div>
            <p className={classes.firstTitle}>{firstTitle}</p>
            <p className={classes.secondTitle}>{secondTitle}</p>
        </div>
    )
}