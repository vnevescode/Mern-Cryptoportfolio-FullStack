import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  font-size: 16px;
  font-weight: 500;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Img = styled.img`
  width: 60px;
`;

export const ButtonUpdate = styled.button`
  padding: 10px 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #3f48cc;
  text-shadow: 2px 2px #343a40;
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonDelete = styled.button`
  padding: 10px 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #b50043;
  text-shadow: 2px 2px #343a40;
  font-size: 16px;
  font-weight: 500;
`;


export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 18px;  
  border: 1px solid #ccc;
`;

export const UpdateDiv = styled.input`
  display: flex;
  gap: 10px
`