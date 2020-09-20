import {ADD_PRODUCT} from './../actions/action';
import {combineReducers} from 'redux';

// a reducer function  for adding product into store based on the ADD_PRODUCT action
// reduecr is a PURE JAVASCRIPT function
// accepts state and action as input parameter and return it
// please do not write any time consuming logic in reducer
// e.g. Date Operations, AJAX calls, timer function
export function addProductReducer(state, action) {

    switch(action.type) {
        case ADD_PRODUCT: 
            return {
                product:action.product // update the state by newly added product
            }
        default: 
            return state;    
    }
}

export function listproductsReducer(state=[], action) {

    switch(action.type) {
        case ADD_PRODUCT: 
    
            return [...state, addProductReducer(undefined,action)];  
        default: 
            return state;    
    }
}

// add reducer function(s) in the combineReducers
const productreducer = combineReducers({listproductsReducer});
export default productreducer;  


