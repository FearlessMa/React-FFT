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
 *  layout : 'horizontal','vertical','inline' (horizontal值时填写formItemLayout和formSubBtnLayout）
 *  formItemLayout ：表单输入布局  Obj
 *  formSubBtnLayout ： 提交按钮布局   Obj
 *  messageContent : loading提示的字符串 String
 *  messageSuccess : 请求成功后提示
 *  toBack : 返回按钮的onClick时间 Function
 *  selectData : selectTree组件数据
 *  loading ： 请求成功后清除loading显示 Bool
 *  moreItemInRow : 是否是一行显示多条item （布局不合适可配置formItemLayout）
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
        if(!nextProps.loading){
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
        let { layout, form, formItemLayout, formSubBtnLayout,
            formList, toBack, selectData, btn, moreItemInRow } = this.props;
        const { getFieldDecorator } = form;
        formItemLayout = formItemLayout || {};
        formSubBtnLayout = formSubBtnLayout ||{};
        formList = formList || [];
        toBack = toBack ||this.toBack;
        selectData = selectData || [];
        moreItemInRow = moreItemInRow || false ;
        btn = btn || {sub:null,back:null};
        // alert(moreItemInRow);
        return (
            <Form onSubmit={btn.sub?this.onSubmit:null} layout={layout}>
                {moreItemInRow?<Row>
                    {
                        formList.map((item, i) => {
                            return (
                                <Col span={11} offset={0} key={`${item.id}-${i}`}>
                                    <FormItem key={`${item.id}-${i}`} {...formItemLayout} label={item.label}>
                                        {
                                            createFormItem(getFieldDecorator, item, i, selectData)
                                        }
                                    </FormItem>
                                </Col>
                            )
                        })
                    }
                </Row>:
                    formList.map((item, i) => {
                        return (
                                <FormItem key={`${item.id}-${i}`} {...formItemLayout} label={item.label}>
                                    {
                                        createFormItem(getFieldDecorator, item, i, selectData)
                                    }
                                </FormItem>
                        )
                    })
                }
                    <FormItem {...formSubBtnLayout}>
                        {btn.sub?<Button  type={'primary'} htmlType={'submit'}>{btn.sub}</Button>:null}
                        {btn.back?<Button onClick={toBack} style={{marginLeft:30}}>{btn.back}</Button>:null}
                    </FormItem>

            </Form>
        )
    }
}

const createFormItem =(getFieldDecorator,item,index,selectData)=>{
    let disabled = item.disabled || false ;
    if(!item.rules)item.rules={};
    if(!item.initialValue)item.initialValue='';
    switch(item.tag){

        case 'input' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
                    }
                )(<Input type={'text'} disabled={disabled}/>)
            );

        case 'textarea' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
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
            );
        default :
            return null
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