import React, { useState } from "react";
import classes from "./DesignPage.module.css"
import shadowImage from "../../images/colours-design-page/shadow.png"
import carBlack from "../../images/colours-design-page/BMW-BLACK.png"
import carWhite from "../../images/colours-design-page/BMW-WHITE.png"
import carRed from "../../images/colours-design-page/BMW-RED.png"
import carBlue from "../../images/colours-design-page/BMW-BLUE.png"
import carGrey from "../../images/colours-design-page/BMW-GREY.png"

export const DesignPage = () => {
    const [color, setColor] = useState(carBlack);
    const [active, setActive] = useState(0)

    function handleEditColor(color: string) {
        setColor(color)
    }

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
                <div className={classes.customizeContainer}>
                <div className={classes.colorTitleContainer}>
                    <h1 className={classes.colorTitle}>CHOOSE</h1>
                    <h1 className={classes.colorTitle}>COLOR</h1>
                </div>
                <div className={classes.buttonsContainer}>
                    <button className={classes.buttonColor} style={{backgroundColor: "black"}} onClick={() => handleEditColor(carBlack)}>black</button>
                    <button className={classes.buttonColor} style={{backgroundColor: "grey"}} onClick={() => handleEditColor(carGrey)}>grey</button>
                    <button className={classes.buttonColor} style={{backgroundColor: "rgb(213, 213, 213)"}} onClick={() => handleEditColor(carWhite)}>white</button>
                    <button className={classes.buttonColor} style={{backgroundColor: "rgb(255, 90, 90)"}} onClick={() => handleEditColor(carRed)}>red</button>
                    <button className={classes.buttonColor} style={{backgroundColor: "rgb(82, 82, 255)"}} onClick={() => handleEditColor(carBlue)}>blue</button>
                </div>
                <Configuration number={1} setActive={setActive} title="Beast Edition" description="625 hp, carbon details, aggressive design, and unmatched driving dynamics" isActive={active === 1}/>
                <Configuration number={2} setActive={setActive} title="Luxury Drive" description="Exquisite comfort, premium Merino leather, and cutting-edge driving technologies" isActive={active === 2}/>
                </div>
                <img className={classes.shadowImage} src={shadowImage} alt="shadow-image" />
                <img className={classes.carImage} src={color} alt="bmw-colour" />
            </div>
        </div>
    )
}

interface IConfiguration {
    title: string
    description: string
    isActive: boolean
    setActive: (arg:number) => void
    number: number
}

const Configuration: React.FC<IConfiguration> = ({title, description, isActive, setActive, number}) => {
    if(isActive) {
        return (
            <div className={classes.configurationContainerActive}>
            <h1 className={classes.configurationTitle}>{title}</h1>
            <p className={classes.configurationDescription}>{description}</p>
        </div>
        )
    } else {
        return (
            <div onClick={() => setActive(number)} className={classes.configurationContainer}>
                <h1 className={classes.configurationTitle}>{title}</h1>
                <p className={classes.configurationDescription}>{description}</p>
            </div>
        )
    }
}