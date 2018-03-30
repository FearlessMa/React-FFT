/**
 * Created by MHC on 2018/3/27.
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Row, Col, Button} from 'antd';
import {FormComponent, TableComponent} from '../../common';
import {connect} from 'react-redux';
import {requestUserList} from "../redux/actions";
import {UserCreateContainer} from "./createANDedit";
import {UserDetailContainer} from "./detail";


export const UserManagerLayout = () => {
    return (
        <Switch>
            <Route path={'/systemManager/userManager/create'} component={UserCreateContainer}/>
            <Route path={'/systemManager/userManager/detail/:userId'} component={UserDetailContainer}/>
            <Route path={'/systemManager/userManager/edit/:userId'} component={UserCreateContainer}/>
            <Route exact path={'/systemManager/userManager'} component={UserManagerContainer}/>
        </Switch>
    )
};

const mapStateToProps = state => ({
    loading: state.systemManager.userManager.loading,
    index: state.systemManager.userManager.index
});
const mapDispatchToProps = dispatch => ({
    userListSaga: values => dispatch(requestUserList(values))
});

@connect(mapStateToProps, mapDispatchToProps)
class UserManagerContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }


    componentDidMount() {
        this.props.userListSaga()
    }

    onSubmit = values=>{
        console.log(values);
        this.props.userListSaga(values);
    }

    btnClick = ()=>{
        this.props.history.push('/systemManager/userManager/create');
    }

    render() {

        const columns = [
            {
                title: '登录名',
                dataIndex: 'loginName',
                render: (text, record) => {
                    return (
                        <a href={`#/systemManager/userManager/detail/${record.userId}`}>{text}</a>
                    );
                }
            },
            {
                title: '用户姓名',
                dataIndex: 'userName',
            },
            {
                title: '固定电话',
                dataIndex: 'telephone',
            },
            {
                title: '移动电话',
                dataIndex: 'mobile',
            },
            {
                title: '地址',
                dataIndex: 'userAddress',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
            },
            {
                title: '状态',
                dataIndex: 'status',
            },
        ];

        return (
            <React.Fragment>
                <UserManagerContent columns={columns} formSubmit={this.onSubmit} btnClick={this.btnClick}
                                    {...this.props}/>
            </React.Fragment>
        );
    }

}


const searchComponentData = [
    {
        label: '登录名',
        id: 'loginName',
        type: 'text',
        tag: 'input',
    },
    {
        label: '用户名',
        id: 'userName',
        type: 'text',
        tag: 'input',
    },
];

const UserManagerContent = props => {
    let tableData = [];
    try{
        tableData = props.index.data.userList
    }catch (err){}
    return (
        <React.Fragment>
            <div className="containerHeader">
                用户管理
                <Row>
                    <Col offset={3}>
                        <FormComponent formList={searchComponentData}
                                       btn={{sub: '搜索'}}
                                       layout={'inline'}
                                       messageContent={'搜索中...'}
                                       loading={props.loading}
                                       formSubmit={props.formSubmit}
                        />
                    </Col>
                </Row>
            </div>
            <div className="containerContent">
                <TableComponent {...props} btnName={'创建用户'} componentTitle={'用户列表'}
                                rowKey={'userId'} dataSource={tableData} bordered={true}/>
            </div>
        </React.Fragment>
    )
}

