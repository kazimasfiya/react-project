import React,{useState} from 'react';


function Input()
{

    const [state, setstate] = useState(null);
    const [print, printData] = useState(false)

    function getData(val)
    {
        console.warn(val.target.value);
        setstate(val.target.value);
        printData(false);
    }

    return (
        <div>
            <h3>Get Input Field Example</h3>
            
            <input type="text" onChange={getData}/>
            <button onClick={()=>{printData(true)}}>Get Value</button>
            {
                print?
                <p>{state}</p>
                :null
            }
          
            
        </div>
    )
}
export default Input;