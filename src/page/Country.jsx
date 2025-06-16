import React from "react";

const Country = () => {
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
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4  text-white p-3 rounded" style={{
        
      }}>
        New SAM Admissions per Country (OTP and IPF)
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
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
                <td className="p-3 border border-gray-300 text-center">5.54</td>
                <td className="p-3 border border-gray-300 text-center">
                  644,056
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Country;
