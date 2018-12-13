import React,{Component,Fragment} from 'react';
import { GlobalStyle } from '../../styled.js';
import Header from './components/Header';
import Left from './components/LeftCom';
import Right from './components/RightCom';
import { ContentStyle } from './components/HeaderStyled';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <ContentStyle></ContentStyle>
                <Header></Header>
                <div className={'content mainContent'}>
                    <Left></Left>
                    <Right></Right>
                </div>
                <GlobalStyle></GlobalStyle>
            </Fragment>
        )
    };
}
export default Home;