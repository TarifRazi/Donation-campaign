import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import MainDonations from '../../../public/donationData.json';

const Statistics = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const pricesArray = MainDonations.map(item => item.price);
    setPrices(pricesArray);
  }, []);

  // Parse donationAmount from localStorage and convert to integer
  const donationAmountCount = parseInt(JSON.parse(localStorage.donationsAmount));
  const donationAmount = JSON.parse(localStorage.donationsAmount);
  var totalDonation = 0;
  // Calculate the total
  const total = donationAmountCount + prices.reduce((acc, curr) => acc + curr, 0);
  donationAmount.map(item=>{
     const data = MainDonations.filter(function(value){
        return item == value.id;
    })
    totalDonation+=data[0].price;
  });

  const data = [
    { name: 'Price', value: total - donationAmountCount, fill: '#0088FE' },
    { name: 'Donation Amount', value: totalDonation, fill: '#00C49F' }
  ];
// console.log(donationAmount);
  return (
    <div>
      <h3>This is Statistics</h3>
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
