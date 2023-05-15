import { Route, Routes } from "react-router";
import "./App.css";
import logo from "./logo.png";
import { Navbar } from "./components/Navigation/Navbar";
import { Home } from "./pages/HomePage/Home";
// import {Home} from "./pages/"




function App() {
  return (
    <div className="App">
     <Navbar/>
 <Routes>
  <Route  path="/" element={<Home/>}/>
 </Routes>
    </div>
  );
}

export default App;
