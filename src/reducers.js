import {routerReducer} from 'react-router-redux'
import {navbarReducer} from './components/navBar/reducer'

const reducers = {};
reducers.routing = routerReducer;
reducers.navigation = navbarReducer;

export default reducers;
