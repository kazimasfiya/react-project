import React,{useState} from 'react'

function ControlledComponent() {

    const [val, setVal] = useState(0)
    return (
        <div>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}  />
            <p>Val: {val}</p>
        </div>
    )
}

export default ControlledComponent
