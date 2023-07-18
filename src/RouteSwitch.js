import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function RouteSwitch() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                {/* <Route path="/diy" element={"<DIY />"}></Route> */}
            </Routes>
        </>
    );
}
