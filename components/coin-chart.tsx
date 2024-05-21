"use client"


import React, { useState } from 'react';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const CoinSparklineChart = ({ sparkline, priceChange }: {
    sparkline: {
        price: number[];
    },
    priceChange: number;
}) => {
    const chartColor = () => {
        return priceChange <= 0 ? "#ff3131" : "#25df3e";
    };

    const [chartOptions] = useState({
        series: [
            {
                data: sparkline?.price,
            },
        ],
        chart: {
            height: 10,
            sparkline: { enabled: true },
        },
        dataLabels: {
            enabled: false
        },
        tooltip: { enabled: false },
        stroke: { width: 1 },
        colors: [chartColor],
        yaxis: {
        },
    });


    return (
        <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            className="chart"
            width={"100%"}
            height={10}
        />
    );
};

export default CoinSparklineChart;
