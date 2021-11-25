import React from 'react'
import {useState,useEffect} from 'react'

function FunctionMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logmousemove=e=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    

    useEffect(() => {
        console.log("useEffect Call");
        window.addEventListener('mousemove',logmousemove)
    }, [])


    return (
        <div>
            <p>Using Function</p>
                <p>X - {x} Y - {y}</p>
        </div>
    )
}

export default FunctionMouse
