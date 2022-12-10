import React from 'react';
import {useUserAuth} from "../Common/UserAuthContext";
import Header from "../components/Header/Header";
import Nifty from "../components/Nifty/Nifty";
import Stocks from "../components/Stocks wrapper/Stocks/Stocks";


export default function Homepage() {

    const {user} = useUserAuth();
    // console.log(user)

    let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&interval=5min&apikey=3UG91CZYIZ0O06KC';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
    return <div style={{
        position:"relative"
    }}>
        <Header/>
        <Nifty/>
        <Stocks/>
    </div>
}
