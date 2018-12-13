import styled from 'styled-components';

export const LoginForm = styled.div`
    background:white;
    width:432px;
    margin:0 auto 50px auto;
    text-align:center;
    font-size:14px;

    .regesterBt {
        background:#0084ff;
        height:36px;
        width:352px;
        border-radius:3px;
        margin-top:20px;
        color:white;
    }
`

export const Tip = styled.div`
    color: #0084ff;
    font-size: 22px;
    margin-bottom:20px;
`

export const InputContanier = styled.div`
    margin:0 auto;
    height:49px;
    width:352px;
    border-bottom:1px solid #ebebeb;
    line-height:49px;
    text-align:left;
    font-size:14px;

    
    input {
        background:rgba(0,0,0,0);
        height:49px;
        font-size: 14px;
        
        ::placeholder {
        }
    }
        
    &.phoneNum {
        display: flex;
        
        .countrys {
           display: inline-block;  
           vertical-align:middle;
           position:relative;
                   
           span {
              height: 49px;
              vertical-align:middle;
           }  
        }
        
        span,svg {
            display:inline-block;
            vertical-align:middle;
            color:#8590a6;
        }
        
        svg {
            margin-left:8px;
        }
        
        .sperator {
            color:#ebebeb;
            margin-right:8px;
        }
        
        input {
            overflow:hidden;
            vertical-align:middle;
            flex:1 1 auto;
        }
    }
    
    &.phoneCheck {
        input {
            width:140px;
            float:left;
        }
        
        button {
            width:140px;
            height:49px;
            float:right;
            font-size:14px;
            color:#175199;
            text-align:right;
            background:rgba(0,0,0,0);
        }
    }
`

export const CountrySelect = styled.ul`
    position:absolute;
    width:200px;
    height:520px;
    overflow:scroll;
    top:0;
    left:0;
    background:white;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);  
    
    &.hide {
        display:none;
    }
    
    li {
        height:40px;
        cursor:pointer;
        color:#8590a6;
        line-height:40px;
    }  
    
    .seleLi {
        background:rgb(246,246,246);
    }
`
export const SoundCheck = styled.div`
    height:49px;

    .getSound {
        height:49px;
        width:98px;
        line-height:49px;
        float:right;
        text-align:right;
        margin-right:40px;
        font-size:14px;
        color:#8590a6;
        background:rgba(0,0,0,0);
    }
`

export const RegisterConvention = styled.div`
    width:352px; 
    margin:20px auto;
    margin-bottom:40px;
    text-align:left;
    color:#8590a6;
    
    a {
        text-decoration:none;
        color:#8590a6;
    }
    
    .register {
        float:right;
        color:#175199;
    }
`
export const ToLogin = styled.div`
    height:59px;
    background:#f6f6f6;
    line-height:59px;
    font-size: 16px;
    
    a {
        text-decoration:none;
        color:#175199;
        margin:0 15px;
    }
`
