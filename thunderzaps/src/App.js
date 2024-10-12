import { useState } from "react";

import { Home } from "./Home";

const style = {
    main: {
        width: "100vw",
        height: "100vh",
        margin: 0,
        backgroundColor: "#a0ffa0",
    },
};

export const App = () => {
    const [tab, setTab] = useState("home");

    return (
        <div style={style.main}>
            <div>
                <p> Select Tab </p>
            </div>
            <div>{tab === "home" && <Home />}</div>
        </div>
    );
};
