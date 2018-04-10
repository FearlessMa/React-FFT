/**
 *  menu
 *
 */
import React from 'react';
import {Menu, Icon, message} from 'antd';
// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {tranTreeData} from '../common'

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

const mapStateToProps = state => ({login: state.login});

@connect(mapStateToProps)
export default class MenuContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        let selectedKeys = sessionStorage.getItem('selectedKeys');
        let openKeys = sessionStorage.getItem('openKeys');
        let sessionUserData = sessionStorage.getItem('userData');
        let menuList = [];
        //第一层菜单
        let rootSubmenuKeys = [];
        if (this.props.login.userData !== undefined && !sessionUserData) {
            // 菜单数据
            menuList = tranTreeData(this.props.login.userData.data.menulist, 'menuId', 'parentMenuId', 'menuName');
            // 存储菜单
            sessionStorage.setItem('userData', JSON.stringify(this.props.login.userData));
            // 设置默认选中
            let indexItem = menuList.find((item) => item.menuName === '首页');
            const initPath = `${indexItem.menuId}-${indexItem.action}`;
            // 存储第一层菜单
            menuList.map(item => rootSubmenuKeys.push(`${item.menuId}-${item.action}`));
            this.state = {
                collapse: false,
                menuList,
                defaultKey: initPath,
                currentPath: `${indexItem.action}`,
                selectedKeys: [initPath],
                openKeys: [initPath],
                rootSubmenuKeys,
            };
        } else {
            menuList = tranTreeData(this.props.login.userData.data.menulist, 'menuId', 'parentMenuId', 'menuName');
            menuList.map(item => rootSubmenuKeys.push(`${item.menuId}-${item.action}`));
            let indexItem = menuList.find((item) => item.menuName === '首页');
            //设置首页为默认页面
            const defaultKey = [`${indexItem.menuId}-${indexItem.action}`];
            // session里没有存储就设置首页
            if (!selectedKeys || !openKeys) {
                selectedKeys = defaultKey;
                openKeys = defaultKey;
            } else {
                selectedKeys = selectedKeys.split(',');
                openKeys = openKeys.split(',');
            }
            this.state = {
                collapse: false,
                menuList,
                defaultKey: '',
                currentPath: '',
                selectedKeys,
                openKeys,
                rootSubmenuKeys
            };
        }

        // this.state = {
        //     collapse: false,
        //     menuList: [],
        //     defaultKey: '',
        //     openKeys: [''],
        //     selectedKeys: [''],
        //     rootSubmenuKeys: [''],
        //     currentPath: ''
        // }
    }

    // componentWillMount() {
    //     let selectedKeys = sessionStorage.getItem('selectedKeys');
    //     let openKeys = sessionStorage.getItem('openKeys');
    //     let sessionUserData = sessionStorage.getItem('userData');
    //     let menuList = [];
    //     //第一层菜单
    //     let rootSubmenuKeys = [];
    //
    //     if (this.props.login.userData !== undefined && !sessionUserData) {
    //         // 菜单数据
    //         menuList = tranTreeData(this.props.login.userData.data.menulist, 'menuId', 'parentMenuId', 'menuName');
    //         // 存储菜单
    //         sessionStorage.setItem('userData', JSON.stringify(this.props.login.userData));
    //         // 设置默认选中
    //         let indexItem = menuList.find((item) => item.menuName === '首页');
    //         const initPath = `${indexItem.menuId}-${indexItem.action}`;
    //         // 存储第一层菜单
    //         menuList.map(item => rootSubmenuKeys.push(`${item.menuId}-${item.action}`));
    //         this.setState({
    //             menuList,
    //             defaultKey: initPath,
    //             currentPath: `${indexItem.action}`,
    //             selectedKeys: [initPath],
    //             openKeys: [initPath],
    //             rootSubmenuKeys
    //         });
    //     }
    //     else {
    //         menuList = tranTreeData(this.props.login.userData.data.menulist, 'menuId', 'parentMenuId', 'menuName');
    //         menuList.map(item => rootSubmenuKeys.push(`${item.menuId}-${item.action}`));
    //         let indexItem = menuList.find((item) => item.menuName === '首页');
    //         //设置首页为默认页面
    //         const defaultKey = [`${indexItem.menuId}-${indexItem.action}`];
    //         // session里没有存储就设置首页
    //         if (!selectedKeys || !openKeys) {
    //             selectedKeys = defaultKey;
    //             openKeys = defaultKey;
    //         } else {
    //             selectedKeys = selectedKeys.split(',');
    //             openKeys = openKeys.split(',');
    //         }
    //         this.setState({
    //             menuList,
    //             selectedKeys,
    //             openKeys,
    //             rootSubmenuKeys
    //         });
    //     }
    // }

    toLink = e => {
        //设置选中菜单
        this.setState({
            selectedKeys: e.keyPath
        });
        sessionStorage.setItem('selectedKeys', e.keyPath);
        //当前path与跳转path是否相同
        let path = '';
        try {
            path = e.key.replace(/\./g, '/').split('-').pop();
        } catch (e) {
        }
        const currentPath = this.state.currentPath;
        if (path !== currentPath) {
            this.setState({currentPath: path});
            this.props.history.push(`/${path}`);
        }
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
        sessionStorage.setItem('openKeys', openKeys);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.inlineCollapsed != this.state.collapse) {
            this.setState({
                collapse: nextProps.inlineCollapsed
            })
        }
    }

    render() {
        const {menuList, defaultKey} = this.state;
        return (
            <MenuComponent menuList={menuList} defaultKey={defaultKey} {...this.props}
                           toLink={this.toLink} onOpenChange={this.onOpenChange}
                           openKeys={this.state.openKeys} selectedKeys={this.state.selectedKeys}
                           collapse={this.state.collapse}/>
        );
    }
}


const MenuComponent = (props) => {
    const {toLink} = props;
    const menuList = (menuList) => {
        return menuList.map((item) => {
            if (item.children) {
                return (
                    menuChild(item)
                );
            } else {
                return (
                    <Menu.Item key={`${item.menuId}-${item.action}`}>
                        {/*<div>*/}
                        <Icon type={item.tab}/>
                        <span>{item.menuName}</span>
                        {/*</div>*/}
                    </Menu.Item>
                )
            }
        });
    }
    const menuChild = (item) => {
        return (
            <SubMenu title={<span><Icon type={item.tab}/><span>{item.menuName}</span></span>}
                     key={`${item.menuId}-${item.action}`}>
                {
                    item.children.map((cItem) => {
                        if (cItem.children) {
                            return menuChild(cItem)
                        } else {
                            return (
                                <Menu.Item key={`${item.menuId}-${cItem.action}`}>
                                    <a href={`#/${cItem.action.replace(/\./g, '/')}`}>{cItem.menuName}</a>
                                </Menu.Item>
                            )
                        }

                    })
                }
            </SubMenu>
        )
    }

    //
    const open = props.collapse ? {} : {
        openKeys: props.openKeys
    };
    return (
        <Menu mode={props.collapse ? 'vertical' : 'inline'} theme={'dark'} onClick={toLink}
              defaultSelectedKeys={[props.defaultKey]}
              selectedKeys={props.selectedKeys}
              {...open}
              onOpenChange={props.onOpenChange}
        >
            {
                menuList(props.menuList)
            }
        </Menu>
    )
}