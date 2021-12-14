import React, { Component, createRef, useRef } from 'react'

class RefUse extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputRef=createRef();

    }

    componentDidMount()
    {
       // console.warn(this.inputRef.current.value="1000")
    }

    getVal=()=>
    {
      console.log(this.inputRef.current.value);
      this.inputRef.current.style.color="green";
      this.inputRef.current.style.backgroundColor="Black"
    }
    
    render() {
        return (
            <div>
                <h1>Use of Ref</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.getVal}>Click here!</button>
                <RefFunc></RefFunc>
            </div>
        )
    }
}

export default RefUse




function RefFunc()
{
    const ref = useRef(null);

    function handleInput()
    {
        ref.current.value=1000
        ref.current.focus();
    }
    
    return(
        <div>
            <h1>Ref in Function</h1>
            <input type="text" ref={ref}></input>
            <button onClick={handleInput}>Click Me</button>
        </div>
    )
}

