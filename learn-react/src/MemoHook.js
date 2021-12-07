import React, { useState,useMemo } from 'react'

function MemoHook() {

    const [count, setstate] = useState(0);
    const [item, setitem] = useState(10)

    

    const multiCountMemo=useMemo(function multiCount()
    {
        console.warn("multicount")
        return count*5;
    },[count])

    return (
        <div>
            <h1>Pure Component By useMemo Hook</h1>
            <h3>Count: {count}</h3>
            <h3>Item: {item}</h3>
            <h3>Funct :{multiCountMemo}</h3>
            <button onClick={() => { setstate(count + 1) }}>Update Count</button>
            <button onClick={() => { setitem(item * 2) }}>Update Item</button>
        </div>
    )
}

export default MemoHook
