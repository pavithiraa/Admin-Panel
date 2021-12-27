import "./chart.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Jan",
    Earnings: 0,
   
  },
  {
    name: "Feb",
    Earnings: 10000,
   
  },

  {
    name: "Mar",
    Earnings: 5000,
    
  },
  
  {
    name: "Apr",
    Earnings: 15000,
    
  },
  {
    name: "May",
    Earnings: 10000,
   
  },
  {
    name: "Jun",
    Earnings: 20000,
    
  },
  
  {
    name: "July",
    Earnings: 15000,
    
  },
  
  {
    name: "Aug",
    Earnings: 25000,
    
  },
  {
    name: "Sep",
    Earnings: 20000,
   
  },
  
  {
    name: "Oct",
    Earnings: 30000,
    
  },
  {
    name: "Nov",
    Earnings: 25000,
    
  },
  
  {
    name: "Dec",
    Earnings: 40000,
    
  }
 
];

export default function AreaCharts() {
  return (
    <AreaChart
    // className="areaChart"
      width={780}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 5,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip  />
      <Area type="monotone" dataKey="Earnings" 
      stroke="#4e73df" 
      strokeWidth={3} 
      fill="#e2eaf1"
      dot={true} 
      />
    </AreaChart>
  );
}
