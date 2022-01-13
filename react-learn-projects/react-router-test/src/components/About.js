import React from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header';

function About() {

    const param=useParams();

    return (
        <div>
            <h1>About Page {param.id}</h1>
        </div>
    )
}

export default About
