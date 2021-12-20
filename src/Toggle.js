import React,{useState} from 'react'

export default function Toggle() {
    const [state, setstate] = useState(true)
    return (
        <div>

            { state?<h1>Toggle Example</h1>:""}
            <button onClick={()=>{setstate(false)}}>Hide</button>
            <button  onClick={()=>{setstate(true)}}>Show</button>
            <button onClick={()=>{setstate(!state)}}>Toggle</button>
        </div>
    )
}
