
import React ,{Component} from "react";


class Right extends Component {
    render(){
        return(
            <div className='classComponent'>
              <h1>This is created using Class Component</h1>
              <p>This is done using external CSS</p>
              <p style={{color:"blue"}}>This is done using internal CSS</p>
            </div>
        )
    }
} 
export default Right