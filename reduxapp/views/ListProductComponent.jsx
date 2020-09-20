import React, { Component } from 'react'
class ListProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
            <table className="table table-bordered table-striped">
              <thead>
               <tr>
                 <th>Product Id</th>
                 <th>Product Name</th>
               </tr>
              </thead>
              <tbody>
                  {
                    this.props.productsData.map((prd,i)=> (
                       <tr key={i}>
                         <td>{prd.product.ProductId}</td>
                         <td>{prd.product.ProductName}</td>
                       </tr>
                    ))
                  }
              </tbody>
            </table>
          </div>

         );
    }
}
 
export default ListProductsComponent;