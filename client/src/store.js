import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/reducers/index'
const middleware = [thunk]
export const store = createStore(rootReducer, applyMiddleware(...middleware))