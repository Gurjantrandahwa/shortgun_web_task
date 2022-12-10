import React from "react";
import Graph from "../Graph/Graph";
import StockTable from "../StockTable/StockTable";
import "./Stocks.scss";
export default function Stocks() {
    return<div className={"stock-wrapper"}>
       <Graph/>
        <StockTable/>
    </div>
}