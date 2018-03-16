/**
 * Created by MHC on 2018/3/13.
 */
import React from 'react';
// import { Table, Col, Row, Button } from 'antd';
import {connect} from 'react-redux';
import {requestOrgList} from '../redux/actions';
import './index.less';
import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import OrganCreateContainer from './create';
import OrganDetailContainer from './detail';
import { TableComponent } from '../../common/tableComponent';

export const OrganLayout = ()=>{
    return(
        <Switch>
            <Route path={`/systemManager/organManager/create`} component={OrganCreateContainer}/>
            <Route path={`/systemManager/organManager/:orgId`} component={OrganDetailContainer}/>
            <Route exact path={`/systemManager/organManager/`} component={OrganContainer}/>
        </Switch>
    )
};

const mapStateToProps = (state)=>({index:state.systemManager.organManager.index});
const mapDispatchToProps = (dispatch)=>({
    queryOrgList : ()=>dispatch(requestOrgList())
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

    render() {
        const { loading, orgList } = this.props.index;
        return <OraganContent toCreate={this.toCreate} dataSource={orgList} loading={loading}/>
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
const OraganContent = (props)=>{

    return (
        <React.Fragment>
            {/*<div className="containerHeader">*/}
                {/*机构管理*/}
            {/*</div>*/}
            <div className="containerContent">
                <TableComponent componentTitle={'机构列表'} BtnName={'创建机构'}
                                columns={columns} bordered={true} rowKey={'orgId'}
                                {...props}/>
            </div>
        </React.Fragment>
    )
};



