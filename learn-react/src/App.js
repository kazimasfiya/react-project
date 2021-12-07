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
import Hooks from './Hooks';
import Style from './Style';
import Bootstrap from './Bootstrap';
import ArrayList from './ArrayList';
import BootstrapArrayList from './BootstrapArrayList';
import NestedListArray from './NestedListArray';
import Reuse from './Reuse';
import LiftingStateUp from './LiftingStateUp';
import PureComponentM from './PureComponentM';
import MemoHook from './MemoHook';


function App() {

const [counter,setState]=useState(0);

  return (
    <div className="App">
      <h1>Hello World from App.js/MAin File</h1>
      <h3>Below are it's component</h3>
      
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
            <LifeCycleByClass ></LifeCycleByClass>
            <Style></Style>
            <Bootstrap></Bootstrap>
            <ArrayList></ArrayList>
            <BootstrapArrayList></BootstrapArrayList>
            <NestedListArray></NestedListArray>
            <Reuse></Reuse>
            <LiftingStateUp></LiftingStateUp>
      */
      }
   

{/*<button onClick={()=>{setState("Kazim1")}}>Update Method</button>
 <Hooks counter={counter}></Hooks>
      <button onClick={()=>{setState(counter+1)}}>Update Method</button>
*/}

<PureComponentM></PureComponentM>
<MemoHook></MemoHook>


     
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
