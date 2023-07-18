import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contribute from "./pages/Contribute";

export default function RouteSwitch() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Contribute" element={<Contribute />} />
            </Routes>
        </>
    );
}
