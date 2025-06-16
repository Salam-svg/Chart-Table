import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SAHELDashboard = () => {
  const treatmentData = [
    {
      country: "Burkina Faso",
      samEstimated: "No Data",
      samTargeted: "No Data",
      totalAdmissions: "51,898",
      targetAchieved: "88%",
      totalCured: "2,075",
      cureRate: " 3,873",
      totalDeaths: "79%",
      deathRate: "4%",
    },
    {
      country: "Cameroon (Extreme North)",
      samEstimated: "58,862",
      samTargeted: "29,431",
      totalAdmissions: "40,504",
      targetAchieved: "138%",
      totalCured: "1,800",
      cureRate: 888,
      totalDeaths: "87%",
      deathRate: "3%",
    },
    {
      country: "Chad (Natural Refugees)",
      samEstimated: "220,872",
      samTargeted: "165,654",
      totalAdmissions: "89,676",
      targetAchieved: "54%",
      totalCured: "5,500",
      cureRate: 999,
      totalDeaths: "87%",
      deathRate: "3%",
    },
    {
      country: "Chad (Sahel countries)",
      samEstimated: "179,685",
      samTargeted: "89,843",
      totalAdmissions: "110,926",
      targetAchieved: "123%",
      totalCured: 150,
      cureRate: 114,
      totalDeaths: "87%",
      deathRate: "5%",
    },
    {
      country: "Mali",
      samEstimated: "356,398",
      samTargeted: "178,199",
      totalAdmissions: "93,818",
      targetAchieved: "53%",
      totalCured: " 5,879",
      cureRate: "1,884",
      totalDeaths: "79%",
      deathRate: "8%",
    },
    {
      country: "Niger",
      samEstimated: "458,896",
      samTargeted: "458,896",
      totalAdmissions: " 144,418",
      targetAchieved: "31%",
      totalCured: "8,879",
      cureRate: 498,
      totalDeaths: "75%",
      deathRate: "2%",
    },
    {
      country: "Nigeria",
      samEstimated: "668,576",
      samTargeted: "334,288",
      totalAdmissions: "207,492",
      targetAchieved: "62%",
      totalCured: 965,
      cureRate: 966,
      totalDeaths: "78%",
      deathRate: "3%",
    },
    {
      country: "Senegal",
      samEstimated: "166,814",
      samTargeted: "83,407",
      totalAdmissions: " 35,264",
      targetAchieved: "42%",
      totalCured: " 3,467",
      cureRate: " 1,388",
      totalDeaths: "73%",
      deathRate: "7%",
    },
    {
      country: "Mauritania (Hodh ech Chargui)",
      samEstimated: "63,786",
      samTargeted: "31,893",
      totalAdmissions: "14,719",
      targetAchieved: "46%",
      totalCured: 689,
      cureRate: 669,
      totalDeaths: "78%",
      deathRate: "4%",
    },
  ];

  const pieData = [
    { name: "Reached", value: 27, color: "#1f77b4" },
    { name: "Not Reached", value: 73, color: "#90EE90" },
  ];

  const barData = [
    { name: "2,576,369", value: 2576369, color: "#4A90E2" },
    { name: "917,688", value: 917688, color: "#90EE90" },
  ];

  const monthlyAdmissions = [
    {
      country: "Burkina Faso",
      jan: 371,
      feb: 407,
      mar: 739,
      apr: 643,
      may: 649,
      jun: 717,
      jul: 633,
      aug: 452,
      sep: 452,
      oct: 367,
      nov: 367,
      dec: 367,
    },
    {
      country: "Cameroon",
      jan: 146,
      feb: 153,
      mar: 347,
      apr: 346,
      may: 349,
      jun: 347,
      jul: 347,
      aug: 347,
      sep: 347,
      oct: 347,
      nov: 347,
      dec: 347,
    },
    {
      country: "Chad",
      jan: 743,
      feb: 793,
      mar: 747,
      apr: 649,
      may: 649,
      jun: 649,
      jul: 649,
      aug: 649,
      sep: 649,
      oct: 649,
      nov: 649,
      dec: 649,
    },
    {
      country: "Mali",
      jan: 816,
      feb: 728,
      mar: 2119,
      apr: 2115,
      may: 2115,
      jun: 2119,
      jul: 2119,
      aug: 2119,
      sep: 2119,
      oct: 2119,
      nov: 2119,
      dec: 2119,
    },
    {
      country: "Niger",
      jan: 1519,
      feb: 1598,
      mar: 1597,
      apr: 1285,
      may: 1285,
      jun: 1289,
      jul: 1289,
      aug: 1289,
      sep: 1289,
      oct: 1289,
      nov: 1289,
      dec: 1289,
    },
    {
      country: "Nigeria",
      jan: 1619,
      feb: 1734,
      mar: 1790,
      apr: 1785,
      may: 1785,
      jun: 1790,
      jul: 1790,
      aug: 1790,
      sep: 1790,
      oct: 1790,
      nov: 1790,
      dec: 1790,
    },
    {
      country: "Senegal",
      jan: 316,
      feb: 343,
      mar: 447,
      apr: 1145,
      may: 1145,
      jun: 1147,
      jul: 1147,
      aug: 1147,
      sep: 1147,
      oct: 1147,
      nov: 1147,
      dec: 1147,
    },
    {
      country: "Mauritania",
      jan: 115,
      feb: 117,
      mar: 119,
      apr: 118,
      may: 118,
      jun: 119,
      jul: 119,
      aug: 119,
      sep: 119,
      oct: 119,
      nov: 119,
      dec: 119,
    },
  ];

  const otpVsIpfData = [
    {
      country: "Cameroon",
      otpNewSam: 0.53,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Burkina Faso",
      otpNewSam: 0.93,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Chad",
      otpNewSam: 0.53,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Mali",
      otpNewSam: 0.64,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Niger",
      otpNewSam: 0.93,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Nigeria",
      otpNewSam: 0.21,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Senegal",
      otpNewSam: 0.93,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
    {
      country: "Mauritania",
      otpNewSam: 0.93,
      otpReturnSam: 0.227,
      ipfNewSam: 60566,
      ipfReturnSam: 40566,
    },
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
  };

  return (
    <div className="w-full p-6 bg-gray-50">
      <div className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-700 text-white p-3 text-left border border-gray-300 font-semibold">
                  COUNTRIES
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  SAM Estimated Burden (2017)
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  SAM Targeted Caseload (2017)
                </th>
                <th className="bg-green-500 text-white p-3 text-center border border-gray-300 font-semibold">
                  TOTAL SAM ADMISSIONS 2017
                </th>
                <th className="bg-green-500 text-white p-3 text-center border border-gray-300 font-semibold">
                  % Target Achieved
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  Total # of Deaths
                </th>
                <th className="bg-green-500 text-white p-3 text-center border border-gray-300 font-semibold">
                  {" "}
                  Total # of Defaulters
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  % Strengthened Programmes Coverage{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {treatmentData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-3 border border-gray-300 font-medium">
                    {row.country}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.samEstimated}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.samTargeted}
                  </td>
                  <td className="p-3 border border-gray-300 text-center font-semibold">
                    {row.totalAdmissions.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center font-semibold">
                    {row.targetAchieved}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.totalCured.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.cureRate.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.totalDeaths}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white font-bold">
                <td className="p-3 border border-gray-300">TOTAL</td>
                <td className="p-3 border border-gray-300 text-center">
                  3,433,979
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  2,576,369
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  917,688
                </td>
                <td className="p-3 border border-gray-300 text-center">36%</td>
                <td className="p-3 border border-gray-300 text-center">
                  20,878
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  8,512
                </td>
                <td className="p-3 border border-gray-300 text-center">81%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Treatment Coverage Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 bg-blue-600 text-white p-3 rounded">
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
        </div>

        {/* Program Coverage Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 bg-blue-600 text-white p-3 rounded">
            2017 - Program Coverage
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Note */}
      <div className="bg-gray-200 p-4 rounded mb-6">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> IPF treatment, the baseline and target but the
          major two important key OTP. From 219,000 from 2,314,000. The flow
          change the annual SAM burden is end in 2,314,000 from 3,377,200.
        </p>
      </div>

      {/* Monthly Admissions Table */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-3 rounded">
          2017 - New SAM Admissions per country per month
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border border-gray-300 text-left">
                  COUNTRIES
                </th>
                <th className="p-3 border border-gray-300 text-center">Jan</th>
                <th className="p-3 border border-gray-300 text-center">Feb</th>
                <th className="p-3 border border-gray-300 text-center">Mar</th>
                <th className="p-3 border border-gray-300 text-center">Apr</th>
                <th className="p-3 border border-gray-300 text-center">May</th>
                <th className="p-3 border border-gray-300 text-center">Jun</th>
                <th className="p-3 border border-gray-300 text-center">Jul</th>
                <th className="p-3 border border-gray-300 text-center">Aug</th>
                <th className="p-3 border border-gray-300 text-center">Sep</th>
                <th className="p-3 border border-gray-300 text-center">Oct</th>
                <th className="p-3 border border-gray-300 text-center">Nov</th>
                <th className="p-3 border border-gray-300 text-center">Dec</th>
              </tr>
            </thead>
            <tbody>
              {monthlyAdmissions.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-3 border border-gray-300 font-medium">
                    {row.country}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.jan}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.feb}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.mar}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.apr}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.may}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.jun}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.jul}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.aug}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.sep}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.oct}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.nov}
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    {row.dec}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white font-bold">
                <td className="p-3 border border-gray-300">TOTAL</td>
                <td className="p-3 border border-gray-300 text-center">
                  5,645
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  5,873
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  110,655
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  111,001
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  111,001
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  118,187
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  140,218
                </td>
                <td className="p-3 border border-gray-300 text-center">-</td>
                <td className="p-3 border border-gray-300 text-center">-</td>
                <td className="p-3 border border-gray-300 text-center">-</td>
                <td className="p-3 border border-gray-300 text-center">-</td>
                <td className="p-3 border border-gray-300 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* OTP vs IPF Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 bg-blue-600 text-white p-3 rounded">
          New SAM Admissions per Country (OTP and IPF)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* OTP vs IPF Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 border border-gray-300 text-left">
                    Countries
                  </th>
                  <th className="p-3 border border-gray-300 text-center">
                    OTP % New SAM
                  </th>
                  <th className="p-3 border border-gray-300 text-center">
                    OTP % Return SAM
                  </th>
                </tr>
              </thead>
              <tbody>
                {otpVsIpfData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3 border border-gray-300 font-medium">
                      {row.country}
                    </td>
                    <td className="p-3 border border-gray-300 text-center">
                      {row.otpNewSam}
                    </td>
                    <td className="p-3 border border-gray-300 text-center">
                      {row.otpReturnSam}
                    </td>
                  </tr>
                ))}
                <tr className="bg-blue-600 text-white font-bold">
                  <td className="p-3 border border-gray-300">TOTAL</td>
                  <td className="p-3 border border-gray-300 text-center">
                    5.54
                  </td>
                  <td className="p-3 border border-gray-300 text-center">
                    644,056
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60566</div>
                <div className="text-sm text-gray-600">
                  IPF New SAM Admissions
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">40566</div>
                <div className="text-sm text-gray-600">
                  OTP % New SAM Admissions
                </div>
              </div>
            </div>

            {/* Simple Bar Chart Visualization */}
            <div className="mt-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-16 text-xs">Jan</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-xs">Feb</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-xs">Mar</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-xs">Apr</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-xs">May</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 text-xs">Jun</div>
                  <div className="flex-1 bg-gray-200 rounded">
                    <div
                      className="bg-red-500 h-4 rounded"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAHELDashboard;
