// define the action type
// constant, this will be used by the reducer to check if the action is dispatched
import {HttpService} from './../../services/httpservice';
export const ADD_PRODUCT = "ADD_PRODUCT";

// define an action creator
// action creator is a method that will be used accept a 'payload'
// process the payload and return the response as JSON object
// e.g. {type: <ACTION_TYPE>, payload:<RESULT>}
// ACTION_TYPE ; the output action returned by the action creator
// the action is dispatched by View and it will be executed and 
// it will return the output action
// based on the output action the reducer function will update the store 

export function addProduct(product) {
    let serv = new HttpService();
    let prds = [];
    serv.getData().then(resp=> {
      prds = resp.data;
    }).catch(error=>{
      // error code
    });
    // SOME LOGIC HERE
    // Sync
    product.ProductName = product.ProductName.toUpperCase();

  console.log(`In Action Method ${JSON.stringify(product)}`);
    product =prds[0];
    alert(JSON.stringify(product));
    return {
        type: 'ADD_PRODUCT',
        product
    }

}