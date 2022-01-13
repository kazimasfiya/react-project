import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from './Context';
import ModalPopup from './ModalPopup';

function Frontend() {

    const [showModal, setModal] = useState(false)
       const [isOpen, setIsOpen] = useState(false);

    function openModal(val)
    {
       
        setModal(val)
    }

    

    const contextValue={
        data:showModal,
        handlecheck: openModal
    }

    return (
        <div>
          <Provider value={contextValue}>
          <Header />
            <Outlet />
            <ModalPopup data={showModal} />
            <Footer />
          </Provider>
            
        </div>
    )
}

export default Frontend
