import React, { Component } from 'react';

import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:''
        }
        console.warn("LifeCycleA Constructor")
    }

    static getDerivedStateFromProps(props,state)
{
    console.warn("LifeCycleA getDerivedStateFromProps");
    return null;
}

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            this.setState({
                posts:response.data
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                error:'URL Error'
            });
        })
    }
    
    render() {
        console.warn("LifeCycleA render");
        const {posts,error}=this.state;
        return (
            <div>
                <h1>List post data</h1>
                {
                   posts.length ? posts.map(post=><div key={post.id}>{post.title}</div>) : null
                }
                {
                    error ? <div>{error}</div>:null
                }
            </div>
        )
    }
}

export default PostList
