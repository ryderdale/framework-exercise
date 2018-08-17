import {combineReducers} from 'redux' 
import globalState from "./globalState"

const rootReducers = combineReducers ({
    globalStateProp: globalState
})

export default rootReducers;