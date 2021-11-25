import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             productID:'',
             qty:0
        }
    }

    addToCart=(pid)=>{
                
        this.setState({
            productID:pid,
            qty:this.state.qty+1
        });
    }
    

    render() {
        return (
            <div>

               <button onClick={()=>{this.addToCart(1)}}>Add to Cart</button>
               <Cart productID={this.state.productID} qty={this.state.qty}></Cart> 
            </div>
        )
    }
}

export default Product;


class Cart extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             qty:this.props.qty
        }
    }

    componentDidMount()
    {
        console.log("Execute componentDidMount after render");
    }

    componentDidUpdate(prevProps,prevStates)
    {
        console.log("Component Updated");
    }
    
    /*updateQty=()=>{

        this.setState({
            qty:this.state.qty+1
        });

    }*/

    static getDerivedStateFromProps(props,state)
    {
        if(props.qty!==state.qty)
        {
            return {qty:props.qty}
        }
        return null;
    }
    
    render() {
        return (
            <div>
                <h1>Cart: {this.state.qty}</h1>
                <button onClick={this.updateQty}>Update Quantity</button>
            </div>
        )
    }
}
