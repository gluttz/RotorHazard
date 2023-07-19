import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
    Link as RouterLink,
    Route,
    Routes,
    MemoryRouter,
    useLocation,
} from "react-router-dom";
import RouteSwitch from "./RouteSwitch";
import AppProvider from "./AppProvider";
import Header from "./modules/components/Header";

//The entry point of our actual content
//anything outside RouteSwitch will be rendered on every page
//anything inside RouteSwitch will be rendered based on the current URL

export default function App() {
    return (
        <>
            <AppProvider>
                <Header />
                <RouteSwitch />
            </AppProvider>
        </>
    );
}
