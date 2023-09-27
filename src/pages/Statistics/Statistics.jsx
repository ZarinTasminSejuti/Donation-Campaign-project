import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import MainLayout from '../../layouts/MainLayout';

 
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


// pie chart calculation
const Statistics = () => {

    let totalPrice = 0;
    let myChart = 0;
    const [chartData, setChartData] = useState([]);
    const elements = useLoaderData();

    useEffect(() => {
        const donateStorage = localStorage.getItem('donateData');
        //checking if any item is exist or not in the page
        if (donateStorage) {
            setChartData(JSON.parse(donateStorage));
        }
    }, []);

    elements.map((ele) => {
        totalPrice += ele.price;
    });

    chartData.map((chart) => {
        myChart += chart.price;
    });

    const data = [
        { name: 'Total Donation', value: totalPrice },
        { name: 'My Total Chart', value: myChart },
    ];


    return (
        <div className="max-w-[1300px] mx-auto p-3 lg:p-0">
            <MainLayout></MainLayout>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={180}>
                                    
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                            </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
           
   
            {/* donation bar */}
            <div className="flex items-center justify-center mt-7 md:mb-5">
                <p>Total Donation</p>
                <span className="bg-[#FF444A] w-12 lg:w-24 h-3 rounded-sm mr-8 ml-3"></span>
                <p>Your Donation</p>
                <span className="bg-[#00C49F] w-12 lg:w-24 h-3 rounded-sm ml-3 "></span>
                
            </div>
        </div>
    );
};

export default Statistics;