import React, { useState } from 'react'

function Profile() {

    const [login, setstate] = useState(true);

    //not reccomended
   /* if (login) {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                <h2>Profile Component</h2>
                <h3>Welcome Mahtab</h3>

            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                <h2>Profile Component</h2>
                <h3>Welcome Guest</h3>

            </div>
        )
    }*/

    // reccomended method
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <h2>Profile Component</h2>
            {login?<h3>Welcome Mahtab</h3>:<h3>Welcome Guest</h3>}

        </div>
    )

}

export default Profile






