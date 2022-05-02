import React, { useState } from 'react'
import Grid from '../Grid';
import * as C from './styles';

const Form = ({ handleAdd, backendDataDB, backendDataApi }) => {
   

    const [selectedOption,setSelectedOption]= useState('Bitcoin');    
    const [amount, setAmount] = useState("");
    const newArray = backendDataApi;
    
    const generateID = () => Math.round(Math.random() * 1000);
    
    const options = newArray.map((item)=>{ 
        let keyId = Object.keys(item)[0]
        let keyName = Object.keys(item)[2]
        return ({ value:item[keyId], label:item[keyName]})
    })

    const handleSave = () => {
        
        // Check if the input is positive 
        if (amount < 1) {
          alert("The value needs to be positive!");
          return;
        }

        let coinId = ''; 

        newArray.map((item)=>{
            if(item.name == selectedOption){
                coinId = item.id;
            }
        })
        
        const transaction = { 
            itemId: generateID(),                      
            name:coinId,
            quantity: Number(amount),            
        };       
        
        // Send to create a new register
        handleAdd(transaction)
        
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Token Symbol</C.Label>                    
                    <C.Select
                        key={selectedOption}
                        value={selectedOption}
                        onChange={e => { setSelectedOption(e.target.value)}}>
                        {options.map(opt => (
                            <option>{opt.label}</option>
                        ))}
                    </C.Select>
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Amount</C.Label>
                    <C.Input                        
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.InputContent>
                <C.InputContentButton>
                    <C.Button type="submit" onClick={handleSave}>Add</C.Button>
                </C.InputContentButton>                           
            </C.Container>                     
        </>
    )
}

export default Form