import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { period: '', value: 500 },
  { period: '', value: 400 },
  { period: '', value: 1200 },
  { period: '', value:  40 },
  { period: '', value: 400 },
  { period: '', value: 90 },
  { period: '', value: 2350 },
  { period: '', value: 4400 },
  { period: '', value: 200 }
];

export default function LastChar() {
  return (
    <div className="w-full h-64 " style={{
        backgroundColor: "rgb(243, 243, 243)",
        width: "70%",
        boxShadow: "0px 2px 5px 1px  grey",
        height: "180px",
        marginTop: "40px",
        marginRight: "15px"
    }}>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          barCategoryGap="20%"
        >
          <XAxis 
            dataKey="period" 
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#666' }}
            domain={[0, 5]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
          />
          <Bar 
            dataKey="value" 
            fill="#dc2626"
            radius={[0, 0, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}