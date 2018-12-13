import styled,{createGlobalStyle} from 'styled-components';

export const AdvPopStyle = createGlobalStyle`
    .ant-popover-inner-content {
        padding:12px 0 !important; 
    }
    .advPop {
        p {
            margin:0;
            padding:5px 20px;
            color: #8590a6;
        }
        
        p:hover {
            background:#f6f6f6;
        }
    }
`
export const Content = styled.div`
    margin-top:1px;
    background:white;
    padding:20px;
    overflow: hidden;
    
    .title {
        font-size: 18px;
        font-weight: 600;
        font-synthesis: style;
        line-height: 1.6;
        color: #1a1a1a;
    }
    
    .shortContent,a.more {
        font-size: 15px;
        line-height: 1.67;
    }
    
    .shortContent {
        color: #1a1a1a;
        margin-top:5px;
    }
    
    a.more {
        margin-left: 4px;
        color: #175199;
    }
    
    .fotter {
        margin-top:5px;
    }
    .agreeBt,.disagreeBt {
        border:1px solid red;
        padding: 0 12px;
        line-height: 30px;
        color: #0084ff;
         background: rgba(0,132,255,.1);
        border-color: transparent;
        border-radius: 3px;
        font-size: 14px;
        margin-right:5px;
    }
    
    .agreeBt {
            svg {
            margin-right:5px;
        }
    }
    
    .operateA {
        margin-left: 24px;
        font-size: 14px;
        color: #8590a6;
        line-height:32px;
        
        svg {
            display:inline-block;
            vertical-align:middle;
            margin-right:5px;
        }
    }
    
    .advImg {
        float:left;
        width:200px;
        margin-right: 20px;
    }
    
    .advContent,.toSee {
        line-height: 27px;
        margin-top: 6px;
        word-break: break-word;
        font-size: 15px;
        color: #1a1a1a;
    }
    
    .toSee {
        color: #8590a6;
    }
    
    .sdvLogo {
        height: 20px;
        margin-right: 15px;
    }
    
    .shortAdvtitle {
        color: #8590a6;
    }
    
    .advOpera {
        padding:0 6px;
        color: #8590a6;
        border-radius: 3px;
        font-size: 13px;
        float: right;
        background: #f6f6f6;
        height: 30px;
        line-height: 30px;
        
        
        svg {
            display:inline-block;
            vertical-align:middle;
            margin-top:-3px;
        }
    }
    
    .advTop,.shortContent {
        overflow: hidden;
    }
`