/**
 * Created by MHC on 2018/3/23.
 */
import React from 'react';
import { FormComponent, tranTreeData } from '../../common';
import { requestRoleDelete, requestRoleDetail } from "../redux/actions";
import { connect } from "react-redux";
import { Row, Col, Button, Modal, Divider } from 'antd';


const mapStateToProps = state => ({
    detail: state.systemManager.roleManager.detail,
    loading: state.systemManager.roleManager.loading
});
const mapDispatchToProps = dispatch => ({
    roleDetailSaga: values => dispatch(requestRoleDetail(values)),
    roleDeleteSaga: values => dispatch(requestRoleDelete(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class RoleDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const roleId = this.props.match.params.roleId;
        if (isNaN(roleId)) {
            this.props.history.push('/systemManager/roleManager');
        }
        this.props.roleDetailSaga({ roleId });
    }

    roleDelete = (roleId, roleName) => {
        const roleDeleteSaga = this.props.roleDeleteSaga;
        Modal.confirm({
            title: `是否删除${roleName}?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                roleDeleteSaga({ roleId })
            },
            onCancel() {
                // console.log(roleId,roleName);
                // todo
            },
        });
    }

    toEdit = roleId => {
        this.props.history.push(`/systemManager/roleManager/edit/${roleId}`);
    }

    render() {
        return (
            <React.Fragment>
                <RoleDetailContent roleDelete={this.roleDelete} toEdit={this.toEdit} {...this.props} />
            </React.Fragment>
        );
    }

}


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
};

const RoleDetailContent = props => {
    let data = {
        createTime: 0,
        updateTime: 0
    };
    let treeData = [];
    try {
        data = props.detail.data.role;
        treeData = tranTreeData(props.detail.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {
    }
    const formList = [
        {
            label: '角色名称',
            tag: 'input',
            id: 'roleName',
            initialValue: data.roleName,
            disabled: true
        },
        {
            label: '角色描述',
            tag: 'textarea',
            id: 'description',
            initialValue: data.description,
            disabled: true
        },
        {
            label: '创建时间',
            tag: 'input',
            id: 'createTime',
            initialValue: new Date(data.createTime).toLocaleString(),
            disabled: true
        },
        {
            label: '更新时间',
            tag: 'input',
            id: 'updateTime',
            initialValue: new Date(data.updateTime).toLocaleString(),
            disabled: true
        },
        {
            label: '角色权限',
            tag: 'tree',
            id: 'permIds',
            // disabled: true
        },
    ];
    return (
        <React.Fragment>
            <div className="containerContent">
                <Row>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            <Divider><h2>角色详情</h2></Divider>
                        </div>
                    </Col>
                </Row>
                <FormComponent
                    formList={formList}
                    layout={'horizontal'}
                    loading={props.loading}
                    formItemLayout={formItemLayout}
                    moreItemInRow={true}
                    treeData={treeData}
                // selectData={treeSelectData}
                />
                <Row>
                    <Col offset={3} className='detailBtn'>
                        <Button onClick={() => {
                            props.roleDelete(data.roleId, data.roleName)
                        }} type={'danger'}>删除</Button>
                        <Button onClick={() => {
                            props.toEdit(data.roleId)
                        }} type={'primary'}>修改</Button>
                        <Button onClick={() => {
                            props.history.push('/systemManager/roleManager')
                        }}>返回</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};

