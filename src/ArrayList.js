import React from 'react'
import style from './custom.module.css'

function ArrayList() {

    const employee = ["Mahtab", "Sameer", "Nahid", "Pooja"];

    const students = [
        { name: "MAhtab", rollno: 101, class: 10 },
        { name: "SAmeer", rollno: 102, class: 10 },
        { name: "NAhid", rollno: 103, class: 10 },
        { name: "Pooja", rollno: 104, class: 10 }
    ]

    //map looping
    employee.map((item) => {
        console.warn("MAp " + item)
    })



    //for loop

    for (var i = 0; i < employee.length; i++) {
        console.warn("For loop " + employee[i])
    }

    return (
        <div>
            <h1>Handle Array with List</h1>

            {
                employee.map((data) => {
                    return <h3>{data}</h3>
                })
            }

       <table className={style.table} border="1">
       <th>NAme</th>
       <th>Roll</th>
       <th>Class</th>
        {
                    students.map((data) => {
                        return (
                           
                            <tr >
                            <td> {data.name}</td><td> {data.rollno}</td><td>{data.class}</td>   
                        
                            </tr>
                          
                           
                            

                        )
                    })
                }
       </table>
           




        </div>
    )
}

export default ArrayList
