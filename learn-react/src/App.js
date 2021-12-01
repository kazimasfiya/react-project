//import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import User from './User';
import UserClass from './UserClass';
import TestWork from './TestWork';
import Example from './Example';
import Input from './Input';
import Toggle from './Toggle';
import Form from './Form';
import Profile from './Profile';
import FormValidation from './FormValidation';
import FunctionProps from './FunctionProps';
import LifeCycleByClass from './LifeCycleByClass';
import { useState } from 'react';

function App() {

const [name,setState]=useState("MAhtab");

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/*<Test></Test>
      <UserClass></UserClass>
      <Apple></Apple>
       <User></User>
      <TestWork></TestWork>
       <UserClass></UserClass>
       <Example></Example>
        <Input></Input>
        <Toggle></Toggle>
         <Form></Form>
         <Profile></Profile>
            <FormValidation></FormValidation>
            <FunctionProps ></FunctionProps>
      */
      }
   
<LifeCycleByClass ></LifeCycleByClass>
{/*<button onClick={()=>{setState("Kazim1")}}>Update Method</button>*/}
      
    </div>
  );
}

export default App;

function Test()
{
  return <h1>This is test component in same App.js file</h1>
}

/*class  TestClass extends React.Component
{
  render()
  {
    return <h3>This is test class component in same App.js file</h3>
  }
}*/
