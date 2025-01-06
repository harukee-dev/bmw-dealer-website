import React from "react";
import classes from "./ReviewsPage.module.css"

export const ReviewsPage = () => {
    const reviews = [
        {
            name: "Alexander Petrov",
            date: "15.06.2023",
            text: "Amazing car! The BMW M8 exceeded all my expectations. Power, comfort and handling are at the highest level."
        },
        {
            name: "Maria Ivanova",
            date: "02.05.2023", 
            text: "Gorgeous design and impressive technical specifications. This is truly a dream car!"
        },
        {
            name: "Dmitry Sokolov",
            date: "20.04.2023",
            text: "Service is excellent! The buying process was easy and pleasant. The car is completely worth its price."
        },
        {
            name: "Elena Morozova", 
            date: "10.03.2023",
            text: "The BMW M8 is the embodiment of luxury and power. Every ride brings incredible pleasure!"
        },
        {
            name: "Igor Volkov",
            date: "25.02.2023",
            text: "Excellent dynamics and handling. This is exactly what I was looking for in a premium sports car."
        },
        {
            name: "Anna Koroleva",
            date: "15.01.2023",
            text: "Impeccable build quality and attention to detail. BMW once again proves its superiority."
        },
        {
            name: "James Wilson",
            date: "10.01.2023", 
            text: "The M8 is a masterpiece of engineering. The performance is mind-blowing!"
        },
        {
            name: "Sarah Thompson",
            date: "05.01.2023",
            text: "Absolutely stunning vehicle. The interior luxury matches its exterior beauty perfectly."
        },
        {
            name: "Michael Brown",
            date: "28.12.2022",
            text: "Best car I've ever owned. The technology and driving experience are unmatched."
        },
        {
            name: "Emma Davis",
            date: "20.12.2022",
            text: "The M8 combines comfort and sportiness in a way I've never experienced before."
        },
        {
            name: "Robert Johnson",
            date: "15.12.2022",
            text: "Worth every penny. The sound of that V8 engine is pure music to my ears."
        },
        {
            name: "Lisa Anderson",
            date: "10.12.2022",
            text: "Exceptional handling and power delivery. BMW has outdone themselves."
        },
        {
            name: "David Miller",
            date: "05.12.2022",
            text: "The perfect grand tourer. Comfortable for long trips yet thrilling when you want it to be."
        },
        {
            name: "Jennifer White",
            date: "01.12.2022",
            text: "The attention this car gets is incredible. But it's not just looks - it performs brilliantly."
        },
        {
            name: "Thomas Clark",
            date: "25.11.2022",
            text: "From the build quality to performance, everything about this car screams excellence."
        },
        {
            name: "Rachel Green",
            date: "20.11.2022",
            text: "The M8 is the definition of luxury performance. Couldn't be happier with my purchase."
        }
    ];

    const getRandomReviews = () => {
        const shuffled = [...reviews].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    const displayedReviews = getRandomReviews();

    return (
        <div className={classes.reviewsPage}>
                            <h1 className={classes.backgroundTitle}>20182018201820182018201820182018</h1>
                            <h1 className={classes.backgroundTitleTwo}>20182018201820182018201820182018</h1>
            <div className={classes.reviewsContainer}>
                <h1 className={classes.reviewsTitle}>Отзывы наших клиентов</h1>
                
                {displayedReviews.map((review, index) => (
                    <div key={index} className={classes.review}>
                        <div className={classes.reviewHeader}>
                            <h3>{review.name}</h3>
                            <span className={classes.date}>{review.date}</span>
                        </div>
                        <p className={classes.reviewText}>
                            "{review.text}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}