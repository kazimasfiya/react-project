import React, { Component } from 'react';

import axios from 'axios';

export class PostForm extends Component {

   constructor(props)
    {
        super(props);

        this.state={
            userid:'',
            title:'',
            body:'',
        }
    }

    changeHandler=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        });

       // console.log(event.target.name+" : "+event.target.value)
       
    }

    handleSubmit=(e)=>{

        e.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response =>{
           
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
           
        })

        
        
    }


    render() {

        const {userid, title, body}=this.state;
        return (

           
            <div>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Userid</label>
                    <input type="text" name="userid" value={userid} onChange={this.changeHandler} />
                </div>

                <div>
                    <label>Title</label>
                    <input type="text"  name="title" value={title} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Body</label>
                    <textarea value={body}  name="body" onChange={this.changeHandler}></textarea>
                </div>
                <button >Submit</button>
                
            </form>
                
            </div>
        )
    }
}


export default PostForm
