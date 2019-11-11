import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCar } from '../actions'

class AddCar extends Component {
    state = {
        car: {
            name: '',
            year: '',
            make: '',
            mileage: ''
        }, 
        test: false
      };
  
      onSubmit = event => {
        event.preventDefault()
        this.props.addCar(this.state, this.props.history)
      }
      
      onChange = (event) => {
        this.setState({
          car: event.target.value
        })
      };
      
      render() {
        return(
          <div>
          <form onSubmit={event => this.onSubmit(event)}>
          <p>
            <label>  </label>
            <input type="text" onChange= {this.onChange()} value={this.state.car} />
          </p>
          <input type="submit" />
          </form>
        </div>
      )
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      addTodo: formData => dispatch({
        type: 'ADD_CAR', payload:formData})
    }
  }
  
  export default connect(null, mapDispatchToProps)(AddCar)