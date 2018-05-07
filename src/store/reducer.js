import { combineReducers } from 'redux'
import home from './home'
import cars from './cars/reducer'
import user from './user'
const reducer = combineReducers({
	home,
	cars,
	user
})

export default reducer