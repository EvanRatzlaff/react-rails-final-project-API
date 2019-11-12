import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCar } from '../actions'

export class CarInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
                make: '',
                year:'',
                color:'',
                attraction_level:''
            
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addCar(this.state)
        this.props.history.push(`/cars`)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <input type="text" name="make" id="make" value={this.state.make} onChange={this.handleChange} />
                    <label htmlFor="make">Type of Vehicle</label>
                    </div>
                <div className="input-field">
                    <input type="text" name="year" id="year" value={this.state.year} onChange={this.handleChange} />
                    <label htmlFor="year">Year</label>
                    </div>

                <div className="input-field">
                    <input type="text" name="color" id="color" value={this.state.color} onChange={this.handleChange} />
                    <label htmlFor="color">Color choice</label>
                    </div>

                    <div className="input-field">
                    <input type="number" name="attraction_level" id="attractionLevel" value={this.state.attraction_level} onChange={this.handleChange} />
                    <label htmlFor="attractionLevel">Coolness Level</label>
                    </div>
                    <input type="submit" value="Create Your Car!" className="button" />
            </form>
        )
    }
};

const mapDispatchtoProps = dispatch => {
    return {
        addCar: car => dispatch(addCar(car))
    }
}

export default connect(null,mapDispatchtoProps)(CarInfo)