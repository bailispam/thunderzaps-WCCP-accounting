import { useState } from "react";

export const App = () => {
    const [message, setMessage] = useState();
    
    return (<div>
    <h1> Test </h1>
        <button> donate $10 </button>
        <p> {message} </p>
    </div>);
};
