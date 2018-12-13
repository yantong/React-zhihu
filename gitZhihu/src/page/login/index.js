import React,{Component,Fragment} from 'react';
import  RegisterPage  from './component/RegistCom';
import  LoginPage  from './component/LoginCom';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../../styled.js';

import {
    AppDownLoad,
    Footer,
    CallBack,
    LoginGlobalStyle
}
from './styled';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin : true
        };
        this.toLoginOrreg = this.toLoginOrreg.bind(this);
    }

    toLoginOrreg(){
        this.setState(
            {
                isLogin : !this.state.isLogin
            }
        );
    }
    render() {
        return (
            <Fragment>
                <GlobalStyle></GlobalStyle>
                <LoginGlobalStyle></LoginGlobalStyle>
                {
                    this.state.isLogin ? <LoginPage toLoginOrreg={this.toLoginOrreg}></LoginPage> : <RegisterPage toLoginOrreg={this.toLoginOrreg}></RegisterPage>
                }
                <AppDownLoad>下载知乎 APP</AppDownLoad>
                <Footer>知乎专栏圆桌发现移动应用联系我们来知乎工作注册机构号<br/>
                    © 2018 知乎京 ICP 证 110745 号京公网安备 11010802010035 号出版物经营许可证<br/>
                    侵权举报网上有害信息举报专区儿童色情信息举报专区违法和不良信息举报：010-82716601<br/>
                    <div className={'bottomA'}>诚信网站示范企业</div>
                </Footer>
                <Tooltip placement="leftTop" title={'建议反馈'} arrowPointAtCenter>
                    <CallBack>
                        <svg title="建议反馈" fill="#8590a6" viewBox="0 0 24 24" width="24"
                             height="24">
                            <path
                                d="M19.99 6.99L18 5s-1-1-2-1H8C7 4 6 5 6 5L4 7S3 8 3 9v9s0 2 2.002 2H19c2 0 2-2 2-2V9c0-1-1.01-2.01-1.01-2.01zM16.5 5.5L19 8H5l2.5-2.5h9zm-2 5.5s.5 0 .5.5-.5.5-.5.5h-5s-.5 0-.5-.5.5-.5.5-.5h5z"></path>
                        </svg>
                    </CallBack>
                </Tooltip>
            </Fragment>
        );
    }
}

export default Login;
