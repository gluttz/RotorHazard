import "./styles/App.css";
import RouteSwitch from "./RouteSwitch";
import AppProvider from "./AppProvider";
import Header from "./components/Header";

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
