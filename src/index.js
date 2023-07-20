import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import "./styles/reset.css";

//Imports are most performant when made over multiple lines with the direct path given

//StrictMode is a tool for highlighting potential problems in an application.
// Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

//A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

//<ThemeProvider> takes a theme property. It makes the theme available down the React tree thanks to React context.

//The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon.

const domNode = document.getElementById("root");
domNode.style.cssText +=
    "position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1000;";
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in the app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
