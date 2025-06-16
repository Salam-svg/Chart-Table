import React from 'react'

const Admissions = () => {
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
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
      sep: "-",
      oct: "-",
      nov: "-",
      dec: "-",
      Total: "123,764"
    },
  ];

  return (
         <div className="mb-8" style={{ 
            fontSize: "8px"
         }}>
        <h3 className="text-xl font-bold mb-4 p-3 rounded" style={{ 
            color: "rgb(0, 111, 191)",
            width: "98%",
            margin: "auto"
        }}>
          2017 - New SAM Admissions per country per month
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg" style={{
            width: "98%",
            margin: "auto"
          }}>
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border border-gray-300 text-left" style={{
                    backgroundColor: "rgb(128, 128, 128)"
                }}>
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
                <th className="p-3 border border-gray-300 text-center">Total</th>

              </tr>
            </thead>
            <tbody>
              {monthlyAdmissions.map((row, index) => (
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
                    {row.jan}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.feb}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.mar}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.apr}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.may}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.jun}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.jul}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.aug}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.sep}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.oct}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.nov}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.dec}
                  </td>
                  <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(187, 223, 254)"
                  }}>
                    {row.Total  }
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-600 text-white font-bold">
                <td className="p-3 border border-gray-300" style={{
                    backgroundColor: "rgb(128, 128, 128)"
                }}>TOTAL</td>
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
                <td className="p-3 border border-gray-300 text-center" style={{
                    backgroundColor: "rgb(109, 173, 77)"
                }}>417,689</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Admissions