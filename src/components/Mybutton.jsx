import {useState} from 'react'
export default function MyButton({count, setCount}){
    
    function handleMe() {
        setCount (count+1);
    }
    return (
        <button onClick={handleMe}>
            "Click me  {count} "
        </button>
    )
}