import {MODAL_ACTIONS} from '../actions/types';
const {
    CHANGE_M_FIELD, 
    CHANGE_N_FIELD, 
    CHANGE_X_FIELD, 
    SET_ERROR,
    TOGGLE_SHOW_MODAL
} = MODAL_ACTIONS;

const defaultState = {
    isModalOpen: true,
    properties: {
        m: 0,
        n: 0,
        x: 0
    },
    errors: {}
};

const reducer = (state = defaultState, action) => {
    let {properties} = state;
    switch (action.type){
        case CHANGE_M_FIELD:
            properties = {...properties, m: action.payload}
            return {
                ...state,
                properties
            };
        case CHANGE_N_FIELD: 
            properties = {...properties, n: action.payload} 
            return {
                ...state,
                properties 
            };
        case CHANGE_X_FIELD:
            properties = {...properties, x: action.payload}  
            return {
                ...state,
                properties 
            };
        case SET_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        case TOGGLE_SHOW_MODAL:
            return {
                ...state,
                isModalOpen: action.payload
            };
        default: return state;
    }
}

export default reducer;