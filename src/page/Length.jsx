import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Length = () => {
  const barData = [
    {
      name: "2017",
      Targeted: 2576369,
      Reached: 917688,
    },
  ];

  return (
    <div style={{ width: "240px", height: "360px", marginLeft: "10px",  backgroundColor: "rgb(243, 243, 243)", }}>
      <div className="shadow-lg p-2  h-100">
        <h3 className="text-sm font-semibold text-center mb-1">
          2017 - Program Coverage
          <br />
          <span className="text-xs font-normal">
            (related to the Annual Targeted Caseload)
          </span>
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            data={barData}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(value) => value.toLocaleString()} />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="Targeted" fill="#2c7fb8" barSize={40}>
              <LabelList dataKey="Targeted" position="top" formatter={(val) => val.toLocaleString()} />
            </Bar>
            <Bar dataKey="Reached" fill="url(#hatchedGreen)" barSize={40}>
              <LabelList dataKey="Reached" position="top" formatter={(val) => val.toLocaleString()} />
            </Bar>

            {/* Define hatching for Reached bar */}
            <defs>
              <pattern
                id="hatchedGreen"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
              >
                <rect width="6" height="6" fill="#90EE90" />
                <path d="M0,0 l6,6 M-1,1 l2,-2 M5,7 l2,-2" stroke="#2e8b57" strokeWidth="1" />
              </pattern>
            </defs>
          </BarChart>
        </ResponsiveContainer>

        <div className="text-xs text-center mt-1">
          <span className="inline-block w-3 h-3 mr-1" style={{ backgroundColor: "#2c7fb8" }}></span>
          Targeted SAM Caseload
          % REACHED SAM Children
        </div>
      </div>
    </div>
  );
};

export default Length;
