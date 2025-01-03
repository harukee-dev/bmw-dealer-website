import React from "react";
import carLeft from "../../images/bmw-m8-feature-page.png"
import classes from "./FeaturesPage.module.css"
import {FeatureFeatureContainer} from "../../components/FeaturesFeaturesContainer/FeatureFeatureContainer"

export const FeaturesPage = () => {
    return (
        <div className={classes.featuresPage}>
            <h1 className={classes.textBack}>FEATURE OF THIS CAR</h1>
            <img className={classes.carLeft} src={carLeft} alt="car-image" />
            <div className={classes.titleFeature}>
            <FeatureFeatureContainer mainTitle="Engine:" neMainTitleFirst="Type: 4.4-liter" neMainTitleSecond="Power: 600 hp"/>
            <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Transmission:" neMainTitleFirst="Type: 8-speed automatic transmission" neMainTitleSecond="Drive: All-wheel drive system"/>
            <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Speed:" neMainTitleFirst="0 to 100 km/h: Approximately 3.2 seconds" neMainTitleSecond="Top Speed: About 250 km/h"/>
            <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Suspension:" neMainTitleFirst="M adaptive suspension with adjustable dampers, providing sporty stiffness and comfort." neMainTitleSecond=""/>
            <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Brakes:" neMainTitleFirst="Special M brakes; optional carbon-ceramic brakes available." neMainTitleSecond=""/>
            </div>
        </div>
    )
}