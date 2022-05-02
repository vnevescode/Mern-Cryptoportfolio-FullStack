import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;  
  flex-direction: column;
  flex:2;
  margin:15px;
`;

export const InputContentButton = styled.div`
  display: flex;  
  flex-direction: column;
  flex:1;
  margin:15px;
  align-items: center;
`;


export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`  
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;
  border: 1px solid #ccc;
`;


export const Button = styled.button`
  flex:1;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #8247e5;
  text-shadow: 2px 2px #343a40;
  font-size: 20px;
  font-weight: 600;
  width:150px; 
  align-items: center;
  justify-content: center; 
`;