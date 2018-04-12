/**
 * Created by MHC on 2018/3/20.
 */
import React from 'react';
import {Row, Col, message, Table, Button, Modal} from 'antd';
import {FormComponent} from '../../common/formComponent';
import {connect} from 'react-redux';
import {requestPathDetail, requestPathRemovePrem} from "../redux/actions";

const mapStateToProps = state => ({
    detail: state.systemManager.pathManager.detail,
    loading: state.systemManager.pathManager.loading,
});
const mapDispatchToProps = dispatch => ({
    pathDetailSaga: (values) => dispatch(requestPathDetail(values)),
    removePermSaga: (values) => dispatch(requestPathRemovePrem(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class PathDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const pathId = this.props.match.params.pathId;
        this.pathId = pathId;
        if (isNaN(pathId)) {
            this.props.history.push('/systemManager/pathManager');
        }
        this.props.pathDetailSaga({pathId});
    }

    toBack = () => {
        this.props.history.push('/systemManager/pathManager');
    }

    deletePermPath = (record) => {
        const pathId = this.pathId;
        const removePermSaga = this.props.removePermSaga;
        Modal.confirm({
            title: `是否解绑${record.permName}?`,
            content: '解绑后将无法返回',
            okText: '解绑',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                removePermSaga({permId: record.permId, pathId});
            },
            onCancel() {
                //TODO
            },
        });
    }

    toEdit = () => {
        const pathId = this.props.match.params.pathId;
        this.props.history.push(`/systemManager/pathManager/edit/${pathId}`);
    }

    render() {
        const columns = [
            {
                title: '权限ID',
                dataIndex: 'permId',
            },
            {
                title: '权限名称',
                dataIndex: 'permName',
            },
            {
                title: '描述',
                dataIndex: 'description',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => <div>
                    <Button onClick={this.deletePermPath.bind(this, record)} type={'danger'}>解绑</Button>
                </div>
            },
        ];
        return (
            <React.Fragment>
                <PathDetailContent {...this.props} columns={columns} toBack={this.toBack}
                                   toEdit={this.toEdit}/>
            </React.Fragment>
        );
    }

}

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8, offset: 1},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 15},
    },
}

const PathDetailContent = (props) => {
    let data = {};
    let dataSource = [];
    try {
        data = props.detail.data.path || {};
        dataSource = props.detail.data.path.perms || [];
        // if(props.detail.code != 200){
        //     message.error('未查询到数据');
        // }
    } catch (err) {
    }
    const formList = [
        {
            label: '请求path',
            id: 'httpPath',
            initialValue: data.httpPath,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '请求方式',
            id: 'httpMethodType',
            initialValue: data.httpMethodType,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: 'path资源描述',
            id: 'description',
            initialValue: data.description,
            type: 'text',
            tag: 'textarea',
            disabled: true,
        },
    ];
    return (
        <React.Fragment>
            <div className='containerContent'>
                <FormComponent formList={formList} layout={'horizontal'} formItemLayout={formItemLayout}
                               moreItemInRow={true} laoding={props.loading}
                />
                <Row>
                    <Table columns={props.columns} dataSource={dataSource} rowKey={'permId'} bordered={true}/>
                </Row>
                <Row>
                    <Col span={4} offset={8}>
                        <Button onClick={props.toEdit} type={'primary'}>编辑</Button>
                    </Col>
                    <Col span={4}>
                        <Button onClick={props.toBack}>返回</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};
