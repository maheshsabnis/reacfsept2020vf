import React, { Component } from 'react'
class FormValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            EmpNo:0,
            EmpName: '',
            isEmpNoValid: true,
            isEmpNameValid:true,
            isFormValid:true
        };
    }
    handleInputChanges=(evt)=> {
        this.setState({[evt.target.name]:evt.target.value});
        this.validateForm(evt.target.name, evt.target.value);
    }
    // contains validation rules for execution
    validateForm(name,value){
        if(name === 'EmpNo') {
                if(parseInt(value) < 0 || value.length > 5) {
                    this.setState({isEmpNoValid:false});
                    this.setState({isFormValid:false});
                } else {
                    this.setState({isEmpNoValid:true});
                    this.setState({isFormValid:true});
                }
        }

        if(name === 'EmpName') {
            if(value === '' || value.length > 10) {
                this.setState({isEmpNameValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isEmpNameValid:true});
                this.setState({isFormValid:true});
            }
        }

    }
    render() { 
        return ( 
            <div className="container">
                <form name="empForm">
                    <div className="form-group">
                        <label htmlFor="EmpNo">Emp No</label>
                        <input type="text" className="form-group" 
                        name="EmpNo"
                        value={this.state.EmpNo}
                        onChange={this.handleInputChanges.bind(this)}/>
                        <div className="alert alert-danger" hidden={this.state.isEmpNoValid}>
                            EmpNo is must and length must be less than 5
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmpName">Emp Name</label>
                        <input type="text" className="form-group" 
                        name="EmpName"
                        value={this.state.EmpName}
                        onChange={this.handleInputChanges.bind(this)}/>
                        <div className="alert alert-danger" hidden={this.state.isEmpNameValid}>
                            Emp Name is must and length must be less than 10
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="button" disabled={!this.state.isFormValid} value="Save" className="btn btn-success"/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default FormValidationComponent; 