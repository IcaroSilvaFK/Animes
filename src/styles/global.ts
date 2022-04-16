import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --fontPoppins: 'Poppins', sans-serif;
    --fontSource: 'Source Code Pro', monospace;
    
    --backgorund-login:#242442;
    --background-form:#23243C;
    --background-input-container:#434459;
    --backgorund-button:#46BBE1;
    --letter-color:#fff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,input,button,a,textarea{
    font-family:var(--fontPoppins);
  }

  button,input{
    border:none;
    outline: none;
  }

  button{
    cursor: pointer;
  }
  a{
    text-decoration:none ;
  }

  
`;
