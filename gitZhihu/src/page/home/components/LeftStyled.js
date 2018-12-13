import styled from 'styled-components';

export const LeftContent = styled.div`
    width:694px;
    float:left;
    text-align:left;
    background:rgba(0,0,0,0);
`

export const LeftHeader = styled.div`
    border-top-left-radius:2px;
    border-top-right-radius:2px;
    background:white;

    a {
        display:inline-block;
        padding: 15px 0;
        color: #1a1a1a;
        font-size: 16px;
        margin:0 20px;
        
        &.selA {
            box-sizing: border-box;
            font-weight: bold;
            border-bottom: 3px solid #0084ff;
        }
    }
`