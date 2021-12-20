import React,{useState} from 'react'

function FormValidation() {

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, errorMsg] = useState(false);

   


    /*function loginValidation(e)
    {
        e.preventDefault();
        alert("HEllo")
        var username=document.getElementById("user").value;
        var pwd=document.getElementById("pass").value;

        if(username=="" || pwd=="")
        {
            alert("Username and Password should not blank");
            erroStatus=true
            errorMsg("Username and Password should not blank")
            return false;
        }
        if(username.length<3)
        {
            alert("Username length should not less than 3");
            erroStatus=true
            errorMsg("Username length should not less than 3");
            return false;
        }
        if(pwd.length<3)
        {
            alert("Pass length should not less than 3");
            erroStatus=true;
            errorMsg("Pass length should not less than 3")
            return false;
        }



    }*/

    function loginValidation(e)
    {

        if(user.length<3 || pass.length<3)
        {
            errorMsg("Enter correct value");
        }
        else{
            errorMsg("All good");
        }

        e.preventDefault();
       

    }

    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item);
    }

    function passHandler(e)
    {
        let item = e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPass(item);
    }

    return (
        <div>
            <h1>Form Validation</h1>
            <form onSubmit={loginValidation}>
               <p>{error}</p>
                <input type="text" id="user" placeholder="Enter Username" onChange={userHandler} /> {userErr?<span>Username length should not less than 3</span>:""}<br /><br />
                <input type="text" id="pass" placeholder="Enter Password" onChange={passHandler} /> {passErr?<span>Password length should not less than 3</span>:""}<br /><br />
                <button type="submit">Submit</button>
            </form>
           
        </div>
    )
}

export default FormValidation
