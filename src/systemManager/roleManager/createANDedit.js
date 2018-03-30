/**
 * Created by MHC on 2018/3/23.
 */
import React from 'react';
import {FormComponent, tranTreeData} from '../../common';
import {requestPowerList, requestRoleCreate, requestRoleDetail} from "../redux/actions";
import {connect} from "react-redux";
import {TreeSelect} from 'antd';
import {message} from "antd/lib/index";


const mapStateToProps = state => ({
    powerIndex: state.systemManager.powerManager.index,
    detail: state.systemManager.roleManager.detail,
    loading: state.systemManager.roleManager.loading
});
const mapDispatchToProps = dispatch => ({
    powerListSaga: () => dispatch(requestPowerList()),
    roleCreateSaga : values=>dispatch(requestRoleCreate(values)),
    roleDetailSaga: values => dispatch(requestRoleDetail(values)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class RoleCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state={
            componentTitle :'create'
        }
    }

    onSubmit = values => {
        this.props.roleCreateSaga(values);
    }

    componentDidMount() {
        this.props.powerListSaga();
        const roleId = this.props.match.params.roleId;
        if(roleId){
            if (isNaN(roleId)) {
                this.props.history.push('/systemManager/roleManager');
            }
            this.setState({
                componentTitle: 'edit',
            });
            if(!this.props.detail){
                this.props.roleDetailSaga({roleId});
                const hide = message.loading('正在获取数据...',0);
                this.setState({
                    editHide: hide
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && this.state.componentTitle == "edit") {
            this.state.editHide();
        }
    }

    render() {
        return (
            <React.Fragment>
                <RoleCreateContent componentTitle={this.state.componentTitle} onSubmit={this.onSubmit} {...this.props}/>
            </React.Fragment>
        );
    }

}

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4, offset: 1},
        // sm: {span:11}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10},
        // sm:{ span: 13}
    },
};

const formSubBtnLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10, offset: 5},
    }
};

const treeSelectProps = {
    treeCheckable: true,
    showCheckedStrategy: TreeSelect.SHOW_ALL,
};

const RoleCreateContent = props => {
    let data = [];
    let initialTreeSelect = [];
    if(props.match.params.roleId){
        try{
            data =props.detail.data.role;
            let permList =props.detail.data.permList;
            permList.map(item=>initialTreeSelect.push(item.permId));
        }catch (err){}
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
            initialValue:data.roleName
        },
        {
            label: '角色描述',
            tag: 'textarea',
            id: 'description',
            initialValue:data.description
        },
        {
            label: '角色权限',
            tag: 'treeSelect',
            id: 'permIds',
            rules: {
                required: true,
                message: '角色权限不能为空！'
            },
            initialValue:initialTreeSelect
        },
    ];
    let treeSelectData = [];
    try {
        treeSelectData = tranTreeData(props.powerIndex.powerList.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {

    }

    return (
        <React.Fragment>
            <div className="containerHeader">
                创建角色
            </div>
            <div className="containerContent">
                <FormComponent formList={formList} formSubmit={props.onSubmit} btn={{back: '返回', sub: '提交'}}
                               layout={'horizontal'} loading={props.loading} formItemLayout={formItemLayout}
                               formSubBtnLayout={formSubBtnLayout} selectData={treeSelectData}
                               treeSelectProps={treeSelectProps}/>
            </div>
        </React.Fragment>
    )
}
