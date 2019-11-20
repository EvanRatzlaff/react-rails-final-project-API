import React, { Component } from 'react'

class LikeButton extends Component{
    constructor(){
        super()
        this.state = {
            Like: 0
        }
    }

    onClick = (event) => {
        event.preventDefault()
        this.setState({
            Like: this.state.Like + 1
        })
    
    }

    render(){

        return(
        <button onClick={this.onClick}>Like(s):{this.state.Like}</button>
        )
    }

}
export default LikeButton