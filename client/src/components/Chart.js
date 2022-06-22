import React from 'react'

import { Bar, Line, Pie } from 'react-chartjs-2';


let myChart = document.getElementById("myChart").getContext("2d");

// // Global Options
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = "#777";

let massPopChart = new Chart(myChart, {
    type: "polarArea", //available types: bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],

        datasets: [
            {
                label: "Population",
                data: [617194, 181454, 153745, 103745, 99745, 93745],
                backgroundColor: ["blue", "green", "red", "yellow", "orange", "purple"],
                borderWidth: 2,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "black",
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Largest Cities In Massachusetts",
            fontSize: 25,
        },
        legend: {
            position: "right",
        },
    },
});



const Chart = ({ data }) => {
    return (
        <div>
            <Bar data={data} options={{}} /></div>

    )
}

export default Chart