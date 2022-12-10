import React from "react";
import Chart from "react-apexcharts";
export default function Graph() {
    const data = {
        series: [
            {
                name: "Stocks",
                data: [18300,18256, 18354, 18354,18256,18256,18650],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            fill: {
                colors: ["#fff"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["var(--red)"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: false
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-10    -19T00:00:00.000Z",
                    "2022-10-19T01:00:00.000Z",
                    "2022-10-19T02:00:00.000Z",
                    "2022-10-19T03:00:00.000Z",
                    "2022-10-19T04:00:00.000Z",
                    "2022-10-19T05:00:00.000Z",
                    "2022-10-19T06:00:00.000Z",
                    "2022-10-19T05:00:00.000Z",
                    "2022-10-19T06:00:00.000Z",
                    "2022-10-19T04:00:00.000Z",

                ],
            },
            yaxis: {
                show:true
            },
            toolbar: {
                show: true
            },

        }
    }
    return <div style={{marginTop:"1rem",width:"50%"}} >
        <Chart series={data.series} options={data.options} type={"area"}/>
    </div>
}