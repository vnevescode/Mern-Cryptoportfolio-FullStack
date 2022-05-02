import React, { useState } from "react";
import * as C from "./styles";


const GridItem = ({ item, options, optionsAPI,handleUpdate,handleDelete }) => {

   const [amount,setAmount] = useState(0)
   const [updateFlag,setUpdateFlag] = useState(false)

   
   const getCoinInfo = {
      _id: item._id,
      itemId: item.itemId,
      name: item.name,
      quantity: item.quantity,
   }
   
   // Handle Update Event
    const updateEvent = () => {       
       if(updateFlag){   
            if(amount < 0){
                alert("Use only positive numbers");
                setUpdateFlag(false)
                return
            }            
            getCoinInfo.quantity = amount;          
            handleUpdate(getCoinInfo)                       
            setUpdateFlag(false)
       }else{
            setUpdateFlag(true)            
       }  
    }

    // Handle Delete Event
    const deleteEvent = async () => {        
        await handleDelete(getCoinInfo)
    }   

    // Get Info [ image,name,current-price(USD) ] to display
    let infoObj = {
        name: '',
        image: '',
        currentPrice:''
    }
    const infoFromAPI = optionsAPI.map((element)=>{
        if(item.name === element.id){
            infoObj.name = element.name
            infoObj.image = element.image 
            infoObj.currentPrice = element.currentPrice            
        }
    })

  return (
    <C.Tr>
      <C.Td alignCenter>{infoObj.name}</C.Td>
      <C.Td alignCenter>
          <C.Img src={infoObj.image} alt={'Token Icon'}></C.Img>
      </C.Td>
      <C.Td alignCenter>
        { updateFlag ? 
            <C.Input 
                value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)}
            ></C.Input> : item.quantity}        
      </C.Td>
      <C.Td alignCenter>        
        {"$"+(infoObj.currentPrice * item.quantity).toFixed(2)}
      </C.Td>
      <C.Td alignCenter>
        <C.ButtonUpdate type="submit" onClick={updateEvent} >Update</C.ButtonUpdate>
        <C.ButtonDelete type="submit"onClick={deleteEvent} >Delete</C.ButtonDelete>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;