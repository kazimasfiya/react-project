import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Routing() {
    return (
        <Router>
            <div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    

                </ul>
            </nav>
            
            </div>

            <Switch>
                <Route path='/about'>
                    <About></About>
                </Route>
                <Route path='/users'>
                    <Users></Users>
                </Route>
                <Route path='/'>
                    <Home></Home>
                </Route>
            </Switch>


        </Router>
        
    )
}

export default Routing


function Home()
{
    return(
        <h1>Welcome to Home</h1>
    )
}

function About()
{
    return(
        <h1>Welcome to About</h1>
    )
}


function Users()
{
    return(
        <h1>Welcome to Users</h1>
    )
}
