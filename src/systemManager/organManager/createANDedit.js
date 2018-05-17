/**
 * Created by MHC on 2018/3/14.
 */
import React from 'react';
// import { Row, Col, Form, Button, Input, Icon, message } from 'antd';
import { message } from 'antd';
import { FormComponent, tranTreeData } from '../../common';
import { connect } from 'react-redux';
import { requestAllOrgList, requestOrgCreate, requestOrgDetail, requestOrgEdit } from '../redux/actions';
import { Row, Col, Divider } from 'antd';




const mapStateToProps = (state) => ({
    create: state.systemManager.organManager.create,
    detail: state.systemManager.organManager.detail,
    // loading: state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    requestAllOrgList: values => dispatch(requestAllOrgList(values)),
    requestOrgCreate: (value) => dispatch(requestOrgCreate(value)),
    orgDetailSaga: (orgId) => dispatch(requestOrgDetail(orgId)),
    orgEditSaga: values => dispatch(requestOrgEdit(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class OrganCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.requestAllOrgList({pageSize:1000});
        const orgId = this.props.match.params.orgId;
        this.orgId = orgId;
        if (isNaN(orgId) && orgId !== undefined) {
            message.error('数据错误', 1);
            this.props.history.push('/systemManager/organManager');
        }
        if (orgId) {
            this.props.orgDetailSaga({ orgId });
            this.state = {
                componentTitle: 'edit',
            };
        } else {
            this.state = {
                componentTitle: 'create',
            }
        }

    }

    formSubmit = (values) => {
        const orgId = this.orgId;
        if (orgId) {
            this.props.orgEditSaga({ orgId, ...values });
        } else {
            this.props.requestOrgCreate(values);
        }
    }

    // toBack = () => {

    // }

    // componentDidMount() {

    //     this.props.requestAllOrgList();
    //     const orgId = this.props.match.params.orgId;
    //     if (isNaN(orgId) && orgId !== undefined) {
    //         message.error('数据错误', 1);
    //         this.props.history.push('/systemManager/organManager');
    //         // TODO
    //     }
    //     if (orgId) {
    //         this.props.orgDetailSaga({ orgId });
    //         this.setState({
    //             componentTitle: 'edit',
    //         });
    //     }
    // }

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
}

const OrganLayout = (props) => {
    console.log('props.selectData')
    console.log(props.selectData)
    let data = [];
    const title = props.componentTitle === 'edit' ? '编辑机构' : '创建机构';
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
            id: 'orgName',
            rules: {
                required: true,
                message: '请输入正确真机构名称！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.orgName
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
            label: 'swiftCode',
            id: 'swiftCode',
            rules: {
                required: true,
                message: '请输入swiftCode！'
            },
            type: 'text',
            tag: 'input',
            initialValue: data.swiftCode
        },
        {
            label: '机构地址',
            id: 'address',
            rules: {
                // required: true,
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
    // try {
    //     console.log(this.props.detail)
    // } catch (err) {
    // }
    return (
        <React.Fragment>
            <div className='containerContent'>
                <Row>
                    <Col span={24}>
                        <div style={{ textAlign: 'center' }}>
                            <Divider><h2>{title}</h2></Divider>
                        </div>
                    </Col>
                </Row>
                <FormComponent formList={formList}
                    {...props}
                    btn={{ back: '返回', sub: '提交' }}
                />
            </div>
        </React.Fragment>
    )
}




