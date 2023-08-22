import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
    460,460,458,452,443,430,412,395,379,371,370,385,422,484,573,684,824,965,997,997,998,997,998,997,995,931,790,630,497,393,274,251,244,249,264,282,303,328,353,376,395,410,421,429,437,443,447,450,452,453,454,454,456,456,458,460,461,462,463,465,466,467,468,470,472,472,474,474,475,475,476,477,478,479,481,482,484,484,486,486,487,487,488,489,490,490,491,493,495,497,499,500,502,503,504,506,507,509,512,515,518,521,524,527,530,533,536,539,542,546,550,553,556,560,563,567,571,575,579,582,585,588,591,594,596,599,602,604,607,610,612,614,617,618
];

export default function Liveprice() {
  const formattedData = data.map((value, index) => ({
    name: index.toString(),
    uv: value
  }));

  return (
    <>
    <div className="pricing" style={{display:"flex", justifyContent:"center"}}>
    <div style={{ width: "80%", height: 300, marginTop:"3%" }}>
      <ResponsiveContainer>
        <AreaChart
          data={formattedData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#colorUv)" // Use the defined gradient here
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    </div>
    </>
  );
}
