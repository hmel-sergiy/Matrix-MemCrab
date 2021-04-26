import {MODAL_ACTIONS} from './types'
const {
    CHANGE_M_FIELD, 
    CHANGE_N_FIELD, 
    CHANGE_X_FIELD, 
    SET_ERROR,
    TOGGLE_SHOW_MODAL
} = MODAL_ACTIONS;

export function toggleModal(payload){
    return {
        type: TOGGLE_SHOW_MODAL,
        payload
    }
}

export function changeMField(payload){
    return {
        type: CHANGE_M_FIELD,
        payload
    }
}

export function changeNField(payload){
    return {
        type: CHANGE_N_FIELD,
        payload
    }
}

export function changeXField(payload){
    return {
        type: CHANGE_X_FIELD,
        payload
    }
}

export function setErrors(payload){
    return {
        type: SET_ERROR,
        payload
    }
}