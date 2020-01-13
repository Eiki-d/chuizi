import tabbarReducer from './tabbarReducer'
import listReducer from './listReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    tabbarReducer,
    listReducer
})

export default reducer