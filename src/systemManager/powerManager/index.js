/**
 * Created by MHC on 2018/3/22.
 */
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Row, Col, Button} from 'antd';
import {FormComponent, TableComponent, tranTreeData} from '../../common';
import {connect} from 'react-redux';
import {clearPowerDeleteData, requestPowerDelete, requestPowerList} from "../redux/actions";
import {Modal} from "antd/lib/index";
import {PowerCreateContainer} from "./createANDedit";
import {PowerDetailContainer} from "./detail";
import {PowerConfigContainer} from "./config";

export const PowerManagerLayout = () => {
    return (
        <Switch>
            <Route exact path={'/systemManager/powerManager'} component={PowerManagerContainer}/>
            <Route path={'/systemManager/powerManager/create'} component={PowerCreateContainer}/>
            <Route path={'/systemManager/powerManager/detail/:permId'} component={PowerDetailContainer}/>
            <Route path={'/systemManager/powerManager/edit/:permId'} component={PowerCreateContainer}/>
            <Route path={'/systemManager/powerManager/config/:permId'} component={PowerConfigContainer}/>
        </Switch>
    )
};


const mapStateToProps = state => ({
    index: state.systemManager.powerManager.index,
    loading: state.systemManager.powerManager.loading
});
const mapDispatchToProps = dispatch => ({
    powerListSaga: values => dispatch(requestPowerList(values)),
    powerDeleteSaga: values => dispatch(requestPowerDelete(values)),
    // clearPowerDeleteData : ()=>dispatch(clearPowerDeleteData())
});

@connect(mapStateToProps, mapDispatchToProps)
class PowerManagerContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.powerListSaga();
    }

    onSubmit = values => {
        this.props.powerListSaga(values);
    }

    deletePower = record => {
        const powerDeleteSaga = this.props.powerDeleteSaga;
        Modal.confirm({
            title: `是否删除${record.permName}?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                powerDeleteSaga({permId: record.permId});
            },
            onCancel() {
                // console.log(record.permId)
                // todo
            },
        });
    }

    toCreate = () => this.props.history.push({pathname: '/systemManager/powerManager/create', state: true})

    toConfig = permId => {
        this.props.history.push(`/systemManager/powerManager/config/${permId}`)
    }

    //分页
    paginationOnChange = (pagination) => {
        this.props.powerListSaga({current: pagination.current, pageSize: pagination.pageSize});
    }

    render() {
        const columns = [
            {
                title: '权限点名称',
                dataIndex: 'permName',
                render: (text, record) => {
                    // let permId = record.permId;
                    return (
                        <a href={`#/systemManager/powerManager/detail/${record.permId}`}>{text}</a>
                    );
                }
            },
            {
                title: '权限点编码',
                dataIndex: 'permId',
            },
            {
                title: '父级权限ID',
                dataIndex: 'parentPermId',
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
                render: (text) => {
                    text = new Date(text).toLocaleString().substr(0, 9);
                    return (
                        <span title={text}>{text}</span>
                    );
                }
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    // let permId = record.permId;
                    return (
                        <div>
                            <Button style={{marginRight: 5}}
                            onClick={()=>this.props.history.push(`/systemManager/powerManager/edit/${record.permId}`)}>编辑</Button>
                            <Button onClick={this.deletePower.bind(this, record)} style={{marginRight: 5}}
                                    type={'danger'}>删除</Button>
                            <Button onClick={this.toConfig.bind(this, record.permId)}>配置</Button>
                        </div>
                    );
                }
            }
        ];
        return (
            <React.Fragment>
                <PowerManagerContent btnClick={this.toCreate} columns={columns}
                                     formSubmit={this.onSubmit} {...this.props}
                                     onChange={this.paginationOnChange}
                />
            </React.Fragment>
        );
    }

}

const searchComponentData = [
    {
        label: '权限名称',
        id: 'permName',
        type: 'text',
        tag: 'input',
    },
    {
        label: '父级权限ID',
        id: 'parentPermId',
        type: 'text',
        tag: 'input',
    },
];

const PowerManagerContent = (props) => {
    let pagination = [];
    let dataSource = [];
    try {
        dataSource = tranTreeData(props.index.powerList.data.permList, 'permId', 'parentPermId', 'permName');
        pagination = props.index.powerList.data.pagination;
    } catch (err) {

    }
    return (
        <React.Fragment>
            <div className='containerHeader'>
                权限管理
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
            <div className='containerContent'>
                <TableComponent {...props} btnName={'创建权限'} componentTitle={'权限列表'}
                                rowKey={'permId'} dataSource={dataSource} pagination={pagination}/>
            </div>
        </React.Fragment>
    )
};
