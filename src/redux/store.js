import {combineReducers, compose, createStore} from "redux";


let rootReducer = combineReducers({
})





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());


window.__store__ = store




export default store;