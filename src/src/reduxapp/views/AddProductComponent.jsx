import React, { Component } from 'react';
class AddProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSaveClick=()=> {
      alert('Add Click');
      // using 'ref' for input elements will help to read data from input elements  
      let prd =  {
        ProductId: this.refs.ProductId.value,
        ProductName: this.refs.ProductName.value
      };

      // this will be used to displatch thenaction from MainCOmponent
      // for the current AddProductComponent when the 'save' button is clicked 
      this.props.AddClick(prd);

      // clear input elements
      this.refs.ProductId.value = 0;
      this.refs.ProductName.value = '';
    }

    render() { 
        return (    
        <div className="container">
        <div className="form-group">
        <label htmlFor="ProductId"> Product Id</label>
        <input name="ProductId" ref="ProductId"  type="text" className="form-control"
          />
      </div>
      <div className="form-group">
        <label htmlFor="ProductName"> Product Name</label>
        <input type="text" ref="ProductName"  name="ProductName" className="form-control"
        />
      </div>
      <div className="form-group">
        <input type="button" value="Save"   className="btn btn-success"
         onClick={this.handleSaveClick.bind(this)}/>
      </div>
    </div>);
    }
}
 
export default AddProductComponent;