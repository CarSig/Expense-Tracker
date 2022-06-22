
import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const DoughnutChart = ({ testData, amountsArray, categoriesArray }) => {





    const data = {
        labels: categoriesArray,
        datasets: [
            {

                data: amountsArray,
                backgroundColor: ["blue", "green", "red", "yellow", "orange", "purple"],
            }]
    }
    return (
        <div className="container" style={{ width: "600px" }}>
            <h2>    DoughnutChart!</h2>



            <Doughnut data={data} />
            <Bar data={data} />
        </div>

    )
}

export default DoughnutChart