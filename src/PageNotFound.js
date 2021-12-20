import React from 'react';
import {Routes,Route, Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div>
            <h1>404 Error Page not found</h1>

            <Link to='/'>Home</Link>
                <br></br>
                <Link to='/about'>About</Link><br></br>
                <Link to='/login'>Login</Link>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
        </div>
    )
}

export default PageNotFound

function Home() {
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
}


function Error404()
{
    return (
        <div>
            <h1 style={{color:'red'}}>PAge Not Found</h1>
        </div>
    )
}
