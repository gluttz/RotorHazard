import { useState, createContext, useContext, useMemo } from "react";

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
//any component wrapped in <AppContext.Provider> will have access to the context value via the useContext hook
//no context currently in use, leaving Provider in place for future easy implementation

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
