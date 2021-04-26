import {TABLE_ACTIONS} from './types';
const {
    SET_TABLE_PROPERTIES, 
    ADD_ROW_TO_TABLE, 
    REMOVE_ROW_FROM_TABLE,
    INCREMENT_CELL,
    TURN_ON_ROW_PERCENTAGE_VIEW,
    TURN_OF_ROW_PERCENTAGE_VIEW,
    SHOW_COMMON_NUMBERS
} = TABLE_ACTIONS;

export function setupMatrixTable(...payload){
    return {
        type: SET_TABLE_PROPERTIES,
        payload
    }
}

export function addRow(){
    return {
        type: ADD_ROW_TO_TABLE,
    }
}

export function deleteRow(payload){
    return {
        type: REMOVE_ROW_FROM_TABLE,
        payload
    }
}

export function incrementCell(...payload){
    return {
        type: INCREMENT_CELL,
        payload
    }
}

export function turnOnRowPercentageView(payload){
    return {
        type: TURN_ON_ROW_PERCENTAGE_VIEW,
        payload
    }
}

export function turnOfRowPercentageView(){
    return {
        type: TURN_OF_ROW_PERCENTAGE_VIEW,
    }
}

export function showCommonNumbers(payload){
    return {
        type: SHOW_COMMON_NUMBERS,
        payload
    }
}