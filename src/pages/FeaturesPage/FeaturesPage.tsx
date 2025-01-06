import React from "react";
import carLeft from "../../images/BMW-WHITE-BACK.png"
import classes from "./FeaturesPage.module.css"
import {FeatureFeatureContainer} from "../../components/FeaturesFeaturesContainer/FeatureFeatureContainer"
import carBack from "../../images/colours-design-page/shadow.png"
import {Back} from "../../components/FeaturesFeaturesContainer/FeatureBack"




export const FeaturesPage = () => {

    return (
        <div className={classes.featuresPage}>
                        <Back back="COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION  
        COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION COMPETITION"/>

                <div className={classes.titlePageMain}>               
                    <h1 className={classes.textBack}>FEATURE</h1>
                    <h1 className={classes.textBack1}>OF</h1>
                    <h1 className={classes.textBack2}>THIS</h1>
                </div>
                <h1 className={classes.titleCar}>Car</h1>        
            <img className={classes.carLeft} src={carLeft} alt="car-image" />
            <img className={classes.carBack} src={carBack} alt="back" />
                <div className={classes.titleFeature}>
            <FeatureFeatureContainer mainTitle="Engine:" neMainTitleFirst="Type: 4.4-liter" neMainTitleSecond="Power: 600 hp"/>
                <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Transmission:" neMainTitleFirst="Type: 8-speed automatic transmission" neMainTitleSecond="Drive: All-wheel drive system"/>
                <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Speed:" neMainTitleFirst="0 to 100 km/h: Approximately 3.2 seconds" neMainTitleSecond="Top Speed: About 250 km/h"/>
                <div className={classes.line}/>
            <FeatureFeatureContainer mainTitle="Brakes:" neMainTitleFirst="Special M brakes; optional carbon-ceramic brakes available." neMainTitleSecond=""/>
            </div>
        </div>
    )
}