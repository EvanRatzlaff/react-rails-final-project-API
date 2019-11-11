const initialState = {
    cars: [],
    car: {}
}
const CarsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return{
            ...state,
            cars: [...state.cars, action.car]
        }
        case "GET_CAR":
            return {
            ...state, cars: action.cars
        }
        case "RENDER_TIPS":
            return {
            ...state, car: action.car
        }
        default: 
            return state;
    }
}

export default CarsReducer