/**
 * Created by MHC on 2018/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormComponent } from '../../common/formComponent';
import {
    requestOrgDetail,
    requestOrgDelete,
    requestOrgChangeStatus,
    dispatchOrgDetailModalVisible
} from '../redux/actions';
import { Row, Col, Button, Modal } from 'antd';
import { message } from "antd/lib/index";

const mapStateToProps = (state) => ({
    detail: state.systemManager.organManager.detail,
    loading: state.systemManager.organManager.loading,
    orgModalVisible: state.systemManager.organManager.orgModalVisible
});
const mapDispatchToProps = (dispatch) => ({
    orgDetailSaga: orgId => dispatch(requestOrgDetail(orgId)),
    orgDeleteSaga: orgId => dispatch(requestOrgDelete(orgId)),
    orgChangeStatusSaga: values => dispatch(requestOrgChangeStatus(values)),
    toggleOrgModalVisible: values => dispatch(dispatchOrgDetailModalVisible(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class OrganDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const orgId = this.props.match.params.orgId;
        this.orgId = orgId;
        if (isNaN(orgId)) {
            message.error('数据错误', 1);
            this.props.history.push('/systemManager/organManager');
        }
        this.props.orgDetailSaga({ orgId });
    }

    //删除机构
    orgDelete = (orgId, name) => {
        let orgDeleteSaga = this.props.orgDeleteSaga;
        // const that = this;
        Modal.confirm({
            title: `是否删除${name}?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                orgDeleteSaga({ orgId });
            },
            onCancel() {
                // console.log(name);//TODO
            },
        });
    }
    //Modal组件状态切换显示
    toggleModal = () => {
        this.props.toggleOrgModalVisible({ visible: !this.props.orgModalVisible });
    }
    //切换状态 TODO
    toggleStatus = value => {
        this.props.orgChangeStatusSaga({ orgId: this.orgId, status: value });
        this.toggleModal()
    }

    //查看人员
    ViewMembers = (orgId, name) => {
        this.props.history.push(`/systemManager/organManager/viewMembers/${orgId}/${name}`);
    }

    //编辑权限
    toEdit = (orgId) => {
        this.props.history.push(`/systemManager/organManager/edit/${orgId}`)
    }

    render() {
        return (
            <React.Fragment>
                <OraganDetailContent toggleModal={this.toggleModal}
                    orgDelete={this.orgDelete} toggleStatus={this.toggleStatus}
                    ViewMembers={this.ViewMembers} toEdit={this.toEdit}
                    {...this.props}
                />
            </React.Fragment>
        );
    }

}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 11 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
    },
};

const OraganDetailContent = props => {
    let data = [];
    try {
        data = props.detail.detailData.data.org;
    } catch (e) {

    }
    const formList = [
        {
            label: '真实机构号',
            id: 'realOrgId',
            initialValue: data.realOrgId,
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '机构名称',
            id: 'name',
            initialValue: data.name,
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '机构简称',
            id: 'shortName',
            initialValue: data.shortName,
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '上级机构',
            id: 'parentOrgName',
            initialValue: data.parentOrgName,
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '创建时间',
            id: 'createTime',
            initialValue: new Date(data.createTime).toLocaleString(),
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '更新时间',
            id: 'updateTime',
            initialValue: new Date(data.updateTime).toLocaleString(),
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '地址',
            id: 'updateTime',
            initialValue: data.address,
            type: 'text',
            tag: 'input',
            disabled: true
        },
        {
            label: '状态',
            id: 'updateTime',
            initialValue: data.status === "NORMAL" ? '正常' : data.status === "CANCEL" ? '作废' : data.status === "LOCKED" ? '锁定' : '',
            type: 'text',
            tag: 'input',
            disabled: true
        },
    ];
    return (
        <React.Fragment>
            <div className="containerContent">
                <FormComponent
                    formList={formList}
                    moreItemInRow={true}
                    formItemLayout={formItemLayout}
                />
                <Row>
                    <Col offset={3} className='detailBtn'>
                        <Button onClick={() => {
                            props.ViewMembers(data.orgId, data.name)
                        }}>查看人员</Button>
                        <Button type={'danger'} onClick={() => {
                            props.orgDelete(data.orgId, data.name)
                        }}>删除</Button>
                        <Button onClick={props.toggleModal}>状态</Button>
                        <Button type={'primary'} onClick={() => {
                            props.toEdit(data.orgId)
                        }}>修改</Button>
                        <Button onClick={() => {
                            props.history.push('/systemManager/organManager')
                        }}>返回</Button>
                    </Col>
                </Row>
                <Modal
                    title="更改机构状态"
                    visible={props.orgModalVisible}
                    onCancel={props.toggleModal}
                    footer={null}
                >
                    {data.status !== 'NORMAL' ? <Button onClick={() => {
                        props.toggleStatus('NORMAL')
                    }} style={{ marginRight: 30 }}>开启</Button> : null}
                    {data.status !== 'LOCKED' ? <Button onClick={() => {
                        props.toggleStatus('LOCKED')
                    }} style={{ marginRight: 30 }}>锁定</Button> : null}
                    {data.status !== 'CANCEL' ? <Button onClick={() => {
                        props.toggleStatus('CANCEL')
                    }}>作废</Button> : null}
                </Modal>
            </div>
        </React.Fragment>
    )
};

