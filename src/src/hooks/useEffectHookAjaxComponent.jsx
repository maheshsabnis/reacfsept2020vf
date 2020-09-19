import React, {useState, useEffect} from 'react';
import TableGridComppnent from '../components/datagridcomponent/tablecomponent';
import { HttpService } from '../services/httpservice';


const UseEffectAjaxComponent =() => {

    const service =  new HttpService();
    const [products, updateProducts] = useState([]);

    // using the useEffect() hook to fetech data
    // pass the second paraemeter to useEffect() to inform that the effect has to complete
    // its execution as its dependency is changes/modified 
    useEffect(()=>{
           service.getData()
           .then(response=>{
               updateProducts(response.data);
           })
           .catch(error=>{
               console.log(`Error Occured ${error}`);
           }); 
            
    }, []);

return (
    <div className="container">
        <h2>Using useEffect() hook for Ajax Calls</h2>
        <TableGridComppnent dataSource={products}></TableGridComppnent>
    </div>
);

};

export default UseEffectAjaxComponent;