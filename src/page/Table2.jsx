import React from "react";

const Table2 = () => {
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

  return (
    <div className="mb-8" style={{
        fontSize: "8px"
    }}>
        <div className="overflow-x-auto">
          <table className="border-collapse" style={{
            // width: "60%",
            marginLeft: "15px",
            marginTop: "10px"
          }}>
            <thead className="h-10">
              <tr>
                <th className=" align-middle text-white p-3 text-left border border-gray-300 font-semibold" style={{
                    backgroundColor: "rgb(128, 128, 128)"
                }}>
                  COUNTRIES
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  SAM Estimated Burden (2017)
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  SAM Targeted Caseload (2017)
                </th>
                <th className=" text-white p-3 text-center border border-gray-300 font-semibold" style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>
                  TOTAL SAM ADMISSIONS 2017
                </th>
                <th className=" text-white p-3 text-center border border-gray-300 font-semibold" style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>
                  % Target Achieved
                </th>
                <th className="bg-blue-600 text-white p-3 text-center border border-gray-300 font-semibold">
                  Total # of Deaths
                </th>
                <th className=" text-white p-3 text-center border border-gray-300 font-semibold" style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>
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
                  <td className="p-3 border border-gray-300 font-medium" style={{
                    backgroundColor: "rgb(253, 253, 253)"
                  }}>
                    {row.country}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.samEstimated}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.samTargeted}
                  </td>
                  <td className="p-3 border border-gray-300 text-center font-semibold" style={{
                    backgroundColor: "rgb(204, 226, 181)"
                  }}>
                    {row.totalAdmissions.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center font-semibold"  style={{
                    backgroundColor: "rgb(204, 226, 181)"
                  }}>
                    {row.targetAchieved}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.totalCured.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(204, 226, 181)"
                  }}>
                    {row.cureRate.toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.totalDeaths}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white font-bold">
                <td className="p-3 border border-gray-300"  style={{
                    backgroundColor: "rgb(128, 128, 128)"
                }}>TOTAL</td>
                <td className="p-3 border border-gray-300 text-center">
                  3,433,979
                </td>
                <td className="p-3 border border-gray-300 text-center">
                  2,576,369
                </td>
                <td className="p-3 border border-gray-300 text-center"  style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>
                  917,688
                </td>
                <td className="p-3 border border-gray-300 text-center"  style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>36%</td>
                <td className="p-3 border border-gray-300 text-center">
                  20,878
                </td>
                <td className="p-3 border border-gray-300 text-center"  style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>
                  8,512
                </td>
                <td className="p-3 border border-gray-300 text-center">42%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
};

export default Table2;
