import React from "react";
import {BsCaretDownFill} from "react-icons/bs";
import "./Nifty.scss";

export default function Nifty() {
    return <div className={"nifty-wrapper"}>

        {
            [
                {
                    name: "nifty 50",
                    volume: "18,496.60",
                    icon: <BsCaretDownFill/>,
                    percent: "-1125(-0.61%)"
                },
                {
                    name: "nifty next 50",
                    volume: "18,496.60",
                    icon: <BsCaretDownFill/>,
                    percent: "-1125(-0.61%)"
                },
                {
                    name: "nifty midcap select",
                    volume: "18,496.60",
                    icon: <BsCaretDownFill/>,
                    percent: "-1125(-0.61%)"
                },
                {
                    name: "nifty bank",
                    volume: "18,496.60",
                    icon: <BsCaretDownFill/>,
                    percent: "-1125(-0.61%)"
                },
                {
                    name: "nifty financial",
                    volume: "18,496.60",
                    icon: <BsCaretDownFill/>,
                    percent: "-1125(-0.61%)"
                },
            ].map(((value, index) => {
                return <div key={index} className={"single-nifty"}>
                    <div className={"single-nifty-name"}>
                        <p className={"name"}>{value.name}</p>
                        <p className={"volume"}>{value.volume}</p>
                        <p className={"percent"}>{value.percent}</p>
                    </div>
                    <div>
                        {value.icon}
                    </div>
                </div>
            }))
        }
    </div>
}