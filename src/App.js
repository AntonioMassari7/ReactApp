
import "./App.css";
import Prova from "./Components/Prova";
import Mouse from "./Components/Mouse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Fetch from "./Components/Fetch";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/prova" element={<Prova />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
