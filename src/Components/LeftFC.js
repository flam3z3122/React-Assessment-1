// username === 'yourName' -> true -> <h1>Welcome</h1>
// username != 'yourName' -> false -> <h1>LogIn</h1>

import React  from 'react'


const Left = () =>{
    return(

        <div className='functionComponent'>
        <h1>This is created using Functional Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:"blue"}}>This is done using internal CSS</p>

        </div>
    )
}

export default Left