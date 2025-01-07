import React from "react";
import classes from "./reviewsComponent.module.css"

interface IReviewsContainerProps {
    text:string
    name:string
    index:number    
}

export const ReviewsComponent: React.FC<IReviewsContainerProps> = ({text, name, index}) => {
    return (
        <div>
            <p className={classes.text}>{text}</p>
            <p className={classes.name}>{name}</p>
            <div className={classes.index}>{index}</div>
        </div>
    )
}