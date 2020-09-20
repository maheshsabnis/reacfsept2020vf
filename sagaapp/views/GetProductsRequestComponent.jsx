import React, { Component } from 'react';

import {getProducts} from './../actions/actions';
import {connect} from 'react-redux';
class GetProductsRequestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
                <button onClick={this.props.getProducts} className="btn btn-danger">GET PRODUCTS</button>
            </div>
        );
    }
}
 
// implement the mapDispatchToProps() method 
// this will map the action to the props and this props will be
// bound to the click event of the button so that the action will be dispatch
const mapDispatchToProps={
    // props funciton : action from action.js
    getProducts: getProducts
} ; 
export default connect(null, mapDispatchToProps)(GetProductsRequestComponent);