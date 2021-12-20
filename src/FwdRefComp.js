import React,{useRef } from 'react'
import UserChild from './UserChild'

function FwdRefComp() {

    const ref = useRef(null);

    function handleInput()
    {
        ref.current.value=1000
        ref.current.focus();
        ref.current.style.color="red"
    }

    return (
        <div>
            <h1>Forward Ref</h1>
            <UserChild ref={ref}></UserChild>
            <button onClick={handleInput}>Click Me PArent</button>
        </div>
    )
}

export default FwdRefComp
