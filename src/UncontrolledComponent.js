import React,{useRef} from 'react'
import { Button } from 'react-bootstrap'

function UncontrolledComponent() {

    const inputRef1 = useRef("");
    const inputRef2 = useRef("");
   

function submitForm(e)
{
    e.preventDefault();
    console.warn("Input 1",inputRef1.current.value)
    console.warn("Input 2",inputRef2.current.value)
    var input3=document.getElementById("input3").value;
    console.warn("Input 3",input3)
}

    return (
        <div>
            <h1>Uncontrolled Component</h1>
          
           <form onSubmit={submitForm}>
           <input type="text" ref={inputRef1} placeholder='Enter value'  /><br></br><br></br>
            <input type="text" ref={inputRef2} placeholder='Enter value'  /><br></br><br></br>
            <input id="input3" type="text"   /><br></br><br></br>
           <Button type="submit">Submit</Button>
           </form>
        </div>
    )
}

export default UncontrolledComponent
