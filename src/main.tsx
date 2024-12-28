import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '/Users/bhushanchowdary/Documents/GitHub/CounterApp/main.css';

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);