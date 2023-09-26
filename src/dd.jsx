import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30], // Replace with your data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Customize colors as needed
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right', // You can change the legend position
    },
  };

  return (
    <div>
      <h2>Pie Chart with Labels</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;






import { PieChart, Pie, Cell } from "recharts";


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
  
const COLORS = [ "#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
                }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
  );
};

const Statistics = () => {
    return (
        <div className="bg-yellow-600">
            <PieChart className="bg-green-500" width={1300} height={1000}>
      <Pie
        data={data}
        cx={630}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        </div>
    );
};

export default Statistics;