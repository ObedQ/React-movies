import { useState } from "react";
import Simple from "./Simple";
import Events from "./Events";

export default function ConditionalsIf (){
    const [selectedRate, setSelectRate] = useState(1)

    function displayResult(){
        if (selectedRate === 1){
            return <span>Noooo!</span>
        } else if (selectedRate === 2) {
            return (
                <>
                <span>Please tell us how to get better:</span>
                <input type="text" />
                </>
            )
        } else if (selectedRate === 3) {
           return <>
                <Simple/>
            </>
        } else {
            return <span>Thanks!</span>
        }
    }

    return (
        <>
        <h1>Conditionals If Example</h1>
        <div>Rate this website</div>
        <select name="" id="" onChange={(e) => {
            console.log(e.currentTarget.value)
            setSelectRate(parseInt(e.currentTarget.value, 10));
        }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>

        <div>
            {displayResult()}
        </div>
        </>
    );
}