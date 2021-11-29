import React, { Component,useState } from 'react'

function Example()
{

    const [name,setName]=useState("Rahman");
    function updateData()
    {
      setName("Kazim")
    }

    return(
        <div>
            <h1>All Examples</h1>
            <PropsFunc name={name} detail={{email:"mm.kazim@abydostechnologies.com",mobile:8285532559}}></PropsFunc>
            <button onClick={updateData}>Update DAta</button>
            <PropsClass ></PropsClass>
        </div>
    )
}

export default Example;


function PropsFunc(props)
{

   
    
   

    console.warn(props)
    return(
        <div>
            <h3>Example of props in functional component</h3>
            <h3>Hello, {props.name}</h3>
            <h4>Email: {props.detail.email}</h4>
            <h4>Mobile: {props.detail.mobile}</h4>
            
        </div>
    )
}


class PropsClass extends Component
{
    state={
        name:"Mahtab",
        class:"sdlsdfsdf"
  }


  updateStudent=()=>{

    this.setState({
        name:"KAzim",
        class:"M.tech."
    })

  }

   render()
   {
       return(
           <div>
               <Student name={this.state.name} class={this.state.class}></Student>
               <button onClick={this.updateStudent}>Change student</button>
           </div>
       )
   }
}





class Student extends Component {
  

    render() {
        console.warn(this.props)
        return (
            <div>
                <h3>Example of props by using class component</h3>
                <h4>{this.props.name}</h4>
                
            </div>
        )
    }
}





