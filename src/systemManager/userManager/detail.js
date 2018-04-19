/**
 * Created by MHC on 2018/3/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import {
    requestUserChangePwd,
    requestUserChangeStatus,
    requestUserDelete,
    requestUserDetail,
    userChangePwdModalVisible,
    userDetailModalVisible
} from "../redux/actions";
import {Row, Col, Button, Modal, Input, message} from "antd";
import {FormComponent} from '../../common';


const mapStateToProps = state => ({
    userDetail: state.systemManager.userManager.detail,
    loading: state.systemManager.userManager.loading,
    userModalVisible: state.systemManager.userManager.userModalVisible,
    changePwdModalVisible: state.systemManager.userManager.changePwdModalVisible
});
const mapDispatchToProps = dispatch => ({
    userDetailSaga: value => dispatch(requestUserDetail(value)),
    userDeleteSaga: value => dispatch(requestUserDelete(value)),
    userChangeStatusSaga: value => dispatch(requestUserChangeStatus(value)),
    dispatchUserModalVisible: value => dispatch(userDetailModalVisible(value)),
    disUserPwdModalVisible: value => dispatch(userChangePwdModalVisible(value)),
    userChangePwdSaga: values => dispatch(requestUserChangePwd(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class UserDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const userId = this.props.match.params.userId;
        this.userId = userId;
        if (isNaN(userId)) {
            this.props.history.push('/systemManager/userManager');
        }
        this.props.userDetailSaga({userId});
        this.state = {
            password: '',
            newPassword: ''
        }
    }

    userDelete = () => {
        const userId = this.userId;
        const userDeleteSaga = this.props.userDeleteSaga;
        Modal.confirm({
            title: `是否删除?`,
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                userDeleteSaga({userId})
            },
            onCancel() {
                //TODO
            },
        });
    }

    //Modal组件状态切换显示
    toggleModal = () => {
        this.props.dispatchUserModalVisible({userModalVisible: !this.props.userModalVisible});
    }

    //切换状态
    toggleStatus = status => {
        const userId = this.userId;
        this.props.userChangeStatusSaga({userId, status});
        this.toggleModal();
    }

    toEdit = () => {
        const userId = this.userId;
        this.props.history.push(`/systemManager/userManager/edit/${userId}`)
    }

    toggleChangePwdModal = () => {
        this.props.disUserPwdModalVisible({changePwdModalVisible: !this.props.changePwdModalVisible});
    }

    onChangePwdValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitPwd = () => {
        const userId = this.userId;
        const {password, newPassword} = this.state;
        if (newPassword && password) {
            this.props.userChangePwdSaga({
                userId,
                password,
                newPassword
            });
        } else {
            message.error('不能为空', 1);
        }
    }

    render() {
        return (
            <React.Fragment>
                <UserDetailContent userDelete={this.userDelete}
                                   toggleModal={this.toggleModal}
                                   toggleStatus={this.toggleStatus}
                                   toggleChangePwdModal={this.toggleChangePwdModal}
                                   onChangePwdValue={this.onChangePwdValue}
                                   submitPwd={this.submitPwd}
                                   toEdit={this.toEdit} {...this.props}/>
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
};

const UserDetailContent = props => {
    let initData = {
        createTime: 0,
        updateTime: 0,
        loginTime: 0
    };
    let rolesData = [];
    try {
        initData = props.userDetail.data.user;
        let roleList = props.userDetail.data.roleList;
        if (roleList) {
            roleList.map(item => rolesData.push(item.roleName));
        }
    } catch (err) {
    }
    const formList = [
        {
            label: '登录名',
            id: 'loginName',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.loginName
        },
        {
            label: '用户名',
            id: 'userName',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.userName
        },
        {
            label: '固定电话',
            id: 'telephone',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.telephone
        },
        {
            label: '移动电话',
            id: 'mobile',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.mobile
        },
        {
            label: '地址',
            id: 'userAddress',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.userAddress
        },
        {
            label: '邮箱',
            id: 'email',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.email
        },
        {
            label: '状态',
            id: 'status',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: initData.status === "NORMAL" ? '正常' : initData.status === "CANCEL" ? '作废' : initData.status === "LOCKED" ? '锁定' : ''
        },
        {
            label: '创建时间',
            id: 'createTime',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: new Date(initData.createTime).toLocaleString(),
        },
        {
            label: '更新时间',
            id: 'updateTime',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: new Date(initData.updateTime).toLocaleString(),
        },
        {
            label: '上次登录时间',
            id: 'loginTime',
            type: 'text',
            tag: 'input',
            disabled: true,
            initialValue: new Date(initData.loginTime).toLocaleString(),

        },
        {
            label: '所属机构',
            id: 'orgId',
            type: 'text',
            tag: 'treeSelect',
            disabled: true,
            initialValue: initData.orgName
        },
        {
            label: '角色',
            id: 'roleIds',
            tag: 'input',
            disabled: true,
            initialValue: rolesData,
        },
    ];

    //changePassword页面Modal的配置
    const changePwdModalProps = {
        title: '修改密码',
        visible: props.changePwdModalVisible,
        onCancel: props.toggleChangePwdModal,
        onOk: props.submitPwd,
        confirmLoading: props.loading,
        cancelText: '取消',
        okText: '确认'

    };
    return (
        <React.Fragment>
            <div className="containerContent">
                <FormComponent formList={formList} formItemLayout={formItemLayout}
                               moreItemInRow={true} layout={'horizontal'}/>
                <Row>
                    <Col offset={3} className='detailBtn'>
                        <Button onClick={props.userDelete}
                                type={'danger'}>删除</Button>
                        <Button onClick={props.toggleModal}>状态</Button>
                        <Button onClick={props.toEdit} type={'primary'}>修改</Button>
                        <Button onClick={props.toggleChangePwdModal}>修改密码</Button>
                        <Button onClick={() => {
                            props.history.push('/systemManager/userManager');
                        }}>返回</Button>
                    </Col>
                </Row>
                <Modal
                    title="更改用户状态"
                    visible={props.userModalVisible}
                    onCancel={props.toggleModal}
                    footer={null}
                >
                    {initData.status !== 'NORMAL' ? <Button onClick={() => {
                        props.toggleStatus('NORMAL')
                    }} style={{marginRight: 30}}>开启</Button> : null}
                    {initData.status !== 'LOCKED' ? <Button onClick={() => {
                        props.toggleStatus('LOCKED')
                    }} style={{marginRight: 30}}>锁定</Button> : null}
                    {initData.status !== 'CANCEL' ? <Button onClick={() => {
                        props.toggleStatus('CANCEL')
                    }}>作废</Button> : null}
                </Modal>
                <Modal {...changePwdModalProps} style={{minWidth: '60%'}}>
                    <Row style={{height: 30, lineHeight: '30px', margin: 10}}>
                        <Col span={2} offset={5}>原密码:</Col>
                        <Col span={10} offset={1}>
                            <Input type={'password'} id={'password'} onChange={props.onChangePwdValue}/>
                        </Col>
                    </Row>
                    <Row style={{height: 30, lineHeight: '30px', margin: 10}}>
                        <Col span={2} offset={5}>新密码:</Col>
                        <Col span={10} offset={1}>
                            <Input type={'password'} id={'newPassword'} onChange={props.onChangePwdValue}/>
                        </Col>
                    </Row>
                </Modal>
            </div>
        </React.Fragment>
    )
}
