import React, { useState } from 'react'

import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = ({ }) => {
    const [chartData, setChartData] = useState({
        labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
        datasets: [
            {
                label: "Population",
                data: [
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor: ["blue", "green", "red", "yellow", "orange", "purple"],
            }]
    })

    return (
        <div>

            <Bar

                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Largest Cities In Massachusetts',
                        fontSize: 25
                    },
                    legend: {

                        position: 'right'
                    }
                }}
            />

        </div>

    )
}

export default Chart
