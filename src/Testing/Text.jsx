import React from "react";
import Table2 from "../page/Table2";
import PieCharte from "../page/PieChart";
import Length from "../page/Length";
import Notice from "../page/Notice";
import Admissions from "../page/Admissions";
import Country from "../page/Country";
import LastChar from "../page/LastChar";


const Text = () => {
  return (
    <div style={{
      paddingBottom: "50px"
    }}>
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
        <div className="flex gap-0">
          <Country/>
          <LastChar/>
        </div>
    </div>
  );
};

export default Text;
