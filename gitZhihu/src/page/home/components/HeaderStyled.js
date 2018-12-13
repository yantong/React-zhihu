import styled, {createGlobalStyle} from 'styled-components';

export const ContentStyle = createGlobalStyle`
    body {      
    
        background: #f6f6f6 !important; 
  
        div.content {
             width:1000px;
             margin:0 auto;
             position:relative; 
        }
        
        div.mainContent {
             margin:62px auto;
             overflow:hidden;
        }
    }
`

export const HeaderDiv = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:52px;
    background:white;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    text-align:left;
    z-index:30;

    .content {
        height:52px;
    }
    
    .scrollUp-enter {
        transform:translateY(0);
        transition: all 200ms ease-out;
    }
        
    .scrollUp-enter-active {
        transform:translateY(-52px);
    }
        
    .scrollUp-enter-done {
        transform:translateY(-52px);
    }
        
    .scrollUp-exit {
        transform:translateY(-52px);
        transition: all 200ms ease-out;
    }
        
    .scrollUp-exit-active {
        transform:translateY(0);
    }
        
    .scrollUp-exit-done {
        transform:translateY(0);
    }
`

export const Header1 = styled.div`
    height:52px;
    padding:0;
    
    a,svg{
        display:inline-block; 
        vertical-align:middle; 
        padding:0;
        margin:0; 
    }
    
    .zhihuLogo {
        margin-right:15px;
        float:left;
        margin-top:11px;
    }
    
    .leftA,.rightA{
        line-height: 52px;
        padding: 0 20px;
        float:left;
    }
    
    a:link,a:visited,a:hover,a:active {
        text-decoration:none;
    }
    
    a.leftA:hover {
        color:#175199;
    }
    
    .leftA {
        color:#8590a6;
        font-size: 15px;
    }
    
    .rightA {
        font-size: 25px;
        float:right;
        color: #8590a6;
    }
    
    .search {
        display:inline-block; 
        width:326px;
        height:34px;
        margin:9px 0;
        padding:5px 0;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        background: #f6f6f6;
        position:relative;
        margin-left:18px;
        float:left;

        
        input {
            width:100%;
            text-indent:1em;
            height:24px;
            background:rgba(0,0,0,0);
            z-index:30;
        }
       
        .iconfont {
            position:absolute;
            top:7px;
            right:10px;
            font-size: 14px;
            line-height:20px;
            color: #8590a6;
        }
    }
    
    button {
            position:absolute;
            top:-1px;
            left:341px;
            width:58px;
            height:34px;
            color: #fff;
            background-color: #0084ff;
            border-radius:3px;
            z-index:-1;
    }
    
    .SearchSel{
            opacity:0;
    }
    
    button:hover {
            background-color: #0074ff;
    }
    
    .search-enter {
        width:326px;
        background: #f6f6f6;
        border: 1px solid #ebebeb;
        transition: all 200ms ease-out;
        
        .SearchSel{
            opacity:0;
            transition: all 200ms ease-out;
        }
        
        button {
            transform:scale(1);
            transition: all 200ms ease-out;
        }
    }
    
    .search-enter-active {
        width:400px;
        background: #ffffff;
        border: 1px solid #8590a6;
        
        .SearchSel{
            opacity:1.0;
        }
        
        button{
            transform:scale(0);
        }
    }
    
    .search-enter-done {
        width:400px;
        background: #ffffff;
        border: 1px solid #8590a6;
        
        .SearchSel{
            opacity:1.0;
        }
        
        button{
            transform:scale(0);
        }
    }
    
    .search-exit {
        width:400px;
        background: #ffffff;
        border: 1px solid #8590a6;
        transition: all 200ms ease-out;
        
        .SearchSel{
            opacity:1.0;
            transition: all 200ms ease-out;
        }
        
        button{
            transform:scale(0);
            transition: all 200ms ease-out;
        }
    }
    
    .search-exit-active {
        width:326px;
        background: #ffffff;
        border: 1px solid #ebebeb;
        
        .SearchSel{
            opacity:0;
        }
        
        button{
            transform:scale(1);
        }
    }
    
    .search-exit-done {
        width:326px;
        background: #f6f6f6;
        border: 1px solid #ebebeb;
        
        .SearchSel{
            opacity:0;
        }
        
        button{
            transform:scale(1);
        }
    }
    
`

export const SearchSel = styled.div`
        position:absolute;
        width:400px;
        top:40px;
        left:0;
        background:white;
        border: 1px solid #ebebeb;
        box-shadow: 0 5px 20px rgba(26,26,26,.1);
        border-radius:3px;
        padding-bottom:5px;
        z-index:31;

        div {
            height:35px;
            line-height:35px;
            color:#333;
            
            &.searchItem {
                padding:0 15px;
                cursor:pointer;
            }

            &.hot {
                height:40px;
                line-height:40px;
                color:#8590a6;
                border-bottom: 1px solid #ebebeb;
                margin:0 15px;
                
                .iconfont {
                    position:static;
                    float:right;
                    height:40px;
                    line-height:40px;
                    font-size:14px;
                    padding-right:5px;
                }
                
                a.iconfont:hover {
                    color:#175199;
                }
            }
            
            &.searchItem:hover {
                background:#f6f6f6;
            }
        }
`
export const Header2 = styled.div`
    height:52px;
    
        a,svg{
            display:inline-block; 
            vertical-align:middle; 
            padding:0;
            margin:0; 
        }
        
        .zhihuLogo {
            margin-right:15px;
            float:left;
            margin-top:11px;
        }
        
        .selA {
            box-sizing:border-box;
            font-weight:bold;
            border-bottom:2px solid #0084ff;
        }
        
        .leftA{
            height:52px;
            line-height: 52px;
            margin: 0 20px;
            float:left;
            color: #444;
            font-size: 16px;
        }
        
        a:link,a:visited,a:hover,a:active {
            text-decoration:none;
        }
        
        a.leftA:hover {
            color:#175199;
        }
    
        .search {
            display:inline-block; 
            width:216px;
            height:34px;
            margin:9px 0;
            padding:5px 0;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            background: #f6f6f6;
            position:relative;
            margin-left:18px;
            float:right;
    
            
            input {
                width:100%;
                text-indent:1em;
                height:24px;
                background:rgba(0,0,0,0);
            }
           
            .iconfont {
                position:absolute;
                top:7px;
                right:10px;
                font-size: 14px;
                line-height:20px;
                color: #8590a6;
            }
        }
     
        button {
                width:58px;
                height:34px;
                margin-top:9px;
                margin-left:15px;
                color: #fff;
                background-color: #0084ff;
                border-radius:3px;
                float:right;
        }
        
        button:hover {
            background-color: #0074ff;
        }
        
        .search-enter {
            background: #f6f6f6;
            border: 1px solid #ebebeb;
            transition: all 200ms ease-out;
    
        }
        
        .search-enter-active {
            background: #ffffff;
            border: 1px solid #8590a6;
        }
        
        .search-enter-done {
            background: #ffffff;
            border: 1px solid #8590a6;
        }
        
        .search-exit {
            background: #ffffff;
            border: 1px solid #8590a6;
            transition: all 200ms ease-out;
        }
        
        .search-exit-active {
            background: #ffffff;
            border: 1px solid #ebebeb;
    
        }
        
        .search-exit-done {
            background: #f6f6f6;
            border: 1px solid #ebebeb;
        }
`
