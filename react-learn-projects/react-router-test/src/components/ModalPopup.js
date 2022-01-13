import React,{useState,useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import { Consumer } from './Context';
function ModalPopup(props) {

   

   


   

    return (
        <div>
         <Consumer>
            {
                ({handlecheck})=>(
             <Modal show={props.data} onHide={()=>{handlecheck(false)}}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={()=>{handlecheck(false)}}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
                )
            }
            </Consumer>
        </div>
    )
}

export default ModalPopup
