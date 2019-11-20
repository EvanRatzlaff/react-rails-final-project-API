import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store= { store }>
    <App /> 
</Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
