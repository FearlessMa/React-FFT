/**
 * Created by MHC on 2018/3/20.
 */
import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {FormComponent} from '../../common/formComponent';
import {TableComponent} from '../../common/tableComponent';
import {Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import {requestPathDelete, requestPathManager, clearPathDeleteData} from '../redux/actions';
import {CreatePathContainer} from './createANDedit';
import {PathDetailContainer} from './detail';
import {Modal} from "antd/lib/index";

export const PathManagerLayout = () => {
    return (
        <Switch>
            <Route exact path={'/systemManager/pathManager'} component={PathContainer}/>
            <Route path={'/systemManager/pathManager/create'} component={CreatePathContainer}/>
            <Route path={'/systemManager/pathManager/detail/:pathId'} component={PathDetailContainer}/>
            <Route path={'/systemManager/pathManager/edit/:pathId'} component={CreatePathContainer}/>
        </Switch>
    )
}

const mapStateToProps = state => ({
    index: state.systemManager.pathManager.index,
    loading: state.systemManager.pathManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    pathListSaga: (values) => dispatch(requestPathManager(values)),
    pathDeleteSaga: (values) => dispatch(requestPathDelete(values)),
    clearPathDelete : ()=>dispatch(clearPathDeleteData())
});

@connect(mapStateToProps, mapDispatchToProps)
class PathContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    formSubmit = (values) => {
        console.log(values)
        this.props.pathListSaga(values);
    }

    componentDidMount() {
        this.props.pathListSaga();
    }

    toCreate = () => {
        this.props.history.push('/systemManager/pathManager/create');
    }

    toEdit = (pathId) => {
        this.props.history.push(`/systemManager/pathManager/edit/${pathId}`);
    }
    deletePath = (record) => {
        const pathDeleteSaga = this.props.pathDeleteSaga;
        Modal.confirm({
            title: `是否删除${record.httpPath}?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                // removePermSaga({permId:record.permId,pathId});
                // console.log(record.pathId);
                pathDeleteSaga({pathId: record.pathId});
            },
            onCancel() {
                console.log(record.description)
            },
        });
    }

    //分页
    paginationOnChange = (pagination) => {
        this.props.pathListSaga({current: pagination.current, pageSize: pagination.pageSize});
    }

    componentWillReceiveProps(nextProps) {
        let pathDelete = nextProps.index.pathDelete;
        if (pathDelete) {
            if(pathDelete.code == 200){
                this.props.clearPathDelete();
                this.props.pathListSaga();
            }
        }
    }

    render() {
        const columns = [
            {
                title: 'pathID',
                dataIndex: 'pathId',
                render: (text) => {
                    return (
                        <a href={`#/systemManager/pathManager/detail/${text}`}>{text}</a>
                    );
                }
            },
            {
                title: 'path路径',
                dataIndex: 'httpPath',
            },
            {
                title: '描述',
                dataIndex: 'description',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    return (
                        <div>
                            <Button onClick={this.toEdit.bind(this, record.pathId)}>编辑</Button>
                            <Button className="deleteBtn" style={{marginLeft: 10}} type={'danger'}
                                    onClick={this.deletePath.bind(this, record)}
                            >删除</Button>
                        </div>
                    );
                }
            }
        ];
        return (
            <React.Fragment>
                <PathContent columns={columns} btnClick={this.toCreate}
                             formSubmit={this.formSubmit} {...this.props}
                             onChange={this.paginationOnChange}
                />
            </React.Fragment>
        );
    }

}

const searchComponentData = [
    {
        label: 'path路径',
        id: 'httpPath',
        type: 'text',
        tag: 'input',
    },
];

/** TableComponent
 *  componentTitle : 标题
 *  btnName ： 按钮名称
 *  btnClick : 按钮事件
 *  其他为antd的table属性
 *
 * **/
const PathContent = (props) => {
    let dataList = [];
    let pagination = [];
    if (props.index.data) {
        dataList = props.index.data.pathList;
        pagination = props.index.data.pagination;
    }
    return (
        <React.Fragment>
            <div className='containerHeader'>
                <Row className=''>
                    <Col span={20} offset={3}>
                        <FormComponent formList={searchComponentData}
                                       btn={{sub: '搜索'}}
                                       layout={'inline'}
                                       formSubmit={props.formSubmit}
                        />
                    </Col>
                </Row>
            </div>
            <div className='containerContent'>
                <TableComponent {...props} columns={props.columns} componentTitle={'path管理'} dataSource={dataList}
                                rowKey={'pathId'} bordered={true} btnName={'创建Path'} pagination={pagination}/>
            </div>
        </React.Fragment>
    )
};

