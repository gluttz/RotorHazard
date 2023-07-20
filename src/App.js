import * as React from "react";
import RouteSwitch from "./RouteSwitch";
import AppProvider from "./AppProvider";
import AppBar from "./modules/components/AppBar";

import CssBaseline from "@mui/material/CssBaseline";

//The entry point of our actual content
//anything outside RouteSwitch will be rendered on App load and be persistent on every page
//anything inside RouteSwitch will be rendered based on the current URL

export default function App() {
    return (
        <>
            <CssBaseline />
            <AppProvider>
                <AppBar />
                <RouteSwitch />
                {
                    //TODO: Add footer
                }
            </AppProvider>
        </>
    );
}
