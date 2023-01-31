import * as React from "react";
import {createRoot} from "react-dom/client";
import {Header} from "../shared/Header";

window.addEventListener('load', () => {
    createRoot(document.getElementById('react-root')).render(<Header />);
});

