import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tag1 from './components/web';  
// import Location from "./location";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tag1 />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
