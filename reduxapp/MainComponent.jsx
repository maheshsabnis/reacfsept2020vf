import React, { Component } from 'react'

// import the 'connect()' object that will map the 
// state, props and actions to the redux object model

import {connect} from 'react-redux';

import AddProductComponent from './views/AddProductComponent';
import ListProductsComponent from './views/ListProductComponent'; 
import {addProduct} from './actions/action';



class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // define  displatch and listproducts props types that will map to the store
        // use the dispatch property as method to displatch action
        // use listproducts property to list products received from the store
        const {dispatch, listproducts} = this.props; 
        return (  
            <div className="container">
                <AddProductComponent AddClick={(product)=> dispatch(addProduct(product))}/>
                <hr/>
                <ListProductsComponent productsData={listproducts}/>   
            </div>
        );
    }
}
 
// write a method that will use the storec subscribed by MainCOmponent
// get the state from the store and map with the porps of the MainComponent

function mapStateToProps(state){
     return {
        listproducts: state.listproductsReducer
     }
}

// connect the store with the component using mapStateToProps method
export default connect(mapStateToProps)(MainComponent);