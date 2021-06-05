import { combineReducers } from 'redux'
//import { createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'


const combinedReducer = combineReducers({
    cake: cakeReducer, 
    icecream: icecreamReducer
})

export default combinedReducer;