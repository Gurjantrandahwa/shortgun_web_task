import React, {useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import "./Graph.scss";
import {BsCaretDownFill} from "react-icons/bs";

export default function Graph() {
    const [stockChartXValues, setStockChartXValues] = useState([])
    const [stockChartYValues, setStockChartYValues] = useState([])
    const [highest, setHighest] = useState([])
    const [lowest, setLowest] = useState([])

    const current = new Date().toLocaleString();


    const API_KEY = "3UG91CZYIZ0O06KC";
    let stockSymbol = "IBM";
    let TimeInterval = "60min";
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let HighestFunction = [];
    let LowestFunction = []
    let DateFunction = []
    const StockAPi = async () => {
        try {
            const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stockSymbol}&interval=${TimeInterval}&apikey=${API_KEY}`);
            const data = await res.json().then((data) => {
                for (let key in data['Weekly Time Series']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Weekly Time Series'][key]['1. open']);

                }

                console.log(stockChartYValuesFunction, "Y")
                // console.log(stockChartXValuesFunction,"X")
                setStockChartXValues(stockChartXValuesFunction)
                setStockChartYValues(stockChartYValuesFunction)
                for (let key in data['Weekly Time Series']) {
                    HighestFunction.push(data['Weekly Time Series'][key]['2. high']);
                    LowestFunction.push(data['Weekly Time Series'][key]['3. low']);
                    setHighest(HighestFunction)
                    setLowest(LowestFunction)
                }
                for (let key in data['Meta Data']) {
                    DateFunction.push(data['Meta Data'][key]['3. Last Refreshed'])
                    console.log(DateFunction, "date")
                    // setDate(DateFunction)
                }
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

    return <div className={"graph-container"}>
        <p style={{
            textAlign:"right",
            color:"#6c757d",
            fontSize:"14px",
            marginBottom:"5px"
        }}>Updated {current}</p>
        <hr/>
        <div className={"data-wrapper"}>
            <div>
                <h3>18,496.60 <BsCaretDownFill size={24} color={"#c35516"}/></h3>
                <p style={{
                    color:"#dc3545"
                }}>-86.95 (-0.46%)</p>
            </div>
            <div>
                <p>Open</p>
                <h3> {stockChartYValues[1]}</h3>
            </div>
            <div>
                <p>High</p>
                <h3 style={{
                    color:"#0b6321"
                }}> {highest[1]}</h3>
            </div>

            <div>
                <p>low</p>
                <h3 style={{
                    color:"#dc3545"
                }}>{lowest[1]}</h3>
            </div>


        </div>
        <div className={"graph"}>
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

    </div>
}