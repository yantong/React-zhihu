import React,{ Component,Fragment } from 'react';
import '../../../iconFont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

import {
    HeaderDiv,
    ContentStyle,
    Header1,
    Header2,
    SearchSel
} from './HeaderStyled'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            search2HasFocused : false,
            searchHasFocused : false,
            clearAllSearch : false,
            searchArray : [],
            hotArray : [],
            headerScrollUp : false
        };

        this.searchInputRef = React.createRef();
        this.preYOffset = 0;
        this.focusTimeId = 0;

        this.searchOnFocus = this.searchOnFocus.bind(this);
        this.searchOnblur = this.searchOnblur.bind(this);
        this.search2OnFocus = this.search2OnFocus.bind(this);
        this.search2Onblur = this.search2Onblur.bind(this);
        this.clearAllSearch = this.clearAllSearch.bind(this);
        this.windowScroll = this.windowScroll.bind(this);
    }

    search2OnFocus() {
        this.setState({
            search2HasFocused : true
        });
    }

    search2Onblur() {
        this.setState({
            search2HasFocused : false
        });
    }

    searchOnFocus() {
        this.setState({
            searchHasFocused : true
        });
    }

    searchOnblur() {
        this.focusTimeId = setTimeout(() => {
            this.setState({
                searchHasFocused : false
            });
        }, 5);
    }

    clearAllSearch(e) {
        clearTimeout(this.focusTimeId);
        console.log(this.searchInputRef);
        this.searchInputRef.current.focus();
        this.setState({
            searchHasFocused : true,
            clearAllSearch : true,
            searchArray : []
        });
    }

    windowScroll(e) {
        if(window.pageYOffset > this.preYOffset + 52)
        {
            this.preYOffset = window.pageYOffset;
            if(!this.state.searchHasFocused)
            {
                this.setState({
                    headerScrollUp : true
                });
            }
        }
        else if(window.pageYOffset < this.preYOffset - 52)
        {
            this.preYOffset = window.pageYOffset;
            if(!this.state.searchHasFocused)
            {
                this.setState({
                    headerScrollUp : false
                });
            }
        }

    }

    componentDidMount() {

        window.addEventListener("scroll", this.windowScroll);

        axios.get('./searchHot')
        .then((response) => {
            this.setState(() => {
            return {
                searchArray : [...response.data['search']],
                hotArray : [...response.data['hot']]
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",() => {});
    }

    render(){
        return (
            <Fragment>
                <ContentStyle></ContentStyle>
                <HeaderDiv style={ !this.state.searchHasFocused ? {overflow:'hidden'} : {}}>
                    <CSSTransition
                        in={this.state.headerScrollUp}
                        timeout={200}
                        classNames="scrollUp"
                    >
                        <div className={'content'}>
                            <Header1>
                                <svg
                                    className={'zhihuLogo'}
                                    viewBox="0 0 200 91"
                                    width="64"
                                    height="30"
                                    style={{height: '30px', width: '64px',fill: '#0084ff'}}>
                                    <g>
                                        <path
                                            d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                            fillRule="evenodd">
                                        </path>
                                    </g>
                                </svg>
                                <a href="#" className={'leftA'}>首页</a>
                                <a href="#" className={'leftA'}>发现</a>
                                <a href="#" className={'leftA'}>话题</a>

                                <CSSTransition
                                    in={this.state.searchHasFocused}
                                    timeout={200}
                                    classNames="search"
                                >
                                    <div className={'search'}>
                                        <SearchSel className={'SearchSel'}>
                                            <div className={'hot'}>知乎热搜</div>
                                            {
                                                this.state.hotArray.map((item,index) => {
                                                    return <div className={'searchItem'} key={item}>{item}</div>
                                                })
                                            }
                                            {
                                                !this.state.clearAllSearch ?
                                                    <div className={'hot'}>搜索历史
                                                        <a onClick={this.clearAllSearch} href="#" className={'iconfont'}>
                                                            &#xe610; 清空
                                                        </a>
                                                    </div> : null
                                            }
                                            {
                                                this.state.searchArray.map((item,index) => {
                                                    return <div className={'searchItem'} key={item}>{item}</div>
                                                })
                                            }
                                        </SearchSel>
                                        <input onFocus={this.searchOnFocus}
                                               onBlur={this.searchOnblur}
                                               ref={this.searchInputRef}
                                               type="text" placeholder={'岳云鹏吐槽高物价被怼'}/>
                                        <a href="#" className={'iconfont'}>&#xe6aa;</a>
                                        <button>提问</button>
                                    </div>
                                </CSSTransition>


                                <a href="#" className={'rightA iconfont'}>&#xe600;</a>
                                <a href="#" className={'rightA iconfont'}>&#xe633;</a>
                                <a href="#" className={'rightA iconfont'}>&#xe8c0;</a>
                            </Header1>
                            <Header2 hidden={this.state.searchHasFocused}>
                                <svg
                                    className={'zhihuLogo'}
                                    viewBox="0 0 200 91"
                                    width="64"
                                    height="30"
                                    style={{height: '30px', width: '64px',fill: '#0084ff'}}>
                                    <g>
                                        <path
                                            d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                            fillRule="evenodd">
                                        </path>
                                    </g>
                                </svg>
                                <a href="#" className={'selA leftA'}>推荐</a>
                                <a href="#" className={'leftA'}>关注</a>
                                <a href="#" className={'leftA'}>热榜</a>
                                <button>提问</button>
                                <CSSTransition
                                    in={this.state.search2HasFocused}
                                    timeout={200}
                                    classNames="search"
                                >
                                    <div className={'search'}>
                                        <input onFocus={this.search2OnFocus}
                                               onBlur={this.search2Onblur}
                                               type="text" placeholder={'搜素你感兴趣的内容'}/>
                                        <a href="#" className={'iconfont'}>&#xe6aa;</a>
                                    </div>
                                </CSSTransition>
                            </Header2>
                        </div>
                    </CSSTransition>
                </HeaderDiv>
            </Fragment>
        )
    }
}
export default Header;