"use client"
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, Tooltip, CategoryScale, LinearScale, PointElement);


export const options = {
    responsive: true,
    aspectRatio: 1.5,
    scales: {
        x: {
            display: false,
            ticks: {
                display: false
            },
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                color: 'hsl(199 73% 50%)',
                borderWidth: 0.01 // Ensure the y-axis gridlines are also very thin
            }
        },
    },
    scaleShowLabels: true,
    plugins: {
        title: {
            display: true,
            text: '7 day Chart',
        }
    },
};


const CurrencyChart = ({ sparkline, priceChange }: {
    sparkline: {
        price: number[];
    },
    priceChange: number;
}) => {

    const data = {
        labels: sparkline.price.map((_, index) => index),
        datasets: [
            {
                label: '7 day change',
                data: sparkline.price,
                borderColor: priceChange < 0 ? 'rgb(204,0,0)' : 'rgb(34,204,0)',
                tension: 0.1,
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}

export default CurrencyChart