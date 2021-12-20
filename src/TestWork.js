import React,{useState} from "react";


function TestWork()
{

    const [data,changeData]=useState("MAhtab");
    const [count,incrementVal]=useState(0)

    function updateData()
    {
        changeData("Kazim")
    }

    function increment()
    {
        incrementVal(count+1)
    }

    console.log("checkking rendering.....");

    return (
        <div>
             <h1>Test Function Component</h1>

             <h3>Using state</h3>
             <h3>{data}</h3>
             <h3>Count: {count}</h3>
             <button onClick={updateData}>Update Data</button>
             <button onClick={increment}>Counter</button>

             <hr/>

            
       
        </div>
       
    )
}

export default TestWork


