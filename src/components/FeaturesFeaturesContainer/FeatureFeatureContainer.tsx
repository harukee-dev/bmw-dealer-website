import React from "react";
import classes from "./FeatureFeatureContainer.module.css"

interface IFeatureFeatureContainerProps {
    mainTitle:string
    neMainTitleFirst:string
    neMainTitleSecond:string
}

export const FeatureFeatureContainer: React.FC<IFeatureFeatureContainerProps> = ({mainTitle, neMainTitleFirst, neMainTitleSecond}) => {
    return (
        <div className={classes.titleDiv}>
            <p className={classes.mainTitle}>{mainTitle}</p>
            <p className={classes.neMainTitleFirst}>{neMainTitleFirst}</p>
            <p className={classes.neMainTitleSecond}>{neMainTitleSecond}</p>
        </div>
    )
}