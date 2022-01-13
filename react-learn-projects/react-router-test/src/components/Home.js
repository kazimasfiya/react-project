import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';


function Home() {
    const navigate=useNavigate();
    return (
        <div>
        
            <h1>Home Page</h1>
            <button onClick={()=>{navigate("/contact",{state:{"name":"Rect JS"}})}}>Go to contact</button>
        </div>
    )
}

export default Home
