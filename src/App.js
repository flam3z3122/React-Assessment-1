
import './App.css';
import './Components/main.css'
import React,{ Component } from 'react';
import Left from './Components/LeftFC';
import Right from './Components/RightCC';

class App extends Component {
  state ={
    isFuntional : false,
    isClass : false
  }
  render(){
    return (
      <div className="App">
          <div>
          <h1 className='heading'>Styling using Functonal and Class Component</h1>
          </div>

          <div className='btn'>
          <button className='leftbtn' onClick={()=>this.setState({ isFuntional:!this.state.isFuntional})}> To see styling in function component </button>
          <button className="rightbtn" onClick={()=>this.setState({ isClass:!this.state.isClass}) }>To see styling in class component</button>
          </div>
        
          {
            this.state.isClass
            ?
            <Right/>
            :
            null
          }
          {
            this.state.isFuntional
            ?
            
            <Left/>
            :
            null
          }
          </div>
    )
  }

}

export default App;
