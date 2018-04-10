/**
 * Created by MHC on 2018/3/14.
 */
import React from 'react';
// import { Row, Col, Form, Button, Input, Icon, message } from 'antd';
import {message} from 'antd';
import {FormComponent, tranTreeData} from '../../common';
import {connect} from 'react-redux';
import {requestAllOrgList, requestOrgCreate, requestOrgDetail, requestOrgEdit} from '../redux/actions';

message.config({
    top: '35%',
});


const mapStateToProps = (state) => ({
    create: state.systemManager.organManager.create,
    detail: state.systemManager.organManager.detail,
    // loading: state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    requestAllOrgList: () => dispatch(requestAllOrgList()),
    requestOrgCreate: (value) => dispatch(requestOrgCreate(value)),
    orgDetailSaga: (orgId) => dispatch(requestOrgDetail(orgId)),
    orgEditSaga: values => dispatch(requestOrgEdit(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class OrganCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            componentTitle: 'create',
        }
    }

    formSubmit = (values) => {
        const orgId = this.props.match.params.orgId;
        if (orgId) {
            this.props.orgEditSaga({orgId, ...values});
        } else {
            this.props.requestOrgCreate(values);
        }
    }

    toBack = () => {

    }

    componentDidMount() {

        this.props.requestAllOrgList();
        const orgId = this.props.match.params.orgId;
        if (isNaN(orgId) && orgId !== undefined) {
            alert('错误');
            // TODO
        }
        if (orgId) {
            this.props.orgDetailSaga({orgId});
            this.setState({
                componentTitle: 'edit',
            });
        }
    }

    render() {
        let selectData = [];
        try {
            selectData = tranTreeData(this.props.create.orgAllList.data.orgList, 'orgId', 'parentOrgId', 'name');
        } catch (e) {
        }
        return <OrganLayout formSubmit={this.formSubmit}
                            selectData={selectData}
            // loading={this.props.orgCreate}
                            layout={'horizontal'}
                            formItemLayout={formItemLayout}
                            formSubBtnLayout={formSubBtnLayout}
            // moreItemInRow={true}
                            componentTitle={this.state.componentTitle}
            // editHide = {this.state.editHide}
                            {...this.props}
        />
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
}

const OrganLayout = (props) => {
    const title = props.componentTitle === 'create' ? '创建' : '修改';
    let data = [];
    try {
        if (props.componentTitle === 'edit') {
            data = props.detail.detailData.data.org;
        }
    } catch (err) {
    }
    const formList = [
        {
            label: '真实机构号',
            id: 'realOrgId',
            rules: {
                required: true,
                message: '请输入正确真实机构号！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.realOrgId
            // disabled:true
        },
        {
            label: '机构名称',
            id: 'name',
            rules: {
                required: true,
                message: '请输入正确真机构名称！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.name
        },
        {
            label: '机构简称',
            id: 'shortName',
            rules: {
                required: true,
                message: '请输入机构简称！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.shortName
        },
        {
            label: '机构地址',
            id: 'address',
            rules: {
                required: true,
                message: '请输入机构地址！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.address
        },
        {
            label: '上级机构',
            id: 'parentOrgId',
            // rules:{
            //     // required: true,
            //     message: '请输选择上级机构！'
            // },
            type: 'text',
            tag: 'treeSelect',
            initialValue: data.parentOrgId

        },
    ];
    try {
        console.log(this.props.detail)
    } catch (err) {
    }
    return (
        <React.Fragment>
            <div className='containerHeader'>
                {title}机构
            </div>
            <div className='containerContent'>
                <FormComponent formList={formList}
                               {...props}
                               btn={{back: '返回', sub: title}}
                />
            </div>
        </React.Fragment>
    )
}




