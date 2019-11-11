import React, {Component} from 'react'
import { connect } from 'react-redux'
import { renderTips } from '../actions'

export class CarTips extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.renderTips(id)
    }

    

    render(){

            return(
                <div>
            <h3>Here Are Some tips for your vehicle:</h3>
            <h4>Your vehicle is {this.props.car.color} so be sure to wash it often to keep it looking great!</h4> 
            <h4>Dont forget to change the oil in your {this.props.car.make} every 3000 miles</h4>
            <h4>Optimize Performance by replacing your brakes after 6000 miles</h4>
            </div>
        )
}
    
}
        const mapStateToProps = state => {
            return{
                car: state.CarsReducer.car
            }
        
    }

export default connect(mapStateToProps, {renderTips})(CarTips)