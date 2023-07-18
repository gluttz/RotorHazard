import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function RouteSwitch() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                {/* <Route path="/store" element={"<Store />"}></Route> */}
            </Routes>
        </>
    );
}
