import React, { Component } from 'react'

export class Title extends Component {
     render(){
         return(
             <span ClassName="Title">{ this.props.children }</span>
         )
     }
}

export default Title