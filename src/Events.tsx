import { useState } from "react";

export default function Events(){
const [canSee, setCansee] = useState(false);
const [text, setText] = useState('');
    function handleCheckboxChanged(){
        // alert('my value has changed');
        setCansee(!canSee);
    }
    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
        setText(e.currentTarget.value);
    }

    return (
        <>
            <h1>Events Example</h1>
            <div>
                
            <input type="checkbox" onChange={handleCheckboxChanged}/>
            </div>
            <div>
                <button onClick={() => {
                    alert("I have been clicked")
                }}>Click me </button>
            </div>
            <div>
                <input type="text" onKeyUp={(e) =>handleKeyUp(e)} />
            </div>
            {canSee ? <div>You are seeing the secret</div> : 
            <div>You are not allowed to see</div>}
            <div>
                {text}
            </div>
        </>
    );
}