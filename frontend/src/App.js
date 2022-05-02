import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";
import axios from 'axios';

const backEndLink = 'http://localhost:5000/api/v1/crud';

const App = () => {

  //backendDataDB
  const [backendDataDB, setBackendDataDB] = useState([]);
  //backendDataApi
  const [backendDataApi, setBackendDataApi] = useState([]);
  
  // Fetch BackEnd data when app start
  useEffect(()=>{    
    getData();
  },[]);
  
  const getData =  () =>{ 
    axios.get(backEndLink) 
      .then((response)=>{
        const result = response.data;
        setBackendDataDB(result.crud);
        setBackendDataApi(result.data_coingecko_api);               
      })
      .catch((err)=>{
        console.log(err);
      })      
  } 
  
  const handleAdd = (transaction) =>{ 
    
    let newBackendDataDb = []

    //Find if element exist 
    const found = backendDataDB.find(ele =>
        ele.name === transaction.name
    );    

    if(!!found){
      // Update the total value of quantity
      backendDataDB.map((ele)=>{
        if(ele.name ===  transaction.name){          
          ele.quantity += transaction.quantity;          
        }
      })
      newBackendDataDb = [...backendDataDB] 
    }else{
      // create a new one
      newBackendDataDb = [...backendDataDB,transaction]      
    }
    
    axios
      .post(backEndLink, transaction)
      .then((response) => {
        setBackendDataDB(newBackendDataDb);
        getData();
      })
      .catch((err) => { 
        console.log(err);
      });
  }

  const handleUpdate = (_data) =>{   
    
    const linkforUpdate = backEndLink +`/${_data._id}`;    

    // Update data frontEnd
    let value = backendDataDB.map((ele)=>{
      if(ele.name ===  _data.name){        
        ele.quantity = Number(_data.quantity);        
      }
    })

    let newBackendDataDb = [...backendDataDB]

    // -----------------------------------
    // Handle Backend Update data
    axios
      .patch(linkforUpdate, {
        name:_data.name,
        quantity:_data.quantity
      })
      .then(response => {
        console.log(response)
        setBackendDataDB(newBackendDataDb);        
      })
      .catch((err)=>{ 
        console.log(err) 
      });
  }

  
  const handleDelete = (_data) =>{
    
    const linkforDelete = backEndLink +`/${_data._id}`;

    // NewList of elements without the deleted
    const newList = backendDataDB.filter((item) => item.itemId !== _data.itemId);
    
    // -----------------------------------
    // Handle Backend Delete data
    axios
      .delete(linkforDelete)
      .then((response)=>{
        console.log(response)          
        setBackendDataDB(newList)      
      })
      .catch((err)=>{
        console.log(err)
      });    
  }
 
  return (
    <>
      <Header/>
      {
        backendDataDB &&
        <Resume
          backendDataDB={backendDataDB}
          backendDataApi={backendDataApi}
        ></Resume>
      } 
      { backendDataDB &&
        <Form 
          handleAdd={handleAdd}
          backendDataDB={backendDataDB}
          backendDataApi={backendDataApi}
        /> 
      }      
      { backendDataDB &&
        <Grid          
          backendDataDB={backendDataDB}
          backendDataApi={backendDataApi}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        /> 
      }
      <GlobalStyle />
    </>
  );  
};


export default App;
