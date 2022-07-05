
import React, { useState, useContext } from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { GlobalContext } from '../../context/GlobalState';
Chart.register(...registerables);



const Charts = ({ amountsArray, categoriesArray }) => {
    const { categories } = useContext(GlobalContext);
    const [activeChart, setActiveChart] = useState("line");

    const handleChange = (event) => {
        setActiveChart(event.target.value);
    }

    const data = {
        labels: categoriesArray,
        datasets: [
            {
                data: amountsArray,
                backgroundColor: categories.map((category) => category.color)
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