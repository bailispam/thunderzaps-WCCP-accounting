import { useState } from "react";

import { Home } from "./Home";

const style = {
    main: {
        width: "100vw",
        height: "100vh",
        margin: 0,

        display: "flex",
        flexDirection: "row",
    },

    sidebar: {
        width: "20vw",
        height: "100vh",
        margin: 0,
        backgroundColor: "#60a060",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1em",
        paddingBottom: "1em",
        gap: "50px",
    },

    content: {
        width: "80vw",
        height: "100vh",
    },

    tabButton: {
        width: "100%",
        border: "none",
        backgroundColor: "#b0f0b0",
        padding: "20px",
    },
};

export const App = () => {
    const [tab, setTab] = useState("home");

    return (
        <div style={style.main}>
            <div style={style.sidebar}>
                <p> Select Tab </p>
                <button style={style.tabButton}> Home </button>
            </div>
            <div style={style.content}>{tab === "home" && <Home />}</div>
        </div>
    );
};
