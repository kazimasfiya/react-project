import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
    const location=useLocation();
    console.log(location)
    return (
        <div>
            <h1>Contact Page { location.state!=null ? location.state.name : null}</h1>
        </div>
    )
}

export default Contact
