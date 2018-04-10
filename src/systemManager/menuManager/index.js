/**
 * Created by MHC on 2018/3/21.
 */
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {TableComponent, FormComponent, tranTreeData} from '../../common';
import {Button, Row, Col, Modal} from 'antd';
import {connect} from 'react-redux';
import {requestMenuDelete, requestMenuList} from "../redux/actions";
import {MenuDetailContainer} from "./detail";
import {MenuCreateContainer} from "./createANDedit";


export const MenuManagerLayout = () => {
    return (
        <Switch>
            <Route exact path={`/systemManager/menuManager`} component={MenuManagerContainer}/>
            <Route path={`/systemManager/menuManager/create`} component={MenuCreateContainer}/>
            <Route path={`/systemManager/menuManager/detail/:menuId`} component={MenuDetailContainer}/>
            <Route path={`/systemManager/menuManager/edit/:menuId`} component={MenuCreateContainer}/>
            <Redirect to={'/'}/>
        </Switch>
    )
};


const mapStateToProps = state => ({
    index: state.systemManager.menuManager.index,
    loading: state.systemManager.menuManager.loading
});
const mapDispatchToProps = dispatch => ({
    menuListSaga: values => dispatch(requestMenuList(values)),
    menuDeleteSaga: values => dispatch(requestMenuDelete(values))
});

@connect(mapStateToProps, mapDispatchToProps)
class MenuManagerContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    onSubmit = (values) => {
        this.props.menuListSaga(values);
    }

    componentDidMount() {
        this.props.menuListSaga();
    }

    btnClick = () => {
        this.props.history.push('/systemManager/menuManager/create');
    }

    delete = record => {
        const menuDeleteSaga = this.props.menuDeleteSaga;
        Modal.confirm({
            title: `是否删除${record.menuName}?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log(record.menuName);
                menuDeleteSaga({menuId: record.menuId});
            },
            onCancel() {
                console.log(record.menuName)
            },
        });
    }

    //分页
    paginationOnChange = (pagination) => {
        this.props.menuListSaga({current: pagination.current, pageSize: pagination.pageSize});
    }

    toEdit = (menuId) => {
        this.props.history.push(`/systemManager/menuManager/edit/${menuId}`);
    }

    render() {
        const columns = [
            {
                title: '菜单名称',
                dataIndex: 'menuName',
                render: (text, record) => {
                    return (
                        <a href={`#/systemManager/menuManager/detail/${record.menuId}`}>{text}</a>
                    );
                }
            },
            {
                title: '菜单ID',
                dataIndex: 'menuId',
            },
            {
                title: '父菜单ID',
                dataIndex: 'parentMenuId',
            },
            {
                title: 'action',
                dataIndex: 'action',
            },
            {
                title: 'tab',
                dataIndex: 'tab',
            },
            {
                title: '排序',
                dataIndex: 'sort',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    return (
                        <div>
                            <Button onClick={this.toEdit.bind(this, record.menuId)}>编辑</Button>
                            <Button type={'danger'}
                                    onClick={this.delete.bind(this, record)}
                                    style={{
                                        marginLeft: 5,
                                    }}>删除</Button>
                        </div>
                    );
                }
            }
        ];
        return (
            <MenuManagerContent {...this.props} formSubmit={this.onSubmit} columns={columns}
                                componentTitle={'菜单列表'} btnClick={this.btnClick}
                                btnName={'创建菜单'} onChange={this.paginationOnChange}/>
        );
    }

}

const searchComponentData = [
    {
        label: '菜单名称',
        id: 'menuName',
        type: 'text',
        tag: 'input',
    },
    {
        label: '父菜单ID',
        id: 'parentMenuId',
        type: 'text',
        tag: 'input',
    },
];
const MenuManagerContent = (props) => {
    let menuList = [];
    let pagination = [];
    try {
        menuList = tranTreeData(props.index.data.menuList, 'menuId', 'parentMenuId', 'menuName');
        pagination = props.index.data.pagination;
    } catch (err) {
    }

    return (
        <React.Fragment>
            <div className='containerHeader'>
                菜单管理
                <Row>
                    <Col offset={3}>
                        <FormComponent formList={searchComponentData}
                                       btn={{sub: '搜索'}}
                                       layout={'inline'}
                                       formSubmit={props.formSubmit}
                        />
                    </Col>
                </Row>
            </div>
            <div className='containerContent'>
                <TableComponent {...props} dataSource={menuList} pagination={pagination}
                                rowKey={'menuId'}/>
            </div>
        </React.Fragment>
    )
};