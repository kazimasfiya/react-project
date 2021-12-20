import React, { Component } from 'react'
import { CommonContext } from './components/CommonContext'
import Footer from './components/Footer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import UpdateButton from './components/UpdateButton'


class ContextApi extends Component {
    constructor(props) {
        super(props)


        this.updateColor=(col)=>{
            this.setState(
                {
                    color:col
                }
            )
        }


        this.state = {
            color:"green",
            updateColor:this.updateColor
        }

        
    }




    render() {


        return (
            <div>


                <CommonContext.Provider value={this.state}>
                    <h1>Comtext API</h1>
                    <Header />
                  <MainComponent ></MainComponent>
                  <UpdateButton></UpdateButton>
                  <Footer/>
                </CommonContext.Provider>
            </div>
        )
    }
}

export default ContextApi
