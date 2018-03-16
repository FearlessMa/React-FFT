/**
 * Created by MHC on 2018/3/14.
 */

import React from 'react';
import { Row, Col, Form, Button, TreeSelect, Input, message,notification } from 'antd';

const {TextArea} = Input;
const TreeNode = TreeSelect.TreeNode;
const FormItem = Form.Item ;
const FromCreate =Form.create;

/**
 * From组件接收的props
 *  formList ： 表单数据（必填）Array
 *  formSubmit ： 接受处理表单提交的值 （必填）Function
 *  formItemLayout ：表单输入布局  Obj
 *  formSubBtnLayout ： 提交按钮布局   Obj
 *  formBackBtnLayout ： 返回按钮布局 Obj
 *  messageContent : loading提示的字符串 String
 *  messageSuccess : 请求成功后提示
 *  toBack : 返回按钮的onClick时间 Function
 *  selectData : selectTree组件数据
 *  loading ： 请求成功后清除loading显示 Bool
 * **/

@FromCreate()
export class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            messageLoading:this.props.loading,
            hideLoading:()=>{}
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let messageContent = this.props.messageContent ||'正在提交..';
                const hide = message.loading(messageContent, 0);
                this.props.formSubmit(values);
                this.setState({
                    hideLoading:hide
                })
            }
        });
    }

    componentWillReceiveProps(nextProps){
        // let messageSuccess = this.props.messageSuccess ||'成功！';
        if(nextProps.loading === true){
            this.state.hideLoading();
            // notification.success({
            //     message:messageSuccess
            // });
        }
    }

    toBack = ()=>{
        window.history.go(-1);
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout =this.props.formItemLayout || {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4,offset:1 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const formSubBtnLayout = this.props.formSubBtnLayout ||{
            xs: { span: 24 },
            sm: { span: 4,offset:5 },
        };
        const formBackBtnLayout =this.props.formBackBtnLayout|| {
            xs: { span: 24 },
            sm: { span: 4,offset:1 },
        };
        const formList = this.props.formList || [];
        const toBack = this.props.toBack ||this.toBack;
        const selectData = this.props.selectData || [];
        return (
            <Form onSubmit={this.onSubmit}>
                {
                    formList.map((item,i)=>{
                        return(
                            <Row key={`${item.id}-${i}`}>
                                <Col>
                                    <FormItem {...formItemLayout} label={item.label}>
                                        {
                                            createFormItem(getFieldDecorator,item,i,selectData)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        )
                    })
                }
                <Row>
                    <Col {...formSubBtnLayout}>
                        <Button  type={'primary'} htmlType={'submit'}>提交</Button>
                    </Col>
                    <Col {...formBackBtnLayout}>
                        <Button onClick={toBack}>返回</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const createFormItem =(getFieldDecorator,item,index,selectData)=>{
    let disabled = item.disabled || false ;
    if(!item.rules)item.rules={};
    switch(item.tag){

        case 'input' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules]
                    }
                )(<Input type={'text'} disabled={disabled}/>)
            );

        case 'textarea' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules]
                    }
                )(<TextArea autosize={{minRows:3,maxRows:6}} type={'text'} disabled={disabled}/>)
            );

        case 'treeSelect' :
            let treeData = selectTreeData(selectData);
            const treeNodeFun = (data)=>(
                data.map((item)=>{
                    if(item.children.length>0){
                        return <TreeNode title={item.name} value={item.id} key={item.id}>
                            {treeNodeFun(item.children)}
                        </TreeNode>
                    }
                    return <TreeNode title={item.name} value={item.id} key={item.id}/>
                })
            );
            return(
                getFieldDecorator( item.id,{
                        rules:[item.rules]
                    }
                )(<TreeSelect showSearch  disabled={disabled}>
                    {
                        treeNodeFun(treeData)
                    }
                </TreeSelect>)
            )
    }
};

const selectTreeData = (selectData)=>{
    let selectTreeList = [];
    let selectListMap = {};
    for(let i in selectData){
        selectData[i]['key'] = i;
        let _item = selectData[i];
        _item.children = [];
        _item.id = _item.orgId;
        selectListMap[_item.orgId] = _item;
    }
    for(let i in selectData){
        let _item = selectData[i];
        if(_item.parentOrgId in selectListMap){
            let parentPerm = selectListMap[_item.parentOrgId];
            parentPerm.children.push(_item);
        }else{
            selectTreeList.push(_item);
        }
    }
    return selectTreeList
};