import React from 'react'

export class R extends React.Component {

    state={
        marks:0
    }

    marksIncerment=()=>{
        this.setState({
            marks:this.state.marks+1
        })
    }
    render() {
        return (
            <div>
                <h2 onMouseOver={this.marksIncerment}>R Marks {this.state.marks}</h2>
            </div>
        )
    }
}

export default R
