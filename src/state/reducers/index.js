import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import changeModeReducer  from "./changeModeReducer";


const reducers=combineReducers({
    amount:amountReducer,
    mode:changeModeReducer,
})

export default reducers