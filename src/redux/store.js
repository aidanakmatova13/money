import {createStore, combineReducers} from "redux";
import {tasksReducer} from "./reducers/tasksReducer";
import {userReducer} from "./reducers/userReducer";

export const store = createStore(combineReducers({
    tasks: tasksReducer,
    user: userReducer
}))