import React from 'react'
import {Outlet,NavLink, NavNavLink } from 'react-router-dom'
import { Consumer } from './Context';
import ModalPopup from './ModalPopup';


function Header() {
    return (
        <div>
            
            <NavLink style={({isActive})=>{return {color:isActive ?'red':'' } }} to="/">Home</NavLink> |   <NavLink style={({isActive})=>{return {color:isActive ?'red':'' } }} to="/about">About</NavLink>  |   <NavLink to="/contact">Contact</NavLink> |  

            <h1>Header Section</h1>
            <Consumer>
            {
                ({data,handlecheck})=>(
                <button onClick={()=>{handlecheck(true)}}>Display Modal</button>
                )
            }
            
            </Consumer>

         
            
        </div>
    )
}

export default Header
