import { createContext, useState } from "react";

export const WindowContext = createContext();

export default function WindowProvider({ children }) {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    return (
        <WindowContext.Provider value={{ dimensions, setDimensions }}>
            {children}
        </WindowContext.Provider>
    );
}