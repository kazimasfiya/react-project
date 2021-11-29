import logo from './logo.svg';
import './App.css';
import Header from './Header';
import User from './User';
import UserClass from './UserClass';
import TestWork from './TestWork';

function App() {



  return (
    <div className="App">
      <h1>Hello World</h1>
      {/*<Test></Test>
      <UserClass></UserClass>
      <Apple></Apple>*/
      }
      <User></User>
      <TestWork></TestWork>
      
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
