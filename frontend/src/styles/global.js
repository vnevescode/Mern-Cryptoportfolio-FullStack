import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', Sans-Serif;
    background: linear-gradient(90deg, rgba(132,78,220,1) 0%, rgba(148,187,233,1) 100%);
    background-color: #f2f2f2;
  }
`;

export default Global;