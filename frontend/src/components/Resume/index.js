import React from 'react'
import ResumeItem from '../ResumeItem';
import * as C from "./styles"


const Resume = ({  backendDataDB, backendDataApi }) => {

    let crud = backendDataDB;
    let dataApi = backendDataApi;
    
    let newArray = [];
    let totalAmount = 0;

    // Create a new array with objects with name,quantity and currentPriceUSD
    if(crud.length != 0){
        crud.map(ele => {            
            dataApi.map((eleApi)=>{                
                if(ele.name == eleApi.id ){
                   
                    let auxObj = {
                        name: ele.name,
                        quantity: ele.quantity,
                        currentPriceUsd: eleApi.current_price,
                    }                   
                    newArray.push(auxObj)
                }
            })
        });

        totalAmount = newArray.map((element) => element.quantity * element.currentPriceUsd)
        .reduce((total, element)=> total += element)
        
        totalAmount = totalAmount.toFixed(2);
    };

  return (
    <C.Container>        
        <ResumeItem
            title="Today"            
            value={totalAmount}
        /> 
    </C.Container>
  );
}

export default Resume