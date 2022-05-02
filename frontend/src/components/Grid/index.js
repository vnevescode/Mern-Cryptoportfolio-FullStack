import React, { useState } from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({  backendDataDB, backendDataApi ,handleUpdate,handleDelete }) => {

    
    const backInfoDataBase = backendDataDB;
    const backInfoCoinGeckoAPI = backendDataApi;

    // Options from DataBase
    const options = backInfoDataBase.map((item)=>{
        let keyId = item._id;
        let keyItemId = item.itemId;        
        let keyName = item.name;
        let keyQuantity = item.quantity;       
        return ({ _id: keyId, itemId:keyItemId , name:keyName, quantity:keyQuantity})
    })

    // Options from API
    const optionsAPI = backInfoCoinGeckoAPI.map((item)=>{ 
        let keyId = item.id;
        let keyName = item.name;
        let keyImage = item.image;
        let keyUSDCurrentValue = item.current_price;     
        return ({ id:keyId, name:keyName, image:keyImage, currentPrice:keyUSDCurrentValue})
    }) 

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
            <C.Th width={10} alignCenter>
                Name
            </C.Th>  
          <C.Th width={30} alignCenter>Symbol</C.Th>
          <C.Th width={10} alignCenter>Quantity</C.Th>
          <C.Th width={30} alignCenter>
            Amount USD
          </C.Th>
          <C.Th width={20} alignCenter>Options</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {options?.map((item, index) => (
           <GridItem 
                key={index} 
                item={item}
                options={options} 
                optionsAPI={optionsAPI}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />
          )
        )}  
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
