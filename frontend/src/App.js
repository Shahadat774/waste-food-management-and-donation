import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Signin from "./Signin";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
