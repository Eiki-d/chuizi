import tabbarReducer from './tabbarReducer'
import listReducer from './listReducer'
import homeReducer from './homeReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    tabbarReducer,
    listReducer,
    homeReducer
})

export default reducer