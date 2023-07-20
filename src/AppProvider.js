import * as React from "react";
import { useState, createContext, useContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "./theme";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
//any component wrapped in <AppContext.Provider> will have access to the context value via the useContext hook
//no context currently in use, leaving Provider in place for future easy implementation

export const AppContext = createContext();
//TODO: remove this context, already replaced with MUI theme
export default function AppProvider({ children }) {
    const [mode, setMode] = React.useState("light");
    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );
    const [currentPage, setCurrentPage] = useState("home");

    const contextValue = useMemo(
        () => ({ currentPage, setCurrentPage, mode, setMode }),
        [currentPage, setCurrentPage, mode, setMode]
    );
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("App components must be within AppProvider");
    }
    return context;
}
