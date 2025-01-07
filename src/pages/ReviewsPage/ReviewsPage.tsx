import React, { useState } from "react";
import classes from "./ReviewsPage.module.css"
import carBackgraund from "../../images/2018-BMW-M8.png"
import { ReviewsComponent } from "../../components/riviewsComponent/reviewsComponent"

export const ReviewsPage = () => {
    const [hiddenIndex, setHiddenIndex] = useState(1);

    const reviews = (index: number) => {
        setHiddenIndex(index);
    };
 
    return (
        <div className={classes.reviewsPage}>
            <img className={classes.carBackgraund} src={carBackgraund} alt="car-backgraund" />
            <div className={classes.reviewsContainer}>
                {hiddenIndex === 1 && (
                    <ReviewsComponent text="Amazing car! The power and handling exceeded all my expectations. The acceleration to 100 km/h is especially impressive" name="Alexander Petrov" index={1} />
                )}
                {hiddenIndex === 2 && (
                    <ReviewsComponent text="BMW M8 is the embodiment of luxury and sporty character. The interior is finished with premium materials, and the engine sound is simply mesmerizing" name="Michael Volkov" index={2} />
                )}
                {hiddenIndex === 3 && (
                    <ReviewsComponent text="After a year of ownership, I can say this is the best car I've ever driven. Perfect balance of comfort and dynamics" name="Dmitry Sokolov" index={3} />
                )}
                {hiddenIndex === 4 && (
                    <ReviewsComponent text="Outstanding handling and stunning design. Every ride brings real pleasure. Definitely worth the money" name="Sergey Ivanov" index={4} />
                )}
                <div>
                    <button className={classes.button1} onClick={() => reviews(1)}>  
                    </button>
                    <button className={classes.button2} onClick={() => reviews(2)}>   
                    </button>
                    <button className={classes.button3} onClick={() => reviews(3)}>
                    </button>
                    <button className={classes.button4} onClick={() => reviews(4)}>
                    </button>
                </div>
            </div>
        </div>
    )
}