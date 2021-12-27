// 
// import "./styles.css";
import React from "react";
import { BarChart, Bar, XAxis,YAxis} from "recharts";

const data = [
  {
    name: "January",
    uv: 4215,
   
  },
  {
    name: "Feb",
    uv: 5312,
   
  },
  {
    name: "Mar",
    uv: 6251,
    
  },
  {
    name: "Apr",
    uv: 7841,
    
  },
  {
    name: "May",
    uv: 9821,
    
  },
  {
    name: "Jun",
    uv: 14984,
    
  },
 
];

export default function App() {
  return (
    <BarChart width={600} height={400} data={data}   barSize={20}>
      <XAxis dataKey="name" />
          <YAxis />
      <Bar dataKey="uv" fill="#4e73df" />

    </BarChart>
  );
}
