import { useState } from "react";

import { Home } from "./Home";

import { pdfDragAndDrop } from "./pdfDragAndDrop";

// separated to be able to import universally, sharin is carin'
import style from "./style"

export const App = () => {
    const [tab, setTab] = useState("home");

    return (
        <div style={style.main}>
            <div style={style.sidebar}>
                <p> Select Tab </p>
                <button style={style.tabButton}> Home </button>
            </div>
            <div style={style.content}>
                {tab === "home" && <Home />}
            </div>
        </div>
    );
};
