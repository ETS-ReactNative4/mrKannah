import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {navbarReducer} from './components/navBar/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  navigation: navbarReducer,
})
