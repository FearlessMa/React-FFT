import React from 'react';
import {Layout} from 'antd';
import MenuList from './menu';
import HeaderComponent from './header'
import AntdLog from 'img/AntdLog.svg';
import Container from './container';
import './index.less';
import {logoutAction} from "./redux/actions";
import {LOGOUT} from "./redux/actionTypes";

export {logoutAction, LOGOUT}

const {Sider, Content} = Layout;


export class HomeComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const {collapsed} = this.state;
        return (
            <Layout>
                <Sider tigger={null} collapsed={collapsed}>
                    <div className="log">
                        <img src={AntdLog} alt="log"/>
                        {!collapsed ? <div>Ant Design</div> : null}
                        {/*<div className={collapsed?'logCollapsed':null}>Ant Design</div>*/}
                    </div>
                    <MenuList inlineCollapsed={collapsed} {...this.props}/>
                </Sider>
                <Layout>
                    <HeaderComponent toggle={this.toggle} collapsed={collapsed} {...this.props}/>
                    <Content style={{display: 'flex'}}>
                        <Container {...this.props}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }

}

