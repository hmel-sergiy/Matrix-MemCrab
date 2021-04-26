import table from './tableReducer';
import modal from './modalReducer';
import { combineReducers } from "redux";

export default combineReducers({
    table,
    modal
})