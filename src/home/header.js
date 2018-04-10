/**
 * Created by MHC on 2018/1/24.
 */
import React from 'react';
// import PropTypes from 'prop-types';
import {Layout, Icon, Menu, Dropdown, Avatar} from 'antd';
import {connect} from 'react-redux';
import {logoutAction} from "./redux/actions";


const {Header} = Layout;
const userList = [
    {
        text: '用户信息',
        icon: 'user',
        path: '/systemManager/userManager'
    },
    // {
    //     text: '设置',
    //     icon: 'setting',
    //     path: '/'
    // },
    {
        text: '退出登录',
        icon: 'logout',
        path: '/login',
        key: 'logout'
    }
];

const mapStateToProps = state => ({
    login: state.login
});
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutAction())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class HeaderComponent extends React.Component {
    // constructor(...arg) {
    //     super(...arg);
    // }

    toLink = item => {
        const {path, key} = JSON.parse(item.key);
        if (key === 'logout') {
            sessionStorage.clear();
            this.props.logout();
        }
        this.props.history.push(path);
    }

    render() {
        const {toggle, collapsed} = this.props;
        return (
            <React.Fragment>
                <Header className="header">
                    <Icon className='icon' type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle}/>
                    <div className='headerUser'>
                        <DropdownComponent toLink={this.toLink} userList={userList} login={this.props.login}/>
                    </div>

                </Header>
            </React.Fragment>
        );
    }

}

const DropdownComponent = props => {

    let userName = '';
    let userAvatar = '';
    try {
        userName = props.login.userData.data.user.userName;
        userAvatar = userName.slice(0, 1);
    } catch (e) {
    }
    const menu = (
        <Menu
            onClick={props.toLink}>
            {props.userList.map((item, i) => {
                return (
                    <Menu.Item key={`${JSON.stringify(item)}`}>
                        <Icon type={item.icon}/>
                        <span style={{paddingLeft: '10px'}}
                        >{item.text}</span>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    return (
        <React.Fragment>
            <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link userName">
                        <Avatar size={'small'} shape="circle" className="userAvatar">{userAvatar}</Avatar>
                        <span>{userName}</span>
                    </span>
            </Dropdown>
        </React.Fragment>
    )

};

