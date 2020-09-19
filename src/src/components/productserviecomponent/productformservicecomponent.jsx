import React, { Component } from 'react'
import DropDownComponent from '../selectcomponent/dropdoencomponent';
import TableGridComponent from '../datagridcomponent/tablecomponent';
import {Categories, Manufacturers} from '../../mdoels/constants';
import {HttpService} from './../../services/httpservice'; 
 
class ProductFormServiceComponent extends Component {
    constructor(props) {
        super(props); // 1. mandatory code
        this.state = {   // 2. defining all state properties
            ProductRowId:0,
            ProductId:'',
            ProductName: '',
            CategoryName: '',
            Manufacturer: '',
            Description: '',
            Price: 0,
            categories: Categories,
            manufacturers: Manufacturers,
            products: [] 

        };
        // 3. define all other objects, please avoid all exernal calls
        this.service = new HttpService();
        
    }
    // when an event is raised on UI element
    // the state property wll be updated based on name of the UI element
    // the matches with the state property name
    handleChange =(evt)=> {
        // update the state property
        this.setState({[evt.target.name]: evt.target.value});
    }
    clear =()=> {
        this.setState({ProductRowId:0});
        this.setState({ProductId:''});
        this.setState({ProductName:''});
        this.setState({CategoryName:''});
        this.setState({Manufacturer:''});
        this.setState({Description:''});
        this.setState({Price:0});

    }
    getCategory=(val)=> {
        this.setState({CategoryName: val}, ()=> {});
    }
    getManufacturer=(val)=> {
        this.setState({Manufacturer: val}, ()=>{});
    }
    getSelectedRow=(prd)=>{
        this.setState({ProductRowId:prd.ProductRowId});
        this.setState({ProductId:prd.ProductId});
        this.setState({ProductName:prd.ProductName});
        this.setState({CategoryName:prd.CategoryName});
        this.setState({Manufacturer:prd.Manufacturer});
        this.setState({Price:prd.Price});
    }
    componentDidMount=()=> {
        // subscribe to the promise object and read response (success/failed)
        this.service.getData()
        .then(response=> {
            this.setState({products: response.data}, ()=>{});
        }) // the success
        .catch(error=> {
            console.log(`Error Occured ${error}`);
        }) // the error call;
    }
    save=()=> {
        
        let prd = {
             
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            CategoryName: this.state.CategoryName,
            Manufacturer: this.state.Manufacturer,
            Description: this.state.Description,
            Price: this.state.Price
        };
        
        this.service.postData(prd).then(response=> {
            this.setState({ProductRowId: response.data.ProductRowId}, ()=>{});
        }) // the success
        .catch(error=> {
            console.log(`Error Occured ${error}`);
        }) // the 
    }
    render() { 
        return (
            <div className="container">
                <h2>The React Component Calling HTTP Services</h2>
                <form name="frmProduct">
                <div className="form-group">
                        <label>Product Row Id</label>
                        <input type="text" className="form-control" value={this.state.ProductRowId}
                        name="ProductRowId"    readOnly={true}
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" className="form-control" value={this.state.ProductId}
                        name="ProductId"  required={true}
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" 
                        name="ProductName"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.ProductName}/>
                    </div>
                    <div className="form-group">
                        <label>Category Name</label>
                        <DropDownComponent dataSource={this.state.categories}
                         data={this.state.CategoryName}
                         selectedValue={this.getCategory.bind(this)}></DropDownComponent>
                        
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <DropDownComponent  dataSource={this.state.manufacturers}
                        data={this.state.Manufacturer}
                        selectedValue={this.getManufacturer.bind(this)}></DropDownComponent>
                        
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" 
                        name="Description"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.Description}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" 
                        name="Price"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.Price}/>
                    </div>
                    <div className="form-group">
                       <input type="button" value="Clear" className="btn btn-warning" onClick={this.clear.bind(this)}/>
                       <input type="button" value="Save" className="btn btn-success" onClick={this.save.bind(this)}/>
                    </div>
                </form>
                <br/>
                <TableGridComponent dataSource={this.state.products}
                 selectRow={this.getSelectedRow.bind(this)}
                  ></TableGridComponent>     
                 <br/>
                  
                
            </div>
        );
    }
}
 
export default ProductFormServiceComponent;
