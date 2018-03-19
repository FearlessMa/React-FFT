/**
 * Created by MHC on 2018/3/13.
 */
import React from 'react';
import { Table, Col, Row, Button, Form } from 'antd';
import {connect} from 'react-redux';
import {requestOrgList} from '../redux/actions';
import './index.less';
import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import OrganCreateContainer from './create';
import {DetailLayout} from './detail';
import { TableComponent } from '../../common/tableComponent';
import {FormComponent } from '../../common/formComponent';
export const OrganLayout = ()=>{
    return(
        <Switch>
            <Route path={`/systemManager/organManager/create`} component={OrganCreateContainer}/>
            <Route path={`/systemManager/organManager/:orgId`} component={DetailLayout}/>
            <Route exact path={`/systemManager/organManager/`} component={OrganContainer}/>
        </Switch>
    )
};

const mapStateToProps = (state)=>({
    index:state.systemManager.organManager.index,
    loading:state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch)=>({
    queryOrgList : (v)=>dispatch(requestOrgList(v))
});
@connect(mapStateToProps,mapDispatchToProps)
class OrganContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(...arg) {
        super(...arg);
    }

    componentDidMount(){
        this.props.queryOrgList();
    }

    toCreate = ()=>{
        this.context.router.history.push("/systemManager/organManager/create");
    }

    formSubmit = (values)=>{
        console.log(values);
        this.props.queryOrgList(values)
    }

    render() {
        const { orgList } = this.props.index;
        return <OraganContent formSubmit={this.formSubmit} toCreate={this.toCreate} dataSource={orgList} {...this.props}/>
    }

}

const columns = [
    {
        title : '机构名称',
        dataIndex : 'name',
        render: (text,record)=> <a href={`#/systemManager/organManager/${record.orgId}`}>{text}</a>,
    },
    {
        title : '真实机构号',
        dataIndex : 'realOrgId',
    },
    {
        title : '机构简称',
        dataIndex : 'shortName',
    },
    {
        title : '状态',
        dataIndex : 'status',
    },
    {
        title : '创建时间',
        dataIndex : 'createTime',
    },
    {
        title : '更新时间',
        dataIndex : 'updateTime',
    },
];

const searchComponentData = [
    {
        label:'真实机构号',
        id:'realOrgId',
        // rules:{
        //     required: true,
        //     message: '请输入正确真实机构号！'
        // },
        type:'text',
        tag: 'input',
        // disabled:true
    },
    {
        label:'机构名称',
        id:'name',
        // rules:{
        //     required: true,
        //     message: '请输入正确真机构名称！'
        // },
        type:'text',
        tag: 'input',
    },
];
const OraganContent = (props)=>{

    return (
        <React.Fragment>
            <div className="containerHeader" >
                <Row className=''>
                    <Col span={20} offset={3}>
                        <FormComponent formList={searchComponentData}
                                       btn={{sub:'搜索'}}
                                       layout={'inline'}
                                       messageContent={'搜索中...'}
                                       loading={props.loading}
                                       formSubmit={props.formSubmit}
                        />
                    </Col>
                </Row>
            </div>
            <div className="containerContent">
                <TableComponent  componentTitle={'机构列表'} BtnName={'创建机构'}
                                 columns={columns} bordered={true} rowKey={'orgId'}
                                 {...props}/>
            </div>
        </React.Fragment>
    )
};



