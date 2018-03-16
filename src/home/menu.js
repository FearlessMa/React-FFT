/**
 *  menu
 *
 */
import React from 'react';
import {Menu, Icon, message} from 'antd';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;

const mapStateToProps = (state)=>state.login;

@connect(mapStateToProps)
export default class MenuContainer extends React.Component{
    static contextTypes = {
        router:PropTypes.object
    }
    constructor(...arg){
        super(...arg);
        this.state = {
            collapse: this.props.inlineCollapsed,
            menuList: [],
            defaultKey:'100'
        }
    }

    // toLink = ()=>{
    //     this.context.router.history.push('/antdForm');
    // }

    //转为树形数据结构
    compare = (arr1,arr2)=>arr1.sort-arr2.sort;

    tranTreeList = (list)=>{
        if(!Array.isArray(list))message.error('数据错误，请联系管理员！');
        let treeList = [];
        let filterList = [];
        filterList =list.filter((item)=>{
            item.action = item.action.replace(/\./g,'/');
            if(item.parentMenuId ==="Root"){
                treeList.push(item);
            }
            //排序
            treeList.sort(this.compare);
            return item.parentMenuId !=="Root"
        });
        return this.treeMenuList(treeList,filterList);
    }

    //转为树形数据结构
    treeMenuList = (treeList ,filterList)=>{
        treeList.map((item)=>{
            let isIncludeChildern = filterList.find((value)=>item.menuId===value.parentMenuId);
            if(isIncludeChildern){
                item.childeList = [];
                filterList.map((fItem)=>{
                    if(item.menuId ===fItem.parentMenuId ){
                        item.childeList.push(fItem);
                    }
                    return null ;
                });
                item.childeList.sort(this.compare);
                this.treeMenuList(item.childeList,filterList)
            }
            return null ;
        });
        return treeList
    }

    componentDidMount(){
        // console.log('menuprops');
        // console.log(this.props);
        let sessionUserData = sessionStorage.getItem('userData');
        if((this.props.userData.data!==undefined) && !sessionUserData){
            let menuList = this.tranTreeList(this.props.userData.data.menulist) ;
            const userData = this.props.userData;
            sessionStorage.setItem('userData',JSON.stringify(userData));
            let defaultKey = menuList.find((item)=>item.menuName === '首页');
            this.setState({
                menuList,
                defaultKey:`${defaultKey.menuId}`
            });
        }else{
            // debugger;
            let menuList = this.tranTreeList(this.props.userData.data.menulist) ;
            this.setState({
                menuList
            });
        }
    }

    render(){
        const { menuList, defaultKey } = this.state;
        return (
            <MenuComponent menuList={menuList} defaultKey={defaultKey}/>
        );
    }
}

const menuList = (menuList)=>{
    return menuList.map((item)=>{
        if(item.childeList){
            return (
                menuChild(item)
            );
        }else{
            return(
                <MenuItem key={item.menuId}>
                    <Icon type={item.tab}/>
                    <span>
                        <a href={'#/'+item.action}  >{item.menuName}</a>
                    </span>

                </MenuItem>
            )
        }
    });
}

const menuChild = (item)=>{
    return (
        <SubMenu title={<span><Icon type={item.tab} /><span>{item.menuName}</span></span>} key={item.menuId}>
            {
                item.childeList.map((cItem)=>{
                    if(cItem.childeList){
                        return menuChild(cItem)
                    }else{
                        return (
                            <MenuItem key={cItem.menuId}>
                            <a href={'#/'+cItem.action}>{cItem.menuName}</a>
                                {/*<Link to={cItem.action}>{cItem.menuName}</Link>*/}
                            </MenuItem>
                        )
                    }

                })
            }
        </SubMenu>
    )
}

const  MenuComponent = (props)=>{
    return (
        <Menu mode={'inline'} theme={'dark'}
              defaultSelectedKeys={[props.defaultKey]}
        >
            {
                menuList(props.menuList)
            }
            {/*<MenuItem key={'1sw'}>*/}
                {/*<Icon type="desktop" />*/}
                {/*<span>*/}
                    {/*<Link to={'/'} style={{color:'#ffffff'}}>首页</Link>*/}
                {/*</span>*/}
            {/*</MenuItem>*/}
            {/*<SubMenu title={<span><Icon type="mail" /><span>系统管理</span></span>} key={1}>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/systemManager/organManager'}>权限管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/home/ajs'}>菜单管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/home/rjs'}>角色管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/'}>用户管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/systemManager/organManager'}>机构管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
                {/*<MenuItem>*/}
                    {/*<Link to={'/home/rjs'}>接口权限管理*/}
                    {/*</Link>*/}
                {/*</MenuItem>*/}
            {/*</SubMenu>*/}
            {/*<SubMenu title={<span><Icon type="mail" /><span>其他业务模块</span></span>} key={2}>*/}
                {/*<MenuItem>1.1</MenuItem>*/}
                {/*<MenuItem>1.2</MenuItem>*/}
                {/*<MenuItem>1.3</MenuItem>*/}
            {/*</SubMenu>*/}
        </Menu>
    )
}