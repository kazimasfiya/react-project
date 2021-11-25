import React from 'react';
import subjects from './HOC'

export class P extends React.Component {

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
                <h2 onMouseOver={this.marksIncerment}>P Marks {this.state.marks} ,{this.props.hocsub}</h2>
            </div>
        )
    }
}

export default subjects(P)
