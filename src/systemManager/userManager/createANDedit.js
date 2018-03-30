/**
 * Created by MHC on 2018/3/27.
 */
import React from 'react';
import {FormComponent, tranTreeData, tranCheckboxData} from '../../common';
import {requestAllOrgList, requestRoleList, requestUserCreate, requestUserDetail} from "../redux/actions";
import {connect} from "react-redux";
import {message} from "antd/lib/index";

const mapStateToProps = (state) => ({
    //机构列表数据
    organCreate: state.systemManager.organManager.create,
    //角色列表
    roleListIndex: state.systemManager.roleManager.index,
    userDetail: state.systemManager.userManager.detail,
    loading: state.systemManager.userManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    requestAllOrgList: () => dispatch(requestAllOrgList()),
    roleListSaga: values => dispatch(requestRoleList(values)),
    userCreateSaga: values => dispatch(requestUserCreate(values)),
    userDetailSaga: value => dispatch(requestUserDetail(value)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class UserCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            password: '',
            resPassword: '',
            componentTitle: 'create'
        }
    }

    onSubmit = values => {
        console.log(values);
        this.props.userCreateSaga(values);
    }

    //form 表单onChange
    onChange = (e) => {
        if (e.target.id == 'password') {
            this.setState({
                password: e.target.value
            });
        }
        // if (e.target.id == 'resPassword') {
        //     this.setState({
        //         resPassword: e.target.value
        //     });
        // }
    }

    checkPassword = (rules, v, callback) => {
        const password = this.state.password;
        this.setState({resPassword: v})
        if (!v) callback('密码不能为空');
        if (password && password != v) {
            callback('输入的密码不一致');
        } else {
            callback()
        }
    }

    checkResPassword = (rules, v, callback) => {
        const resPassword = this.state.resPassword;
        if (!v) callback('密码不能为空');
        if (v && resPassword && v != resPassword) {
            callback('输入的密码不一致1');
        } else {
            callback()
        }
    }

    componentDidMount() {
        this.props.requestAllOrgList();
        this.props.roleListSaga();
        const userId = this.props.match.params.userId;
        if (isNaN(userId) && userId !== undefined) {
            //TODO
            alert('错误');
        }
        if (userId) {
            const hide = message.loading('正在获取数据...', 0);
            this.props.userDetailSaga({userId});
            this.setState({
                componentTitle: 'edit',
                editHide: hide
            });
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
                <UserCreateContent formSubmit={this.onSubmit} onChange={this.onChange}
                                   checkResPassword={this.checkResPassword} checkPassword={this.checkPassword}
                                   componentTitle={this.state.componentTitle} {...this.props}/>
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
const formSubBtnLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10, offset: 5},
    }
};

const UserCreateContent = props => {
    let selectData = [];
    let checkboxData = [{label: '', value: ''}];
    let initialValueData = {};
    let checkboxInitValue = [];
    try {
        selectData = tranTreeData(props.organCreate.orgList, 'orgId', 'parentOrgId', 'shortName');
        checkboxData = tranCheckboxData(props.roleListIndex.data.roleList, 'roleName', 'roleId');
        if (props.componentTitle === 'edit') {
            initialValueData = props.userDetail.data.user;
            const roleList = props.userDetail.data.roleList;
            if (roleList) {
                roleList.map(item => checkboxInitValue.push(item.roleId));
            }
        }
    } catch (err) {
    }
    const passwordRules = {
        required: true,
        disabled: false
    };
    if (props.componentTitle === 'edit') {
        passwordRules.required = false;
        passwordRules.disabled = true;
    }
    const formList = [
        {
            label: '登录名',
            id: 'loginName',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.loginName
        },
        {
            label: '用户名',
            id: 'userName',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.userName
        },
        {
            label: '用户密码',
            id: 'password',
            type: 'password',
            tag: 'input',
            rules: {
                required: passwordRules.required,
                validator: props.checkResPassword
            },
            disabled: passwordRules.disabled
        },
        {
            label: '确认密码',
            id: 'rePassword',
            type: 'password',
            tag: 'input',
            rules: {
                required: passwordRules.required,
                validator: props.checkPassword
            },
            disabled: passwordRules.disabled
        },
        {
            label: '固定电话',
            id: 'telephone',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.telephone
        },
        {
            label: '移动电话',
            id: 'mobile',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.mobile
        },
        {
            label: '地址',
            id: 'userAddress',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.userAddress
        },
        {
            label: '邮箱',
            id: 'email',
            type: 'text',
            tag: 'input',
            rules: {
                required: true
            },
            initialValue: initialValueData.email
        },
        {
            label: '所属机构',
            id: 'orgId',
            rules: {
                required: true,
                message: '请输选择机构！'
            },
            type: 'text',
            tag: 'treeSelect',
            initialValue: initialValueData.orgId

        },
        {
            label: '角色',
            id: 'roleIds',
            tag: 'checkbox',
            initialValue: checkboxInitValue,
            rules: {
                required: true
            },
        },
    ];


    return (
        <React.Fragment>
            <div className="containerHeader">
                {props.componentTitle === 'create' ? '创建用户' : '编辑用户'}
            </div>
            <div className="containerContent">
                <FormComponent formList={formList}
                               formItemLayout={formItemLayout}
                               formSubBtnLayout={formSubBtnLayout}
                               btn={{sub: '提交', back: '返回'}}
                               formSubmit={props.formSubmit}
                               layout={'horizontal'}
                               moreItemInRow={true}
                               onChange={props.onChange}
                               selectData={selectData}
                               checkboxData={checkboxData}/>
            </div>
        </React.Fragment>
    );
};

// function tranCheckboxData(dataList,label,value){
//     if(!Array.isArray(dataList)){
//         throw new Error('tranCheckboxData的参数dataList不是一个数组');
//     }
//     label=label+'';
//     value=value+'';
//
//     let checkboxData=[];
//     dataList.map(item=>{
//         checkboxData.push({
//             label:item[label],
//             value:item[value]
//         });
//     })
//     return checkboxData
// }