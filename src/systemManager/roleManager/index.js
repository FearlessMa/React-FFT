/**
 * Created by MHC on 2018/3/23.
 */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Row, Col} from 'antd';
import {FormComponent, TableComponent} from '../../common';
import {connect} from 'react-redux';
import {requestRoleList} from "../redux/actions";
import {RoleCreateContainer} from "./createANDedit";
import {RoleDetailContainer} from "./detail";


export const RoleManagerLayout = () => {
    return (
        <Switch>
            <Route path={'/systemManager/roleManager/create'} component={RoleCreateContainer}/>
            <Route path={'/systemManager/roleManager/edit/:roleId'} component={RoleCreateContainer}/>
            <Route path={'/systemManager/roleManager/detail/:roleId'} component={RoleDetailContainer}/>
            <Route exact path={'/systemManager/roleManager'} component={RoleManagerContainer}/>
            <Redirect to={'/systemManager/roleManager'} />
        </Switch>
    )
};


const mapStateToProps = state => ({
    index: state.systemManager.roleManager.index,
    loading: state.systemManager.roleManager.loading
});
const mapDispatchToProps = dispatch => ({
    roleListSaga: values => dispatch(requestRoleList(values))
});

@connect(mapStateToProps, mapDispatchToProps)
class RoleManagerContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.roleListSaga();
    }

    onSubmit = values => {
        this.props.roleListSaga(values);
    }

    tableBtnClick = () => {
        this.props.history.push('/systemManager/roleManager/create');
    }

    //分页
    paginationOnChange = (pagination) => {
        this.props.roleListSaga({current: pagination.current, pageSize: pagination.pageSize});
    }

    render() {
        const columns = [
            {
                title: '角色名称',
                dataIndex: 'roleName',
                render: (text, record) => <a href={`#/systemManager/roleManager/detail/${record.roleId}`}>{text}</a>
            },
            {
                title: '角色描述',
                dataIndex: 'description'
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                render: text => <span>{new Date(text).toLocaleString().substr(0, 9)}</span>
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
                render: text => <span>{new Date(text).toLocaleString().substr(0, 9)}</span>
            }
        ];
        return <RoleManagerContent btnClick={this.tableBtnClick} columns={columns}
                                   onSubmit={this.onSubmit} {...this.props}
                                   onChange={this.paginationOnChange}
        />
    }

}


const searchComponentData = [
    {
        label: '角色名称',
        tag: 'input',
        id: 'roleName',
    }
];

const RoleManagerContent = (props) => {
    let data = [];
    let pagination = [];
    try {
        data = props.index.data.roleList;
        pagination = props.index.data.pagination;
    } catch (err) {
    }
    return (
        <React.Fragment>
            <div className="containerHeader">
                角色管理
                <Row>
                    <Col offset={4}>
                        <FormComponent formList={searchComponentData} formSubmit={props.onSubmit}
                                       btn={{sub: '搜索'}} layout={'inline'}
                        />
                    </Col>
                </Row>
            </div>
            <div className="containerContent">
                <TableComponent columns={props.columns} componentTitle={'角色列表'} btnName={'创建角色'}
                                btnClick={props.btnClick} dataSource={data} rowKey={'createTime'}
                                loading={props.loading} onChange={props.onChange} pagination={pagination}/>
            </div>
        </React.Fragment>
    )
};

