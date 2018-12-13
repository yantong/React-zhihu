import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import BodyBg from '../../img/mainBg.png';

export const LoginGlobalStyle = createGlobalStyle`
    body {
      background:url(${BodyBg}) no-repeat;
      background-size:cover;
      padding-top:100px;
    }
`
export const AppDownLoad = styled.button`
    margin:0 auto;
    height:42px;
    width:432px;
    background:#8590a6;
    border-radius:3px;
    color:white;
`

export const Footer = styled.div`
    margin-top:150px;
    font-size:12px;
    color:white;
    line-height: 21px;
    
    a {
        text-decoration: none;  
    }
    
    .bottomA {
         width:432px;
         border-top:1px solid #ebebeb;
         margin-top:10px;
         margin:0 auto;
         line-height:40px;
     }
`
export const CallBack = styled.div`
    background:#fff;
    width:40px;
    height:40px;
    position:fixed;
    right:20px;
    bottom:20px;
    border-radius:3px;    
    
    svg {
        margin:8px 0;
    }
    
    .callback {
    }
`

