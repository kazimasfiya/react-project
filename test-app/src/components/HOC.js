import React, { Component } from 'react'

const subjects=(STUDENT)=>{
    class Subject extends Component {
        render() {
            return (
                <div>
                    <STUDENT hocsub="JAVA"></STUDENT>
                </div>
            )
        }
    }
    return Subject
}


export default subjects
