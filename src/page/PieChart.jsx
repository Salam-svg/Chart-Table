import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieCharte = () => {
  const pieData = [
    { name: "Reached", value: 23, color: "#1f77b4" },
    { name: "Not Reached", value: 77, color: "#90EE90" },
  ];

  const barData = [
    { name: "2,576,369", value: 2576369, color: "#4A90E2" },
    { name: "917,688", value: 917688, color: "#90EE90" },
  ];
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
        className="text-sm font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  ;
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      className=""
      style={{
        backgroundColor: "rgb(243, 243, 243)",
        marginLeft: "10px",
        // width: "250px",
        // height: "320px",
        padding: "10px",
      }}
    >
      <div className="" style={{
         backgroundColor: "rgb(243, 243, 243)",
          width: "250px",
          padding: "10px",
      }}>
        <h3 className="text-black text-sm font-semibold mb-2">
          2017 - Treatment Coverage
        </h3>
               <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div style={{ marginLeft: "10px", fontSize: "12px", marginTop: "8px" }}>
          <p>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#99e6b3",
                width: "12px",
                height: "12px",
                marginRight: "5px",
              }}
            ></span>
            % REACHED SAM Children
          </p>
          <p>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#2c7fb8",
                width: "12px",
                height: "12px",
                marginRight: "5px",
              }}
            ></span>
            % NOT REACHED SAM Children
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieCharte;
