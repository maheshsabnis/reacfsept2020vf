import React from 'react';
import { connect } from 'react-redux';

const ListProductsViewComponent=({products})=>
    products? (
       <div className="container">
           <table className="table table-bordered table-striped">
               <thead>
                   <tr>
                       <th>Product Row Id</th>
                       <th>Product  Id</th>
                       <th>Product Name</th>
                       <th>Category Name</th>
                       <th>Manufacturer</th>
                       <th>Description</th>
                       <th>Base Price</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       products.map((p,i)=>(
                        <tr key={i}>
                            {
                                Object.keys(p).map((val,idx)=>(
                                <td key={idx}>{p[val]}</td>
                                ))
                            }    
                        </tr>
                       ))
                       
                   }
               </tbody>
           </table>
       </div> 
    ):null;



// connect the compnent with the store so that
// it will be notified with products data from the store
const mapStateToProps=state=> ({
    // props: products from store that will be updated by reducer based on GET_PRODUCTS_SUCCESS
    products: state.products
});

export default connect(mapStateToProps, null)(ListProductsViewComponent);