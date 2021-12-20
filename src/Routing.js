import React from 'react'
 import { Routes,Route} from 'react-router-dom';
import Nav from './Nav'
import Home from './Home';
import About from './About';

function Routing() {
    return (
        <div>
            {/*<h1>Routing Example With Components in Same file</h1>
            <Router>
                <Link to='/home'>Home</Link>
                <br></br>
                <Link to='/about'>About</Link>

                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>

            </Router>*/}

            <h1>Routing Example With Components in Different File file</h1>

            
            <Nav></Nav>

            <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            

        </div>
    )
}

export default Routing


/*function Home() {
    return (
        <div>
            <h1>This is Home Page</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>This is About Page</h1>
        </div>
    )
}*/
