import React from 'react';
import { useState } from "react";


// component being exported
export const FundAccounting = () => {
    // initial list template will include the strings to the data type, this is irrelevant to the
    // information below the first row
    const [row, setRow] = React.useState();

    const addRow = () => {
        row += []
    }

    
    return (
        <div id="cell_container">
            
            <button onClick() => {addRow()}>Add row</button>
        </div>
    );
}
export default FundAccounting;
