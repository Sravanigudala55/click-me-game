import React, { Component } from 'react'

 class Image1 extends Component {
    constructor()
    {
        super()
        this.state={
            score:0,
            name:"shinchan"
        }
    }
    componentDidMount(){
        document.title=`${this.state.name}`
    }
    
  render() {
    return (

      <div>
        <button onClick={()=>{
            this.setState({score:this.state.score+1})
        }}><img src="https://rukminim2.flixcart.com/image/416/416/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=70" alt="" width="200px" height="200px"/></button>
       <div><h1>Score:{this.state.score}</h1></div> 
       
        </div>
    )
  }
}

export default Image1