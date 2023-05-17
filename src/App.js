import { Route, Routes } from "react-router";
import "./App.css";
import logo from "./logo.png";
import { Navbar } from "./components/Navigation/Navbar";
import { Home } from "./pages/HomePage/Home";
import { Footer } from "./components/Footer/Footer";
import { ProductList } from "./pages/ProductListPage/ProductList";
// import {Home} from "./pages/"




function App() {
  return (
    <div className="App">
     <Navbar/>
 <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route path="/store" element={<ProductList/>}/>
 </Routes>
 {/* <Footer/> */}
    </div>
  );
}

export default App;
