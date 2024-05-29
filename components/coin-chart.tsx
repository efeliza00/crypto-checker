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
    aspectRatio: 4,
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
            display: false,
            ticks: {
                display: false
            },
            grid: {
                display: false
            }
        },
    },
    scaleShowLabels: false,
    plugins: {
        title: {
            display: false,
            text: '7 day Chart',
        },
        tooltip: {
            enabled: false,
        },
    },
};

const CoinChart = ({ sparkline, priceChange }: {
    sparkline: {
        price: number[];
    },
    priceChange: number;
}) => {
    const data = {
        labels: sparkline.price.map((_, index) => index),
        datasets: [
            {
                data: sparkline.price,
                borderColor: priceChange < 0 ? 'rgb(204,0,0)' : 'rgb(34,204,0)',
                tension: 0,
                pointRadius: 0
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export default CoinChart;
