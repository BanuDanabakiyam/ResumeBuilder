import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import RegisterPage from "./components/pages/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegisterPage/>}></Route>
        <Route path="/" element={<h1>Home</h1>}/>
      </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
