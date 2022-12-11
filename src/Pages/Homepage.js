import React from 'react';
import {useUserAuth} from "../Common/UserAuthContext";
import Header from "../components/Header/Header";
import Nifty from "../components/Nifty/Nifty";
import Stocks from "../components/Stocks wrapper/Stocks/Stocks";


export default function Homepage() {

    const {user} = useUserAuth();
    // console.log(user)

    return <div style={{
        position:"relative"
    }}>
        <Header/>
        <Nifty/>
        <Stocks/>
    </div>
}
