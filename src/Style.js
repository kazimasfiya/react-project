import React from 'react';
import './style.css'
import style from './custom.module.css'

function Style() {
    return (
        <div>
            <h1>Styling Example</h1>
            <h2 className="primary">Style Type 1 in React Js</h2>
            <h2 style={{color:'green',backgroundColor:"black"}}>Style Type 2 in React Js</h2>
            <h2 className={style.success}>Style Type 3 Modular in React Js</h2>
            
        </div>
    )
}

export default Style
