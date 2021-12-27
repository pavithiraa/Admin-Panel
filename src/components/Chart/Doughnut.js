// import "./styles.css";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 55 },
  { name: "Refferal", value: 30 },
  { name: "Social", value: 15 },
];
const COLORS = ["#4e73df", "#1cc88a", "#36b9cc"];

export default function App() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={80}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
        labelStyle={{
          color: "#333",
          margin: "10px",
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip fill="#333" />
    </PieChart>
  );
}
