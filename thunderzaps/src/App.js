import { useState } from "react";

const style = {
    home: {
        width: "100vw",
        height: "100vh",
        margin: 0,
        backgroundColor: "#a0ffa0",
    },
};

export const App = () => {
    const [tab, setTab] = useState();

    return (
        <div style={style.home}>
            <div>
                <p> Select Tab </p>
            </div>
            <div></div>
        </div>
    );
};
