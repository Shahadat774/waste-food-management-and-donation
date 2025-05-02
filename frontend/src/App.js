import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Signin from "./Signin";
import Donate from "./Donate";
import Find from "./Find_food";
import Foodstatus from "./Foodstatus";
import PrivateRoutes from "./Privateroute";
import './App.css';
import { createContext, useState } from "react";
export const mkcon=createContext();

function App() {
  const [access,setaccess]=useState(0);
  return (
    <mkcon.Provider value={[access,setaccess]}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<PrivateRoutes/>}>
          <Route path="/Donate" element={<Donate />} />
          <Route path="/food" element={<Find />} />
          </Route>
          <Route path="/foodstatus" element={<Foodstatus />} />

    </Routes>
  </BrowserRouter>
  </mkcon.Provider>
  );
}

export default App;
