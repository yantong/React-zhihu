import React,{ Component,Fragment } from 'react';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import {
    RightContent,
    TopContent,
    Menu,
    Advertise,
    UserList,
    Note
} from './RightStyled'
import { CSSTransition } from 'react-transition-group';

class Right extends Component {

    constructor(props) {
       super(props);
       this.state = {
            hideAdv1 : false,
            hideAdv2 : false,
            showDel1 : false,
            showDel2 : false,
            fixRight : false,
            fixRightY : 0,
            fixRightX : 0
       };

       this.contentRef = React.createRef();
       this.fixScrooY = 0;

       this.delHover = this.delHover.bind(this);
       this.delUnHover = this.delUnHover.bind(this);
       this.delAdv = this.delAdv.bind(this);
       this.getDivXY = this.getDivXY.bind(this);
       this.getScroll = this.getScroll.bind(this);
       this.winResize = this.winResize.bind(this);
       this.winScroll = this.winScroll.bind(this);
       this.getFixScrollY = this.getFixScrollY.bind(this);
       this.setFix = this.setFix.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize",this.winResize);
        window.addEventListener("scroll",this.winScroll);

        this.getFixScrollY();
    }

    componentWillUnmount() {
        window.removeEventListener("resize",() => {});
        window.removeEventListener("scroll",() => {});
    }

    getScroll() {
        return {
            top: document.documentElement.scrollTop || document.body.scrollTop,
            left: document.documentElement.scrollLeft || document.body.scrollLeft
        }
    }

    getDivXY(divObj){

        if(!divObj)
        {
            return ;
        }

        return {'width':divObj.offsetWidth,'height':divObj.offsetHeight,
            'x':divObj.offsetLeft,'y':divObj.offsetTop,
            'scrollLeft':this.getScroll().left,'scrollTop':this.getScroll().top};
    }

    getFixScrollY() {
        let childs = this.contentRef.current.children;
        let selChild = 0;
        let lastChildXy = this.getDivXY(childs[childs.length - 1]);
        let XY1 =  lastChildXy.y + lastChildXy.height;

        console.log(childs);

        for(let i = childs.length - 2;i >= 0;i --)
        {
            let XY =  this.getDivXY(childs[i]).y;
            if(!XY)
                continue;

             console.log('i = ' + i + '  y = ' + XY  + '  document.body.clientHeight = ' + document.body.clientHeight);
            if(XY1 - XY > document.body.clientHeight - 10 - 52)
            {
                selChild = i + 1;

                break ;
            }
        }

        this.fixScrooY = this.getDivXY(childs[selChild]).y - 10 - 52;
    }

    setFix() {
        let fixRightX2 =  document.body.clientWidth > 1000 ? 1000 + (document.body.clientWidth - 1000)/2 - 296 : 1000 - 296;
        this.setState({
            fixRight : true,
            fixRightX : fixRightX2,
            fixRightY : -this.fixScrooY
        });
    }

    winScroll(e) {
        if(window.pageYOffset >= this.fixScrooY + 10 + 52)
        {
            this.setFix();
        }
        else
        {
            this.setState({
                fixRight: false
            });
        }
    }

    winResize(e) {
        this.getFixScrollY();
        if(this.state.fixRight)
        {
            this.setFix();
        }
    }

    delHover(e) {
        if(e.target.id === 'adv1')
        {
            this.setState({
                showDel1 : true
            });
        }
        else if(e.target.id === 'adv2')
        {
            this.setState({
                showDel2 : true
            });
        }
    }

    delUnHover(e) {
        console.log(e.target.id);
        this.setState({
            showDel1 : false,
            showDel2 : false
        });
    }

    delAdv(e) {
            this.setState(e.target.id === 'adv2' ? {hideAdv2 : true} : {hideAdv1 : true},
                () => {
                this.getFixScrollY();
                if(this.state.fixRight)
                {
                    this.setFix();
                }
            });

    }



