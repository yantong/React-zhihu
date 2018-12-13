import React,{ Component } from 'react';
import {
    LoginForm,
    Tip,
    InputContanier,
    SoundCheck,
    RegisterConvention,
    ToLogin,
    CountrySelect
} from './registerStyle'

class RegisterPage extends Component {

    constructor(props){
        super(props);
        this.countrysPhoneHeads = [
        '* 81 -- 中华人民共和国日本',
        '* 82 -- 韩国',
        '* 84 -- 越南',
        '* 850 -- 朝鲜',
        '* 852 -- 香港',
        '* 853 -- 澳门',
        '* 855 -- 柬埔寨',
        '* 856 -- 老挝',
        '* 86 -- 中华人民共和国',
        '* 878 -- 环球个人通讯服务',
        '* 880 -- 孟加拉国',
        '* 881 -- 移动卫星系统',
        '* 882 -- 国际网络',
        '* 886 -- 台湾省',
        '* 90 --土耳其',
        '* 91 -- 印度',
        '* 92 -- 巴基斯坦',
        '* 93 --阿富汗',
        '* 94 --斯里兰卡',
        '* 95 --缅甸',
        '* 960 --马尔代夫',
        '* 961 --黎巴嫩',
        '* 962 --约旦',
        '* 963 --叙利亚',
        '* 964 --伊拉克',
        '* 965 --科威特',
        '* 966 --沙特阿拉伯',
        '* 967 --也门',
        '* 968 --阿曼',
        '* 969 -- 也门民主共和国',
        '* 970 -- 巴勒斯坦',
        '* 971 --阿拉伯联合酋长国',
        '* 972 --以色列',
        '* 973 --巴林',
        '* 974 --卡塔尔',
        '* 975 --不丹',
        '* 976 --蒙古',
        '* 977 --尼泊尔',
        '* 1：美国',
        '* 1：加拿大',
        '* 1-264：安圭拉岛',
        '* 1-268：安提瓜和巴布达',
        '* 1-242：巴哈马',
        '* 1-246：巴巴多斯',
        '* 1-441：百慕大',
        '* 1-284：英属维京群岛',
        '* 1-345：开曼群岛',
        '* 1-684：美属萨摩亚',
        '* 1-767：多米尼克',
        '* 1-809：多米尼加共和国',
        '* 1-473：格林纳达'
        ];
        this.state = {
            selectCountry : 0,
            showCountryList : false
        }
        this.showCountry = this.showCountry.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
    }

    showCountry(){
        this.setState({
            showCountryList : true
        });
    }

    selectCountry(e,index){
        e.stopPropagation();
        this.setState({
            showCountryList : false,
            selectCountry : index
        });
    }


    render() {
        return (
            <LoginForm>
                <svg className={'zhihuSvg'} viewBox="0 0 200 91"
                     style={{
                         width:'140px',
                         height:'65.6px',
                         margin:'20px 0'
                     }}>
                    <g>
                        <path fill='#0084ff' d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fillRule="evenodd">
                        </path>
                    </g>
                </svg>
                <Tip>注册知乎，发现更大的世界</Tip>
                <InputContanier className={'phoneNum'}>
                    <div onClick={this.showCountry} className={'countrys'}>
                        <span>{this.countrysPhoneHeads[this.state.selectCountry]}</span>
                        <svg fill="currentColor" viewBox="0 0 24 24" width="24"
                             height="49">
                            <path
                                d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
                                fillRule="evenodd"></path>
                        </svg>
                        <span className={'sperator'}>|</span>
                        <CountrySelect className={this.state.showCountryList ? '' : 'hide'}>
                            {
                                    this.countrysPhoneHeads.map((item,index) => {
                                        return <li
                                                    onClick={(e) => this.selectCountry(e,index)}
                                                    className={index == this.state.selectCountry ? 'seleLi' : ''}
                                                    key={item}
                                                >
                                                    {item}
                                                </li>;
                                    })
                            }
                        </CountrySelect>
                    </div>
                    <input type="text" placeholder={'手机号'}/>
                </InputContanier>
                <InputContanier className={'phoneCheck'}>
                    <input type="text" placeholder={'输入6位短信验证码'}/>
                    <button>获取短信验证码</button>
                </InputContanier>
                <SoundCheck>
                    <button className={'getSound'}>
                        获取语音验证码
                    </button>
                </SoundCheck>
                <button className={'regesterBt'}>注册</button>
                <RegisterConvention>
                    注册即代表同意
                    <a href="https://www.zhihu.com/terms">《知乎协议》</a>
                    <a href="https://www.zhihu.com/terms/privacy">《隐私政策》</a>
                    <a href="https://www.zhihu.com/org/signup" className={'register'}>注册机构号</a>
                </RegisterConvention>
                <ToLogin>
                    已有帐号?
                    <a href="javascript:void(0)" onClick={this.props.toLoginOrreg}>登录</a>
                </ToLogin>
            </LoginForm>
        );
    }
}

export default RegisterPage;