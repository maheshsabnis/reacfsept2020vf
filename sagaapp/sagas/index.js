// this file will contains logic for SAGA middleware that will make call to
// REST APIs using HttpService class from  services folder

// SAGA uses an Operator object model (?) to subscribe to promise and resolve data from it. 
// this object model is known as 'Effects' this is also known as 'Query Operators'

// all: used to monitor all watchers(?) created by SAGA middleware so that
// data returned by these watchers will be read.
// watchers: they are generator functions those subscibes to promises to read responses(data/error messages)
// call: invoke the method that is sued to resolve the promise object
// takelatest: read the latest response from the async operation
// put: return a new action based on the response received
// e.g. GET_PRODUCTS will return GET_PRODUCTS_SUCCESS or GET_PRODUCTS_ERROR

import {put, all, takeLatest, call} from 'redux-saga/effects';
import {HttpService} from './../../services/httpservice';

// write a  method that will call the getData() method from the service and 
// return the Pormise subscription
function getProductsData() {
    let serv = new HttpService();
    const response = serv.getData()
                         .then((result)=>result.data);
    // reolve the promise object
    // so that data from the promise object can be read
   
    return Promise.resolve(response);                     
}

// create a SAGA infrestructue generator method 
// that will call the getProductsData() method and yield
// response from it along with the SUCCESS/ERROR Action

function* fetachProductsGenerator() {
    const response = yield call(getProductsData);
    // yield the success response using SUCCESS Action method
    // the reducer function will immediately executed upon discovering the 
    // response actions
    console.log(`Fetch Data Watcher 1 ${response}`);
    yield put({
        type: 'GET_PRODUCTS_SUCCESS', // action type
        products: response || [{error: 'ERROR_OCCURED'}] // payload
    });
}

// create a common generator watcher, that will monitor
// all generator function execution e.g. read/write

function* actionsWatcherForAllGenerators() {
    // this will monitor the GET_PRODUCTS action dispatched from the View
    // thata is subscribing to store
    console.log(`Fetch Data Watcher 0`);
    yield takeLatest("GET_PRODUCTS", fetachProductsGenerator);
}

// export the rootSaga i.e. a common SAGA middleware that will wtach
// all actions being displatched from Veiws and actions returned as response
// this root saga will be used by store to monitor the action dispatch
export default function* rootSaga() {
    yield all([actionsWatcherForAllGenerators()])
} 