/**
 * Created by MHC on 2018/3/14.
 */
import React from 'react';
// import { Row, Col, Form, Button, Input, Icon, message } from 'antd';
import { message } from 'antd';
import { FormComponent } from '../../common/formComponent';
import { connect } from 'react-redux';
import { requestAllOrgList, requestOrgCreate } from '../redux/actions';

message.config({
    top: '35%',
});

const mapStateToProps = (state)=>({
    create:state.systemManager.organManager.create,
    loading:state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch)=>({
    requestAllOrgList: ()=>dispatch(requestAllOrgList()),
    requestOrgCreate:(value)=>dispatch(requestOrgCreate(value))
});

@connect(mapStateToProps,mapDispatchToProps)
export default class OrganCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    formSubmit = (values)=>{
        this.props.requestOrgCreate(values);
    }

    toBack = ()=>{

    }

    componentDidMount(){
        this.props.requestAllOrgList();
    }

    render() {
        return <OrganLayout
                            formSubmit={this.formSubmit}
                            formList={formList}
                            selectData={this.props.create.orgList}
                            loading={this.props.orgCreate}
                            btn={{back:'返回',sub:'提交'}}
                            layout={'horizontal'}
                            formItemLayout={formItemLayout}
                            formSubBtnLayout={formSubBtnLayout}
                            // moreItemInRow={true}
                            />
    }

}
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4,offset:1 },
        // sm: {span:11}
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
        // sm:{ span: 13}
    },
};
const formSubBtnLayout = {
    wrapperCol :{
        xs: { span: 24 },
        sm: { span: 10,offset:5 },
    }
}
const formList = [
    {
        label:'真实机构号',
        id:'realOrgId',
        rules:{
            required: true,
            message: '请输入正确真实机构号！'
        },
        type:'text',
        tag: 'input',
        // disabled:true
    },
    {
        label:'机构名称',
        id:'name',
        rules:{
            required: true,
            message: '请输入正确真机构名称！'
        },
        type:'text',
        tag: 'input',
    },
    {
        label:'机构简称',
        id:'shortName',
        rules:{
            required: true,
            message: '请输入机构简称！'
        },
        type:'text',
        tag: 'input',
    },
    {
        label:'机构地址',
        id:'address',
        rules:{
            required: true,
            message: '请输入机构地址！'
        },
        type:'text',
        tag: 'input',
    },
    {
        label:'上级机构',
        id:'parentOrgId',
        // rules:{
        //     // required: true,
        //     message: '请输选择上级机构！'
        // },
        type:'text',
        tag: 'treeSelect',
    },
];

const OrganLayout = (props)=>{
    return(
        <React.Fragment>
            <div className='containerHeader'>创建机构</div>
            <div className='containerContent'>
                <FormComponent {...props}/>
            </div>
        </React.Fragment>
    )
}




