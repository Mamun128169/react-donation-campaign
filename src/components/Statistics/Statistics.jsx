import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../../Utilities/localStorage";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";


const Statistics = () => {
    const data = useLoaderData();
    const [donatedCarts, setDonatedCarts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [donatedAmount, setDonatedAmount] = useState(0);

    useEffect(() => {
        // Calculate total amount from data
        const calculatedTotalAmount = data.reduce((total, val) => total + val.price, 0);
        setTotalAmount(calculatedTotalAmount);
    }, [data]);

    useEffect(() => {
        // Calculate total donation amount from donatedCarts
        const calculatedDonatedAmount = donatedCarts.reduce((total, val) => total + val.price, 0);
        setDonatedAmount(calculatedDonatedAmount);
    }, [donatedCarts]);

    // Calculate the percentage
    const donatedPercentage = parseFloat(totalAmount !== 0 ? ((donatedAmount / totalAmount) * 100).toFixed(2) : 0);
    const totalPercentage = parseFloat((100 - donatedPercentage).toFixed(2));

    // Get stored IDs from local Storage
    useEffect(() => {
        if (data.length > 0) {
            const storedIds = getStoredCard();
            const storedCategories = data.filter(cat => storedIds.includes(cat.id));

            // Update it to the state
            setDonatedCarts(storedCategories);
        }
    }, [data]);


    // pieChart data
    const chartData = [
        {name: "Donated", value: donatedPercentage},
        {name: "Remaining", value: totalPercentage}
    ];

    const COLORS = ["#FF5733", "#4CAF50"]; // Red for remaining, green for total

    return (
        <div className="container mx-auto flex justify-center items-center min-h-[90%]">
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          labelLine={false}
          label={true}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
        >
          {
            chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
    );
};

export default Statistics;
