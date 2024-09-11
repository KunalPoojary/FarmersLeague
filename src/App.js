import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";import Navbar from "./components/navbar";
import Home from "./pages/home";
import Productpage from "./pages/productpage";
import ViewProduct from "./components/viewproduct";

function App() {
  return (
    // <BrowserRouter>
    // <Navbar />
    // <Routes>
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/product" element={<Productpage />}/>
    // </Routes>
    // </BrowserRouter>
    <ViewProduct />
  );
}

export default App;