    render() {
        return (
            <RightContent ref={this.contentRef}
                          style={{position: this.state.fixRight ? 'fixed' : '',
                              top: this.state.fixRightY + 'px',
                              left: this.state.fixRightX + 'px',
                              float: !this.state.fixRight ? 'right' : ''
                          }}
            >
                <TopContent className={'card'}>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="#8590a6"
                                 viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path
                                    d="M9.273 5.63c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v6.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V8.18c0-1.079-.065-1.407-.248-1.743a1.348 1.348 0 0 0-.576-.564c-.343-.18-.68-.243-1.782-.243H9.273zm0-1.63h5.454c1.486 0 2.025.151 2.568.436.543.284.97.7 1.26 1.232.29.532.445 1.059.445 2.512v6.64c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 16.8 5 16.273 5 14.82V8.18c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232C7.248 4.15 7.787 4 9.273 4zM8.5 8.076v1.467h7V8.076h-7zm0 2.609v1.467h7v-1.467h-7zm0 2.608v1.468h4.667v-1.468H8.5z"></path>
                            </svg>
                            <p href="">写回答</p>
                        </a>
                    </div>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="#8590a6" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path
                                    d="M15.764 7.279l-3.76 3.765c-.428.43-.555.567-.667.713a1.666 1.666 0 0 0-.208.348c-.076.167-.137.344-.314.926l-.073.243.242-.074c.58-.177.757-.238.925-.314.13-.06.232-.12.347-.209.146-.112.282-.239.712-.668l3.759-3.766-.963-.964zm.963-.965l.963.965.685-.686c.167-.168.227-.263.253-.349a.187.187 0 0 0 0-.12c-.026-.086-.086-.18-.253-.348l-.148-.148c-.167-.167-.262-.228-.348-.254a.187.187 0 0 0-.12 0c-.085.026-.18.087-.347.254l-.685.686zm.87 5.471l1.702-1.705v5.549c0 1.52-.158 2.07-.455 2.626a3.096 3.096 0 0 1-1.287 1.29c-.555.297-1.105.455-2.623.455h-5.57c-1.517 0-2.068-.158-2.622-.455a3.096 3.096 0 0 1-1.287-1.29C5.158 17.7 5 17.15 5 15.63v-5.58c0-1.52.158-2.071.455-2.627a3.096 3.096 0 0 1 1.287-1.289c.554-.297 1.105-.455 2.622-.455h3.497l-1.702 1.705H9.364c-1.126 0-1.47.066-1.82.254-.258.138-.45.33-.588.59-.188.35-.254.694-.254 1.822v5.58c0 1.128.066 1.472.254 1.822.138.259.33.452.588.59.35.188.694.254 1.82.254h5.57c1.127 0 1.47-.066 1.82-.254.258-.138.45-.331.589-.59.187-.35.253-.694.253-1.822v-3.844zm1.593-7.121l.148.147c.33.33.502.616.594.918.09.301.09.61 0 .911-.092.302-.265.587-.594.917l-5.408 5.416c-.486.487-.648.635-.845.786a3.02 3.02 0 0 1-.614.37c-.226.102-.433.176-1.091.376l-.852.26a1.021 1.021 0 0 1-1.275-1.277l.26-.854c.2-.659.273-.866.375-1.092.103-.227.218-.418.369-.616.15-.197.299-.36.785-.846l5.407-5.416c.33-.33.614-.504.915-.595.301-.092.61-.092.91 0 .301.09.586.264.916.595z"></path>
                            </svg>
                            <p href="">写文章</p>
                        </a>
                    </div>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="#8590a6" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path
                                    d="M16.63 6.02V4h1.35v2.02H20v1.35h-2.02V9.4h-1.35V7.36H14.6V6.02h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45h4.78v1.7H8.3c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V10.9l.02.02zm-3.86-.22c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2a.628.628 0 0 0-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0l1.93 1.95c.24.25.63.25.87 0l.03-.02a.67.67 0 0 0 0-.93.687.687 0 0 0-.58-.17c-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9l.01-.01z"></path>
                            </svg>
                            <p href="">写想法</p>
                        </a>
                    </div>
                </TopContent>
                <Menu className={'card'}>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="rgb(255, 207, 0)" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path d="M13.693 10.354l1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376z"></path>                            </svg>
                            <p href="">Live</p>
                        </a>
                    </div>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="rgb(67, 212, 128)" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z" fillRule="evenodd"></path>                            </svg>
                            <p href="">书店</p>
                        </a>
                    </div>
                    <div className={'contanier'}>
                        <a href='#'>
                            <svg fill="rgb(0, 132, 255)" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path d="M10.786 8.41a8.938 8.938 0 0 0-3.968-2.528c-.305-1.719.814-3.337 2.442-3.741 1.221-.405 2.646.101 3.46 1.011 1.045 1.38.915 3.64.814 4.348-.102 1.315-1.221 3.034-1.323 3.135-.305-.809-.814-1.517-1.425-2.225zm-2.442 2.832c-1.526.202-3.052 1.01-4.171 2.123-1.12-.404-1.934-1.314-2.137-2.427-.316-2.427 1.526-3.64 2.849-3.842 1.628-.371 2.849.505 4.07 1.415 1.146 1.012 2.035 2.63 2.035 2.73-.916-.202-1.832-.1-2.646 0zm4.986.303c.509-.607.931-1.586 1.12-2.225.318-1.039.61-3.134.203-4.651 1.323-1.011 3.154-1.011 4.477.303 1.235 1.146 1.017 2.933.814 3.438-.663 1.581-1.933 2.326-3.256 2.832-1.221.404-3.256.303-3.358.303zm-2.645 1.011c-.51.607-.916 1.416-1.221 2.326-.407 1.314-.643 3.06-.102 4.55-1.323 1.011-3.256 1.011-4.477-.202-1.198-1.124-1.018-2.932-.814-3.438.599-1.605 1.933-2.326 3.256-2.831.916-.304 3.256-.405 3.358-.405zm9.259-1.82c1.017.404 1.933 1.315 2.035 2.427.233 2.57-1.526 3.64-2.849 3.842-1.526 0-2.85-.505-4.07-1.415-1.018-.81-2.035-2.528-2.035-2.63.916.203 1.831.102 2.645 0 1.628-.404 3.053-1.112 4.274-2.224zm-6.716 4.854c1.065 1.08 2.442 2.022 4.07 2.528.306 1.719-.814 3.235-2.442 3.741-1.22.405-2.645-.101-3.46-1.011-1.1-1.481-1.017-3.54-.915-4.247.102-1.315 1.221-3.034 1.323-3.135.305.708.721 1.44 1.424 2.124z"></path>
                            </svg>
                            <p href="">圆桌</p>
                        </a>
                    </div>
                    <div className={'contanier bottomItem'}>
                        <a href='#'>
                            <svg fill="rgb(15, 136, 235)" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path>                            </svg>
                            <p href="">专栏</p>
                        </a>
                    </div>
                    <div className={'contanier bottomItem'}>
                        <a href='#'>
                            <svg fill="rgb(84, 120, 240)" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path d="M11.267 10.188h-2.69a.26.26 0 0 0-.261.26v.508c0 .149.117.26.262.26h2.896v1.54H8.578a.26.26 0 0 0-.262.259v.508c0 .15.117.26.262.26h2.896v2.31c0 .139.119.257.265.257h.522a.258.258 0 0 0 .265-.257v-2.31h2.896a.26.26 0 0 0 .262-.26v-.508a.257.257 0 0 0-.262-.26h-2.896v-1.54h2.896a.26.26 0 0 0 .262-.26v-.507a.257.257 0 0 0-.262-.26h-2.69l2.51-2.636a.26.26 0 0 0-.004-.366l-.423-.413a.253.253 0 0 0-.36.01L12 9.418 9.545 6.784a.248.248 0 0 0-.36-.011l-.423.413a.264.264 0 0 0-.004.366l2.509 2.636zM12 19.973c-1.101 0-2.16-.15-3.152-.43-.532.18-5.27 2.177-4.743 1.179.527-.998 1.58-2.746.806-3.25C3.11 15.936 2 13.822 2 11.486 2 6.8 6.477 3 12 3s10 3.8 10 8.487-4.477 8.486-10 8.486z"></path>
                            </svg>
                            <p href="">付费咨询</p>
                        </a>
                    </div>
                </Menu>
                {
                    !this.state.hideAdv1 ?
                        <CSSTransition
                            in={this.state.showDel1}
                            timeout={200}
                            classNames="delShow"
                        >
                            <Advertise className={'card'}>
                                <Tooltip placement="bottom" title={'不再显示'} arrowPointAtCenter>
                                        <div className={'delbt'}>
                                            <svg width="14" height="16" viewBox="0 0 12 12" fill={'white'}
                                                 style={{height: '16px',width: '14px'}}
                                                 id="adv1"
                                                 onMouseEnter={this.delHover}
                                                 onMouseLeave={this.delUnHover}
                                                 onClick={this.delAdv}
                                            >
                                                <g>
                                                    <path fillRule="evenodd" d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"></path>
                                                </g>
                                            </svg>
                                        </div>
                                </Tooltip>
                                <img src="https://pic2.zhimg.com/v2-620dc984ffd6014a4f81e496a091b611_270x225%7Cadx4.jpeg" alt=""/>
                            </Advertise>
                        </CSSTransition>
                        : null
                }
                <UserList className={'card'}>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path
                                d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                                fillRule="evenodd"></path>
                        </svg>
                        我的收藏
                    </div>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path d="M5.74 4h12.52c.961 0 1.74.775 1.74 1.73V16.27c0 .955-.779 1.73-1.74 1.73h-3.825l-1.658 2.044a1 1 0 0 1-1.554 0l-1.658-2.044H5.74C4.78 18 4 17.224 4 16.27V5.73C4 4.775 4.778 4 5.74 4zM12 16a.976.976 0 0 0 .705-.287.951.951 0 0 0 .295-.712.954.954 0 0 0-.295-.714A.976.976 0 0 0 12 14a.962.962 0 0 0-.705.295A.961.961 0 0 0 11 15c0 .284.098.522.295.713A.975.975 0 0 0 12 16zm1.278-4.924a36.81 36.81 0 0 0 1.023-.975c.19-.193.354-.422.492-.688.138-.266.207-.575.207-.928 0-.448-.12-.864-.363-1.246a2.517 2.517 0 0 0-1.029-.906C13.164 6.111 12.652 6 12.072 6c-.624 0-1.17.133-1.638.399-.468.265-.824.6-1.068 1.005-.244.405-.366.804-.366 1.2 0 .19.077.368.231.531a.747.747 0 0 0 .567.246c.38 0 .638-.234.774-.703.144-.449.32-.788.528-1.019.208-.23.532-.345.972-.345.376 0 .683.114.921.342.238.229.357.51.357.841 0 .17-.039.328-.117.473a1.782 1.782 0 0 1-.288.396c-.114.118-.3.294-.555.526a9.71 9.71 0 0 0-.696.688c-.172.194-.31.418-.414.673a2.391 2.391 0 0 0-.156.906c0 .278.071.488.213.63a.716.716 0 0 0 .525.211c.4 0 .638-.216.714-.648.044-.203.077-.345.099-.426.022-.081.053-.162.093-.243.04-.081.101-.17.183-.268.082-.098.191-.21.327-.34z" fillRule="evenodd"></path>
                        </svg>
                        我关注的问题
                        <div className={'badge'}>1</div>
                    </div>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path d="M4 10V8a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2H6v2a1 1 0 0 1-2 0v-2H2a1 1 0 0 1 0-2h2zm10.455 2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-7 6c0-2.66 4.845-4 7.272-4C17.155 14 22 15.34 22 18v1.375c0 .345-.28.625-.625.625H8.08a.625.625 0 0 1-.625-.625V18z" fillRule="evenodd"></path>
                        </svg>
                        我的邀请
                        <div className={'badge'}>14</div>
                    </div>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path d="M21.515 10.131c-1.1.567-1.471.996-1.471 1.869s.388 1.348 1.471 1.869c.356.26.485.429.485.934v2.803c0 .766-.647 1.394-1.471 1.394H3.47C2.663 19 2 18.387 2 17.606v-2.803c0-.26.08-.674.517-.934.615-.2 1.456-.613 1.456-1.869 0-.965-.793-1.578-1.472-1.869-.452-.23-.485-.52-.485-.934V6.394C2.016 5.628 2.663 5 3.487 5H20.53C21.337 5 22 5.613 22 6.394v2.803c0 .398 0 .628-.485.934zM10.5 12c0 .834.672 1.5 1.5 1.5.834 0 1.5-.672 1.5-1.5 0-.834-.672-1.5-1.5-1.5-.834 0-1.5.672-1.5 1.5zm5 0c0 .834.672 1.5 1.5 1.5.834 0 1.5-.672 1.5-1.5 0-.834-.672-1.5-1.5-1.5-.834 0-1.5.672-1.5 1.5zm-10 0c0 .834.672 1.5 1.5 1.5.834 0 1.5-.672 1.5-1.5 0-.834-.672-1.5-1.5-1.5-.834 0-1.5.672-1.5 1.5z"></path>
                        </svg>
                        我的礼劵
                    </div>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path d="M5.74 4h12.52c.961 0 1.74.775 1.74 1.73V16.27c0 .955-.779 1.73-1.74 1.73h-3.825l-1.658 2.044a1 1 0 0 1-1.554 0l-1.658-2.044H5.74C4.78 18 4 17.224 4 16.27V5.73C4 4.775 4.778 4 5.74 4zM7 8.98c0 .554.449.996 1.003.996h4.994A.992.992 0 0 0 14 8.981a.997.997 0 0 0-1.003-.995H8.003A.992.992 0 0 0 7 8.98zm0 4c0 .554.446.996.995.996h8.01a.993.993 0 0 0 .995-.995.993.993 0 0 0-.995-.995h-8.01A.993.993 0 0 0 7 12.98z" fillRule="evenodd"></path>
                        </svg>
                        社区服务中心
                    </div>
                    <div>
                        <svg fill="#8590a6" viewBox="0 0 24 24"
                             width="18" height="18">
                            <path d="M5.74 4h12.52c.961 0 1.74.775 1.74 1.73V16.27c0 .955-.779 1.73-1.74 1.73h-3.825l-1.658 2.044a1 1 0 0 1-1.554 0l-1.658-2.044H5.74C4.78 18 4 17.224 4 16.27V5.73C4 4.775 4.778 4 5.74 4zM7 8.98c0 .554.449.996 1.003.996h4.994A.992.992 0 0 0 14 8.981a.997.997 0 0 0-1.003-.995H8.003A.992.992 0 0 0 7 8.98zm0 4c0 .554.446.996.995.996h8.01a.993.993 0 0 0 .995-.995.993.993 0 0 0-.995-.995h-8.01A.993.993 0 0 0 7 12.98z" fillRule="evenodd"></path>
                        </svg>
                        版权服务中心
                    </div>
                </UserList>
                {
                    !this.state.hideAdv2 ?
                        <CSSTransition
                            in={this.state.showDel2}
                            timeout={200}
                            classNames="delShow"
                        >
                            <Advertise className={'card'}>
                                <Tooltip placement="bottom" title={'不再显示'} arrowPointAtCenter>
                                        <div className={'delbt'}>
                                            <svg width="14" height="16" viewBox="0 0 12 12" fill={'white'}
                                                 style={{height: '16px',width: '14px'}}
                                                 id="adv2"
                                                 onMouseEnter={this.delHover}
                                                 onMouseLeave={this.delUnHover}
                                                 onClick={this.delAdv}
                                            >
                                                <g>
                                                    <path fillRule="evenodd" d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"></path>
                                                </g>
                                            </svg>
                                        </div>
                                </Tooltip>
                                <img src="https://pic4.zhimg.com/v2-3f614667118c00475a58eefb433005ab_540x450%7Cadx4.jpeg" alt=""/>
                            </Advertise>
                        </CSSTransition>
                        : null
                }

                <Note>
                    刘看山 . 知乎指南 . 知乎协议 . 隐私政策 <br/>
                    应用 . 工作申请 . 开通知乎机构号<br/>
                    侵权举报 . 网上有害信息举报专区<br/>
                    违法和不良信息举报：010-82716601<br/>
                    儿童色情信息举报专区<br/>
                    电信与服务业务经营许可证<br/>
                    网络文化经营许可证<br/>
                    联系我们 © 2018 知乎<br/>
                </Note>
            </RightContent>
        )
    }
}
export default Right;