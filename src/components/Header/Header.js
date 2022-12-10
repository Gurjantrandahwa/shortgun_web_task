import React, {useState} from "react";
import "./header.scss";
import {useUserAuth} from "../../Common/UserAuthContext";
import {Button} from "@mui/material";
import {CgPlayPause} from "react-icons/cg";
import {BiSearch} from "react-icons/bi";


export default function Header() {
    const [selected, setSelected] = useState(0)
    const {logOut} = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (e) {
            console.log(e.message)
        }
    }


    return <div className={"header"}>
        <div className={"logo-wrapper"}>
            <img
                className={"logo"}
                src={"https://www.nseindia.com/assets/images/NSE_Logo.svg"} alt={""}/>
            <div className={"input-wrapper"}>
                <input type={"text"}
                       placeholder={"Search by company name,symbol or keyword"}/>
                <BiSearch/>
            </div>
            <div className={"header-right"}>
                <div className={"currency"}>
                    <img src={"https://www.nseindia.com/assets/images/logo_commodityDer.png"} alt={""}/>
                    <p>Currency Market is Open</p>
                </div>
                <div className={"trading-date"}>

                    Current Trading Date-06-Dec-2022

                    <CgPlayPause/>
                </div>
            </div>

        </div>
        <div className={"box"}>
            <div className={"navbar"}>

                {
                    [
                        {
                            text: "Home"
                        },
                        {
                            text: "About"
                        },
                        {
                            text: "Market Data"
                        },
                        {
                            text: "invest"
                        },

                        {
                            text: "list"
                        },
                        {
                            text: "trade"
                        },
                        {
                            text: "regulation"
                        },
                        {
                            text: "learn"
                        },
                        {
                            text: "resources"
                        },

                    ].map( (value, index) => {
                        return<ul key={index}
                                  className={selected === index ? "menu-item active" : "menu-item"}
                                  onClick={() => setSelected(index)}>
                            <li>{value.text}</li>
                        </ul>
                    })
                }
            </div>
            <Button variant={"contained"}
                    sx={{position: "absolute", left:"220px",top:"30px"}}
                    size={"small"}
                    color={"secondary"}
                    onClick={handleLogOut}>
                log out
            </Button>
        </div>

    </div>

}