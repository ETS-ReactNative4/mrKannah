import {routerReducer} from 'react-router-redux'
import {navbarReducer} from './components/navbar'

const reducers = {};
reducers.routing = routerReducer;
reducers.navigation = navbarReducer;

export default reducers;
