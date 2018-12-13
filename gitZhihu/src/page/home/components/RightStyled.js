import styled from 'styled-components';

export const RightContent = styled.div`
    width:296px;
    z-index:29;

    .card {
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        background:white;
    }
`
export const TopContent = styled.div`    
    div.contanier {
        display:inline-block;
        width:33.3%;
                
        a {
            display:inline-block;
            margin:23px auto;
        }
        
        p {
            font-size:16px;
            color:#444;
            margin:0;
            padding:0;
            
            :hover {
                color:#175199;
            }
        }
    }
`

export const Menu = styled.div`
    margin-top:10px;
    overflow:hidden;
    
     div.contanier {
        display:inline-block;
        width:33.3%;
        float:left;
        
                
        a {
            display:inline-block;
            margin:23px auto;
        }
        
        p {
            font-size:16px;
            color:#8590a6;
            margin:0;
            padding:0;
            
            :hover {
                color:#175199;
            }
        }
    }
    
    div.bottomItem a {
        margin-top:0;
    }
`

export const Advertise = styled.div`
    margin-top:10px;
    width:100%;
    position:relative;

    img {
        width:100%;
    }
    
    .delbt {
        position:absolute;
        top:10px;
        right:10px;
        width:18px;
        height:18px;
        border-radius:9px;
        background-color: #1a1a1a;
        opacity:0;

        svg {
            margin:1px 2px;
        }
    }
    
    &.delShow-enter {
        .delbt {
            opacity:0;
            transition: all 200ms ease-out;
        }
    }
    
    &.delShow-enter-active {
         .delbt {
             opacity:1;
         }
    }
    
    &.delShow-enter-done {
        .delbt {
             opacity:1;
         }
    }
    
    &.delShow-exit {
        .delbt {
            opacity:1;
            transition: all 200ms ease-out;
        }
    }
    
    &.delShow-exit-active {
        .delbt {
            opacity:0;
        }
    }
    
    &.delShow-exit-done {
        .delbt {
            opacity:0;
        }
    }
`
export const UserList = styled.div`
    padding:5px 0;
    margin-top:10px;
    
    div {
        text-align:left;
        line-height:40px;
        font-size: 14px;
        padding:0 25px 0 25px;
        color: #8590a6;
        
        :hover {
            background: #f6f6f6; 
        }
        
        svg {
            margin:11px 0;
            margin-right:10px;
            float:left
        }
        
        .badge {
            line-height:26px;
            margin:7px 0;
            float:right;
            padding:0 10px;
            color:#8590a6;
            background: #f6f6f6;
            border-radius:2px;
        }
    }
`
export const Note = styled.div`
        margin-top:10px;
        text-align:left;
        font-size: 13px;    
        line-height: 30px;
        color: #8590a6;
`