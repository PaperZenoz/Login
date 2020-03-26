import {combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";
import {loginReducer} from "./loginReducer";
import {adminReducer} from "./adminReducer";


let rootReducer = combineReducers({
    news: newsReducer,
    login: loginReducer,
    admin: adminReducer

})





const store = createStore(rootReducer);


window.__store__ = store




export default store;