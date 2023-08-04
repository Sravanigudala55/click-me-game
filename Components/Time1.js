import React, { Component } from 'react'
import Image1 from './Image1'

export class Time1 extends Component {
   
    constructor(){
        super()
        this.state={
            time:15
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    tick = () =>{
        if(this.state.time!==0)
        {
            this.setState({
                time:this.state.time-1
            })
        }
        else{
            alert('time is up');
            console.log("enough")
            
            
            
        }
    }
    

     restart=()=>{
        
        window.location.reload(true)
     }
    

  render() {
    return (
     
      <div>
        <div>you can beat me up to time ends with countdown :{this.state.time}</div>
        <div> <Image1/> </div>
        <button onClick={this.restart}>restart</button>
       
       
        </div>
    )
  
}}


export default Time1