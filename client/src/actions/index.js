const baseUrl = 'http://localhost:3001'

export const addCar = car => {
    return dispatch => {
        return fetch(baseUrl + '/api/cars', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({car})
        })
        .then(res => res.json())
        .then(car => {
            console.log("made it here - Car created", car)
            dispatch({type: "ADD_CAR", car})
           // history.push('/api/cars/:id')
        })
    }
}

export const getCars = () => {
    return dispatch => {
        fetch(baseUrl + '/api/cars')
        .then(res => res.json())
        .then(cars => {
        dispatch({ type: "GET_CARS", cars})
        })
    }
}
export const renderTips = id => {
    return dispatch => {
        return fetch(baseUrl + '/api/cars/' + id)
           .then(res => res.json())
           .then(car => {
            return dispatch({type: "RENDER_TIPS", car})
        })
    }
}