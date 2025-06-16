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
    <div className="" style={{
        marginLeft: "10px"
    }}>
      <h3 className="text-xl font-bold mb-4  text-white p-3 rounded" style={{
        color: "rgb(21, 105, 157)",
        marginBottom: "10px"
      }}>
        New SAM Admissions per Country (OTP and IPF)
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="">
          <table className="w-full border-collapse bg-white shadow-lg" style={{
            fontSize: "12px",
            width:"350px",
            height: "90px"
          }}>
            <thead>
              <tr className="bg-blue-600 text-white">
                <th
                  className="p-3 border border-gray-300 text-left"
                  style={{
                    backgroundColor: "rgb(128, 128, 128)",
                  }}
                >
                  Countries
                </th>
                <th className="p-3 border border-gray-300 text-center" style={{
                  backgroundColor: "rgb(5, 22, 72)"
                }}>
                  OTP % New SAM
                </th>
                <th className="p-3 border border-gray-300 text-center" style={{
                  backgroundColor: "rgb(5, 22, 72)"
                }}>
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
                  <td className="p-3 border border-gray-300 font-medium" style={{
                    backgroundColor: "rgb(253, 253, 253)"
                  }}>
                    {row.country}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.otpNewSam}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.otpReturnSam}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white font-bold">
                <td
                  className="p-3 border border-gray-300"
                  style={{
                    backgroundColor: "rgb(128, 128, 128)",
                  }}
                >
                  TOTAL
                </td>
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
