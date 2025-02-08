import React from "react";
import NavBar1 from "./Components/NavBar1";
import NavBar2 from "./Components/NavBar2";

import Cardy from "./Components/Card";

import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import Trust from "./Components/Link/Trust";
import Management from "./Components/Link/Management";
import Director from "./Components/Link/Director";
import Objective from "./Components/Link/Objective";
import Prograams from "./Components/Link/Prograams";
import Faculty from "./Components/Link/Faculty";
import Studentform from "./Components/Link/Studentform";
import Contactus from "./Components/Link/Contactus";
import Homee from "./Components/Home/Homee";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar1 />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/management" element={<Management />} />
        <Route path="/director" element={<Director />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/program" element={<Prograams />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/form" element={<Studentform />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/objective" element={<Objective />} />
      </Routes>

      <Footer2 />
    </div>
  );
}

export default App;
