import React from "react";

const Notice = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded mb-6" style={{
          width: "740px",
          height: "100px",
          fontSize: "8px",
          marginTop: "-100px",
          marginLeft: "10px"
        }} >
        <p className="text-sm text-gray-700"  style={{
          fontSize: "10px",
          paddingTop: "30px",
          color: "rgb(0, 111, 191)"
        }}>
          After IPF treatment, the burden and target for the has increased to 309,875 from 247,500. The annual caseload has increased to 2,576,360 from <br /> 2,534,643. The flow change the annual SAM burden is end in 2,314,000 from 3,377,200.
        </p>
      </div>
    </div>
  );
};

export default Notice;
