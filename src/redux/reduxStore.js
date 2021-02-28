import {applyMiddleware, createStore, combineReducers} from "redux";
import tableDataReducer from "./tableDataReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    dataTable:tableDataReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
