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
import RefUse from './RefUse';
import FwdRefComp from './FwdRefComp';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import HOC from './HOC';
import Routing from './Routing';
import PageNotFound from './PageNotFound';
import DynamicRouting from './DynamicRouting';
import GetAPI from './GetAPI';
import PostAPI from './PostAPI';
import PreFilled from './PreFilled';
import PreveiousState from './PreveiousState';
import StatewithObject from './StatewithObject';
import { CommonContext } from './components/CommonContext';
import ContextApi from './ContextApi';


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
            <PureComponentM></PureComponentM>
<MemoHook></MemoHook>
<RefUse></RefUse>
<FwdRefComp></FwdRefComp>
<HOC></HOC>
<Routing></Routing>
<PageNotFound></PageNotFound>
<DynamicRouting></DynamicRouting>

<GetAPI></GetAPI>
<PostAPI></PostAPI>
 <PreFilled></PreFilled>
 <PreveiousState></PreveiousState>
 <StatewithObject></StatewithObject>
 <ContextApi></ContextApi>
      */
      }
   

{/*<button onClick={()=>{setState("Kazim1")}}>Update Method</button>
 <Hooks counter={counter}></Hooks>
      <button onClick={()=>{setState(counter+1)}}>Update Method</button>
*/}


<ContextApi></ContextApi>

    
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
