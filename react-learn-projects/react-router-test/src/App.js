import './App.css';
import {BrowserRouter,Link, Routes, Route, Navigate, } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Error from './components/Error';
import Dashboard from './components/admin/Dashboard';
import Login from './components/admin/Login';
import Frontend from './components/Frontend';
import Backend from './components/admin/Backend';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
      { /*<Route path="/" element={<Home />} />   we will use index route*/  }
      { /*<Route path="/admin" element={<Login />} />   we will use index route*/  }
      { /*<Route path="/admin/dashboard/*" element={<Dashboard />} /> */ }
      { /* <Routes>

       <Route path="/" element={<Header />}>
       
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
       </Route>
       <Route path="/admin" >
      
       <Route index element={<Login />} />
         
          <Route path="dashboard/*" element={<Dashboard />} />
       </Route>
       
       <Route path="/error" element={<Error />} />
       <Route path="*" element={<Navigate to="/error" />} />
      
       </Routes>*/}
      
       <Routes>
       <Route path="/" element={<Frontend />}>
       
       <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/about/:id" element={<About />} />
       <Route path="/contact" element={<Contact />} />

      
       
      </Route>

     

       </Routes>

       <Routes>

       <Route path="/admin"  >
      
          <Route index element={<Login />} />

          <Route path="/admin/*" element={<Backend />}>
            <Route path="dashboard/*" element={<Dashboard />} />
          </Route>
        
         

      </Route>
      
     
       
      
       </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
