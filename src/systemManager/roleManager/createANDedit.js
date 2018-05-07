/**
 * Created by MHC on 2018/3/23.
 */
import React from 'react';
import { FormComponent, tranTreeData } from '../../common';
import {
    requestPowerList, requestRoleCreate, requestRoleDetail, requestRoleEdit, roleComponentTitle
} from "../redux/actions";
import { connect } from "react-redux";
import { TreeSelect, Row, Col, Divider } from 'antd';



const mapStateToProps = state => ({
    powerIndex: state.systemManager.powerManager.index,
    detail: state.systemManager.roleManager.detail,
    loading: state.systemManager.roleManager.loading,
    componentTitle: state.systemManager.roleManager.componentTitle
});
const mapDispatchToProps = dispatch => ({
    powerListSaga: () => dispatch(requestPowerList()),
    roleCreateSaga: values => dispatch(requestRoleCreate(values)),
    roleDetailSaga: values => dispatch(requestRoleDetail(values)),
    roleComponentTitle: values => dispatch(roleComponentTitle(values)),
    requestRoleEditSaga: values => dispatch(requestRoleEdit(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class RoleCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.powerListSaga();
        const roleId = this.props.match.params.roleId;
        this.roleId = roleId;
        if (roleId) {
            if (isNaN(roleId)) {
                this.props.history.push('/systemManager/roleManager');
            }
            this.props.roleComponentTitle({ componentTitle: 'edit' })
            if (!this.props.detail) {
                this.props.roleDetailSaga({ roleId });
            }
        }
    }

    onSubmit = values => {
        if (this.props.componentTitle === 'edit') {
            console.log({ roleId: this.roleId, ...values });
            this.props.requestRoleEditSaga({ roleId: this.roleId, ...values });
        } else {
            this.props.roleCreateSaga(values);
        }
    }

    render() {
        return (
            <React.Fragment>
                <RoleCreateContent onSubmit={this.onSubmit} {...this.props} />
            </React.Fragment>
        );
    }

}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 4 },
        // sm: {span:11}
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
        // sm:{ span: 13}
    },
};

const formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10, offset: 10 },
    }
};

//TreeSelect antd的配置
const treeSelectProps = {
    treeCheckable: true,
    showCheckedStrategy: TreeSelect.SHOW_ALL,
};

const RoleCreateContent = props => {
    let data = [];
    let initialTreeSelect = [];
    let componentTitle = props.componentTitle === 'edit' ? '修改' : '创建';
    if (props.match.params.roleId) {
        try {
            data = props.detail.data.role;
            let permList = props.detail.data.permList;
            permList.map(item => initialTreeSelect.push(item.permId));
        } catch (err) {
        }
    }
    let formList = [
        {
            label: '角色名称',
            tag: 'input',
            id: 'roleName',
            rules: {
                required: true,
                message: '角色名称不能为空！'
            },
            initialValue: data.roleName
        },
        {
            label: '角色描述',
            tag: 'textarea',
            id: 'description',
            initialValue: data.description
        },
        {
            label: '角色权限',
            tag: 'treeSelect',
            id: 'permIds',
            rules: {
                required: true,
                message: '角色权限不能为空！'
            },
            initialValue: initialTreeSelect
        },
    ];
    let treeSelectData = [];
    try {
        treeSelectData = tranTreeData(props.powerIndex.powerList.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {

    }

    return (
        <React.Fragment>
            <div className="containerContent">
                <Row>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            <Divider><h2>{componentTitle}角色</h2></Divider>
                        </div>
                    </Col>
                </Row>
                <FormComponent
                    formList={formList}
                    formSubmit={props.onSubmit}
                    btn={{ back: '返回', sub: componentTitle }}
                    layout={'horizontal'}
                    loading={props.loading}
                    formItemLayout={formItemLayout}
                    formSubBtnLayout={formSubBtnLayout}
                    selectData={treeSelectData}
                    treeSelectProps={treeSelectProps}
                />
            </div>
        </React.Fragment>
    )
}
