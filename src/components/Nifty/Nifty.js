import React, {useState} from "react";
import {BsCaretDownFill} from "react-icons/bs";
import "./Nifty.scss";

export default function Nifty() {
    const [selected, setSelected] = useState(0)
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
                return <div  className={selected === index ? "single-nifty-active" : "single-nifty"}
                             onClick={() => setSelected(index)} key={index}>
                    <div className={"single-nifty-name"}>
                        <div>
                            <p>{value.name}</p>
                            <p className={"volume"}>{value.volume}</p>
                            <p className={"percent"}>{value.percent}</p>
                        </div>

                        <div className={"svg"}>
                            {value.icon}
                        </div>
                    </div>

                </div>
            }))
        }
    </div>
}