import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from './Header';

function Protected(props) {

    const navigate = useNavigate();
useEffect(() => {
    if(!localStorage.getItem("user-info"))
    {
         navigate("/login")
    }
}, [])


    return (
        <div>
           <props.Cmp></props.Cmp>
        </div>
    )
}

export default Protected
