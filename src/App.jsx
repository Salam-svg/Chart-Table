import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Navbar from "./components/Navbar";
import BreadCrumble from "./components/BreadCrumble";
import Title from "./page/Title";
import PieCharte from "./page/PieChart";
import Length from "./page/Length";
import Notice from "./page/Notice";
import Table2 from "./page/Table2";
import Text from "./Testing/Text";
import Admissions from "./page/Admissions";
import Country from "./page/Country";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <BreadCrumble/>
        <Title/>
        <Routes>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/Pie" element={<PieCharte />} />
          <Route path="/Chart" element={<Length />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Table2" element={<Table2 />} />
          <Route path="/" element={< Text />}/>
          <Route path="/Admin" element={< Admissions />}/>
          <Route path="/Coun" element={< Country />}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
