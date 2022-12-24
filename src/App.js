import React from "react";
import { Routes, Route } from "react-router-dom";
//components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {


  return (
    <div className="App">
     
      <GlobalStyles/>
      <Routes>
        {/* <Route path="/" element={<Home/>}><Route/>
        <Route path="/game/:id" element={<Home/>}><Route/>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
