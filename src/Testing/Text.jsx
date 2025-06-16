import React from "react";
import Table2 from "../page/Table2";
import PieCharte from "../page/PieChart";
import Length from "../page/Length";
import Notice from "../page/Notice";
import Admissions from "../page/Admissions";


const Text = () => {
  return (
    <div>
      <div style={{
        display: "flex",
        gap: "none"
      }}>
        <Table2 />
        <PieCharte/>
        <Length/>
      </div>
        <Notice/>
        <Admissions/>
    </div>
  );
};

export default Text;
