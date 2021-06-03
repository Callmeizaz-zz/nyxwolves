import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
    @media (max-width:1700px){
        font-size:75%;
    }
   
}
body{
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
}
button{
    font-weight:lighter;
    font-size:1rem;
    background-color: #1b1b1b;
    cursor:pointer;
    color:white;
    border-radius: 10px;
    border: none;
    transition:all 0.5s  ease;
    font-family: 'Inter', sans-serif;
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#23d997;
        color:white;
    }
}
h2{
    font-weight:lighter;
    font-size:4rem;
}
h3{
    color:white
}
h4{
    font-weight:bold;
    font-size:2rem;
}
a{
    font-size:1.1rem;
}
span{
    color:#23d997;
    font-weight:bold;
}

`;

export default GlobalStyle;
