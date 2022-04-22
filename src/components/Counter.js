import React from "react";
import '../style-sheets/Counter.css'

export function Counter({clickNums}){
    return(
        <div className="counter">
            {clickNums}
        </div>
    )
}