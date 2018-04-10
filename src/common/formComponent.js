/**
 * Created by MHC on 2018/3/14.
 */

import React from 'react';
import { Row, Col, Form, Button, TreeSelect, Input, message, Tree, Checkbox, notification } from 'antd';

const {TextArea} = Input;
const TreeNode = TreeSelect.TreeNode;
const FormItem = Form.Item ;
const FromCreate =Form.create;

/**
 * From组件接收的props
 *  formList ： 表单数据（必填）Array
 *  formSubmit ： 接受处理表单提交的值 （btn.sub填写formSubmit必填）Function
 *  selectData : selectTree组件数据 (必须树形结构，可以使tranTreeData(可转换树形结构的数据，子属性key,父属性key,显示的key)转换树形结构）Array
 *  treeSelectProps : selectTree组件配置 Obj
 *  treeData : Tree组件数据
 *  btn : {{back:'返回',sub:'提交'}} 显示按钮 Object
 *  layout : 'horizontal','vertical','inline' (horizontal值时填写formItemLayout和formSubBtnLayout）
 *  formItemLayout ：表单输入布局  Obj
 *  formSubBtnLayout ： 提交按钮布局   Obj
 *  messageContent : loading提示的字符串 String
 *  messageSuccess : 请求成功后提示
 *  toBack : 返回按钮的onClick时间 Function
 *  loading ： 请求成功后清除loading显示 Bool
 *  moreItemInRow : 是否是一行显示多条item （布局不合适可配置formItemLayout） Object
 *  onChange : 可以调用e.target获得当前表单的值
 *  checkbox : checkboxData 需要使用tranCheckboxData(数组数据,label属性key，value属性key)
 * **/

@FromCreate()
export class FormComponent extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     messageLoading:this.props.loading,
        //     hideLoading:()=>{}
        // }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // let messageContent = this.props.messageContent ||'正在提交..';
                // const hide = message.loading(messageContent, 0);
                this.props.formSubmit(values);
                // this.setState({
                //     hideLoading:hide
                // })
            }
        });
    }

    // checkValue=()=>{
    //
    // }

    toBack = ()=>{
        window.history.go(-1);
    }

    render(){
        let { layout, form, formItemLayout, formSubBtnLayout,
            formList, toBack, selectData, btn, moreItemInRow, treeSelectProps, treeData, onChange,checkboxData} = this.props;
        const { getFieldDecorator } = form;
        formItemLayout = formItemLayout || {};
        formSubBtnLayout = formSubBtnLayout ||{};
        formList = formList || [];
        toBack = toBack ||this.toBack;
        selectData = selectData || [];
        checkboxData = checkboxData ||[];
        treeSelectProps = treeSelectProps || Object.assign({allowClear:true,showSearch:true},treeSelectProps);
        moreItemInRow = moreItemInRow || false ;
        btn = btn || {sub:null,back:null};
        return (
            <Form onSubmit={btn.sub?this.onSubmit:null} layout={layout} onChange={onChange?onChange:null}>
                {moreItemInRow?<Row>
                    {
                        formList.map((item, i) => {
                            return (
                                <Col span={11} offset={0} key={`${item.id}-${i}`}>
                                    <FormItem key={`${item.id}-${i}`} {...formItemLayout} label={item.label}>
                                        {
                                            createFormItem(getFieldDecorator, item, i, selectData,treeSelectProps,treeData,
                                                checkboxData)
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
                                        createFormItem(getFieldDecorator, item, i, selectData,treeSelectProps,treeData,
                                            checkboxData)
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

const createFormItem =(getFieldDecorator,item,index,selectData,treeSelectProps,treeData,checkboxData)=>{
    let disabled = item.disabled || false ;
    if(!item.rules)item.rules={};
    if(!item.initialValue)item.initialValue='';
    let type = item.type || 'text';
    switch(item.tag){

        case 'input' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
                    }
                )(<Input type={type} disabled={disabled}/>)
            );

        case 'textarea' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
                    }
                )(<TextArea autosize={{minRows:3,maxRows:6}} type={type} disabled={disabled}/>)
            );

        case 'treeSelect' :

            return(
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
                    }
                )(<TreeSelect   disabled={disabled} {...treeSelectProps} >
                    {
                        treeNodeFun(selectData)
                    }
                </TreeSelect>)
            );
        case 'tree' :
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue
                    }
                )(<Tree   disabled={disabled}  showLine>
                    {
                        treeNodeFun1(treeData)
                    }
                </Tree>)
            );
        case "checkbox":
            return (
                getFieldDecorator( item.id,{
                        rules:[item.rules],
                        initialValue:item.initialValue,
                    }
                )( <Checkbox.Group options={checkboxData} />)
            );
        default :
            return null
    }
};

const treeNodeFun = (data)=>(
    data.map((item)=>{
        if(item.children){
            return <TreeNode title={item.name} value={item.id} key={item.id}>
                {treeNodeFun(item.children)}
            </TreeNode>
        }
        return <TreeNode title={item.name} value={item.id} key={item.id}/>
    })
);
const treeNodeFun1 = (data)=>(
    data.map((item)=>{
        if(item.children){
            return <Tree.TreeNode title={item.name} value={item.id} key={item.id}>
                {treeNodeFun1(item.children)}
            </Tree.TreeNode>
        }
        return <Tree.TreeNode title={item.name} value={item.id} key={item.id}/>
    })
);

export function tranCheckboxData(dataList,label,value){
    if(!Array.isArray(dataList)){
        throw new Error('tranCheckboxData的参数dataList不是一个数组');
    }
    label=label+'';
    value=value+'';

    let checkboxData=[];
    dataList.map(item=>{
        checkboxData.push({
            label:item[label],
            value:item[value]
        });
    })
    return checkboxData
}

