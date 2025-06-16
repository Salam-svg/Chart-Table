import React from "react";
import UnicefLogo from "../assets/image/adriot-logo.webp";

const Navbar = () => {
  return (
    <div className="flex text-white" style={{
      width: "98%",
      margin: "auto",
      marginTop: "20px"
    }}>
      <div style={{
        backgroundColor: "rgb(0, 112, 193)",
        width: "90%",
        paddingLeft: "5px"
      }}>
        <p className="font-bold">SAHEL -UNICEF IMAM MONTHLY DASHBOARD 2017</p>
        <p style={{
          fontStyle: "italic"
        }}>Report covering January to August 2017</p>
      </div>
      <img className="w-40 h-10 object-cover" src={UnicefLogo} alt="" />
    </div>
  );
};

export default Navbar;
