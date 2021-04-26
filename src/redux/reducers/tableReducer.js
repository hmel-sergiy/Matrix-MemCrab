import Matrix from '../../helpers/matrixHelper';
import {TABLE_ACTIONS} from '../actions/types';
const {
    ADD_ROW_TO_TABLE, 
    REMOVE_ROW_FROM_TABLE, 
    INCREMENT_CELL, 
    SET_TABLE_PROPERTIES,
    TURN_ON_ROW_PERCENTAGE_VIEW,
    TURN_OF_ROW_PERCENTAGE_VIEW,
    SHOW_COMMON_NUMBERS
} = TABLE_ACTIONS

const defaultState = {
    percentageRowIndex: -1,
    matrix: [],
    commonCells: [],
};

const reducer =  (state = defaultState, action) => {
    let newMatrix = {};
    switch (action.type){
        case ADD_ROW_TO_TABLE:
            newMatrix = new Matrix(state.matrix);
            newMatrix.addRow();
            return {
                ...state,
                matrix: newMatrix
            };
        case REMOVE_ROW_FROM_TABLE:
            newMatrix = new Matrix(state.matrix);
            newMatrix.deleteRow(Number(action.payload));
            return {
                ...state,
                matrix: newMatrix
            };
        case INCREMENT_CELL:
            newMatrix = new Matrix(state.matrix);
            newMatrix.incrementCell(...action.payload);
            return {
                ...state,
                matrix: newMatrix
            };
        case SET_TABLE_PROPERTIES: 
            return {
                ...state,
                matrix: new Matrix(...action.payload)
            };
        case TURN_ON_ROW_PERCENTAGE_VIEW:
            return {
                ...state,
                percentageRowIndex: action.payload,
            }
        case TURN_OF_ROW_PERCENTAGE_VIEW:
            return {
                ...state,
                percentageRowIndex: -1,
            }
        case SHOW_COMMON_NUMBERS:
            return {
                ...state,
                commonCells: state.matrix.findClosestCellsIndexes(action.payload)
            }
        default: return state;
    }
}

export default reducer;