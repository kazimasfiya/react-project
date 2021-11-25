import React, { Component } from 'react'

import { Consumer } from './Context';
export class C extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <Consumer>{data=><h3>{data.roll}</h3>}</Consumer>
            </div>
        )
    }
}

export default C
