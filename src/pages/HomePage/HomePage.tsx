import React from "react"
import classes from "./HomePage.module.css"
import dotsImage from "../../images/dots-under-bmw-title.png"
import carImage from "../../images/bmw_home-page_image.png"
import { HomeFeatureContainer } from "../../components/HomeFeatureContainer/HomeFeatureContainer"

export const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <h1 className={classes.bmwBackgroundTitle}>BMW</h1>
            {/* <h1 className={classes.bmwMainTitle}>BMW <br/> M8 2018</h1> */}
            <div>
                <h1 className={classes.bmwMainFirstTitle}>BMW</h1>
                <div className={classes.mainTitleSecondStroke}>
                    <h1 className={classes.bmwSecondStrokeWord}>M8</h1>
                    <h1 className={classes.bmwSecondStrokeWord}>2018</h1>
                </div>
            </div>
            <img className={classes.dotsImage} src={dotsImage} alt="dots-image" />
            <img className={classes.carImage} src={carImage} alt="car-image" />
            <div className={classes.featuresContainer}>
                <button className={classes.learnMoreButton}>Learn More</button>
                <HomeFeatureContainer firstTitle="Max Speed" secondTitle="250 km/h"/>
                <HomeFeatureContainer firstTitle="Engine" secondTitle="4.4L"/>
                <HomeFeatureContainer firstTitle="Power" secondTitle="600+ BHP"/>
                <HomeFeatureContainer firstTitle="Mass" secondTitle="1960 Kg"/>
            </div>
        </div>
    )
}