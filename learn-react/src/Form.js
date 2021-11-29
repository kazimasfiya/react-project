import React,{useState} from 'react'

function Form() {

    
const [name, setName] = useState("");
    
const [comic, setComic] = useState("");
    
const [terms, setTerms] = useState(false);


    function getFormData(e)
    {

        console.warn(name,comic,terms)
        e.preventDefault();
    }



    return (
        <div>
            <h1>Form Handling</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} /><br /><br />
                <select onChange={(e)=>{setComic(e.target.value)}}>
                   <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC Comic</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e)=>{setTerms(e.target.checked)}} /><span>Accept terms and condition</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            <br /><br />
            NAme:{name}<br />
            Options:{comic} <br />
            Checked:{terms}
        </div>
    )
}

export default Form
