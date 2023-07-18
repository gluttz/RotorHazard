import { useState, createContext, useContext, useMemo } from "react";

export const AppContext = createContext();
//TODO: remove this context, already replaced with MUI theme
export default function AppProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const contextValue = useMemo(
        () => ({ isDarkTheme, setIsDarkTheme }),
        [isDarkTheme, setIsDarkTheme]
    );
    return (
        <>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("App components must be within AppProvider");
    }
    return context;
}
