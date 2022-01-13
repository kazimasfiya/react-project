import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import User from './user/User';


function App() {
  return (
    <div className="App">
      
        <Router>
           <Link to='/user'>User</Link> |  <Link to='/motion'>Motion</Link> | <Link to='/digital'>Digital</Link>

            <Routes>
              <Route path="/user" element={<User />} />
            </Routes>
            

        </Router>
    </div>
  );
}

export default App;
