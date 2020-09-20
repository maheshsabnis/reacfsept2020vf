// the function that will be executed upon the actions dispatched
// by all objects subscribing to the store
 
const reducer=(state={}, action)=>{
    switch(action.type) {
        case 'GET_PRODCTS':
            return {...state, loading: true};
        case  'GET_PRODUCTS_SUCCESS':
         return {...state, products: action.products, loading:false};
        default: 
            return state;
    }
}

export default reducer;