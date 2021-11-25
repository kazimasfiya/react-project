//import logo from './logo.svg';
import './App.css';
import {Signup} from './component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container mt-3">
      <div className="row">

        <div className="col-md-5">
          <Signup></Signup>
        </div>

      </div>
     
    </div>
  );
}

export default App;
