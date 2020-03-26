import {combineReducers, compose, createStore} from "redux";
import {newsReducer} from "./newsReducer";
import {loginReducer} from "./loginReducer";
import {adminReducer} from "./adminReducer";


let rootReducer = combineReducers({
    news: newsReducer,
    login: loginReducer,
    admin: adminReducer

})





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());


window.__store__ = store




export default store;