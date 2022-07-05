
import React, { useState } from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const Charts = ({ amountsArray, categoriesArray }) => {
    const [activeChart, setActiveChart] = useState("line");

    const handleChange = (event) => {
        setActiveChart(event.target.value);
    }





    const data = {
        labels: categoriesArray,
        datasets: [
            {

                data: amountsArray,
                backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "#f44336",
                    "#ce93d8",
                    "#00796B",
                    "#FFA000",
                    "#1de9b6",
                    "#E64A19",
                    "#2196f3",
                    "#26a69a",
                    "#90a4ae",
                    "#8bc34a",
                    "#a1887f",
                ],
            }],
        options: {
            maintainAspectRatio: false
        }
    }
    return (
        <div className="container" style={{ width: "600px" }}>
            <h2>  Charts</h2>
            <button
                className={`btn ${activeChart === "line" ? "btn-primary" : "btn-secondary"}`}
                onClick={handleChange}
                name="date"
                value="line"
            >
                Show Line Chart
            </button>
            <button
                className={`btn ${activeChart === "bar" ? "btn-primary" : "btn-secondary"}`}
                onClick={handleChange}
                name="date"
                value="bar"
            >
                Show Bar Chart
            </button>
            <button
                className={`btn ${activeChart === "pie" ? "btn-primary" : "btn-secondary"}`}
                onClick={handleChange}
                name="date"
                value="pie"
            >
                Show Pie Chart
            </button>

            {activeChart === "line" ? <Line data={data} /> : activeChart === "bar" ? <Bar data={data} /> : activeChart === "pie" ? <Pie data={data} /> : null}



        </div>

    )
}

export default Charts