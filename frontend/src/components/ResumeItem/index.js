import React from 'react'
import { BsWallet2 } from "react-icons/bs";
import * as C from "./styles";


const ResumeItem = ({ title, value}) => {

  // Format how value is displayed
  const moneyFormat = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "K"

    : Math.abs(Number(labelValue));
  }

  return (
    <C.Container>        
        <C.Header>            
            <C.HeaderTitle>
              <BsWallet2/>
              {title}
            </C.HeaderTitle>
        </C.Header>
        <C.Total>{`USD $ ${(value > 0)? moneyFormat(value) : 0} `}</C.Total>
        <C.TotalSubTitle>{`$${(value > 0)? value : 0} `}</C.TotalSubTitle>
    </C.Container>
  )
}

export default ResumeItem