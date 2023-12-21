import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import RegisterPage from "./components/pages/Register";
import LoginPage from "./components/pages/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}></Route>
        <Route path="/" element={<h1>Home</h1>}/>
      </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
