import { Routes, Route } from "react-router-dom";
import Home from "./modules/pages/Home";
import Products from "./modules/pages/Products";
import About from "./modules/pages/About";
import Contribute from "./modules/pages/Contribute";

//front-end routing for the app
//Routes are nestable, use react-router-dom's <Link to="/"> to navigate between routes

export default function RouteSwitch() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/GUI" element={<Contribute />} />
            </Routes>
        </>
    );
}
