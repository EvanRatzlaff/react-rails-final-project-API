import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainCard from '../components/MainCard'
import { getCars } from '../actions';

export class OtherCars extends Component {
    componentDidMount() {
        console.log("a")
        this.props.getCars()
        console.log("b")
    }

    render() {
        const cars = this.props.cars.map((car, i) => <MainCard key={i} car={car} /> )
        return(
            <div>
                <h2>Other Dream Cars</h2>
                <ul className="collection">
                    {cars}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state.CarsReducer.cars
    }
}

export default connect(mapStateToProps, {getCars})(OtherCars)