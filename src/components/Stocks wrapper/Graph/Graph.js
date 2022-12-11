import React, {useEffect, useState} from "react";
import Plot from 'react-plotly.js';

export default function Graph() {
    const [stockChartXValues, setStockChartXValues] = useState([])
    const [stockChartYValues, setStockChartYValues] = useState([])


    const API_KEY = "3UG91CZYIZ0O06KC";
    let stockSymbol = "IBM";
    let TimeInterval = "60min";
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    const StockAPi = async () => {
        try {
            const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stockSymbol}&interval=${TimeInterval}&apikey=${API_KEY}`);
            const data = await res.json().then((data) => {
                for (let key in data['Weekly Time Series']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Weekly Time Series'][key]['1. open']);
                }

                console.log(stockChartYValuesFunction,"Y")
                // console.log(stockChartXValuesFunction,"X")
                setStockChartXValues(stockChartXValuesFunction)
                setStockChartYValues(stockChartYValuesFunction)
            })
            console.log(data)


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        StockAPi().catch((error) => {
            console.log(error)
        });
    }, [])

    return <div className={"graph"}>
<p>Stock{stockChartXValues.map((value,index)=>{
    return<div key={index}>
        {value[100]}
    </div>
})}</p>
        <Plot
            data={[
                {
                    x: stockChartXValues,
                    y: stockChartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={{width: 720, height: 400}}
        />
    </div>
}