/**
 * Created by MHC on 2018/3/13.
 */
import React from 'react';
import {Col, Row, Button} from 'antd';
import {connect} from 'react-redux';
import {requestOrgList} from '../redux/actions';
import './index.less';
import {Switch, Route, Redirect} from 'react-router-dom';
import OrganCreateContainer from './createANDedit';
import {OrganDetailContainer} from './detail';
import {TableComponent, FormComponent, BreadcrumbComponent} from 'common';
import {ViewMembers} from "./viewMembers";


const breadcrumbNameMap = {
    '/systemManager': '系统管理',
    '/systemManager/organManager': '机构管理',
    '/systemManager/organManager/create': '创建机构',
    '/systemManager/organManager/detail': '机构详情',
    '/systemManager/organManager/edit': '编辑机构',
    '/systemManager/organManager/viewMembers': '编辑人员',
};


export const OrganLayout = props => {
    return (
        <React.Fragment>
            <BreadcrumbComponent {...props} breadcrumbNameMap={breadcrumbNameMap}/>
            <Switch>
                <Route path={`/systemManager/organManager/create`} component={OrganCreateContainer}/>
                <Route path={`/systemManager/organManager/edit/:orgId`} component={OrganCreateContainer}/>
                <Route path={`/systemManager/organManager/detail/:orgId`} component={OrganDetailContainer}/>
                <Route path={`/systemManager/organManager/viewMembers/:orgId/:name`} component={ViewMembers}/>
                <Route exact path={`/systemManager/organManager`} component={OrganContainer}/>
                <Redirect to={`/systemManager/organManager`}/>
            </Switch>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    index: state.systemManager.organManager.index,
    loading: state.systemManager.organManager.loading
});
const mapDispatchToProps = (dispatch) => ({
    queryOrgList: (v) => dispatch(requestOrgList(v))
});

@connect(mapStateToProps, mapDispatchToProps)
class OrganContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.queryOrgList();
    }

    toCreate = () => {
        this.props.history.push("/systemManager/organManager/create");
    }

    formSubmit = (values) => {
        this.props.queryOrgList(values)
    }
    //分页
    paginationOnChange = (pagination) => {
        this.props.queryOrgList({current: pagination.current, pageSize: pagination.pageSize});
    }

    allOrgToBlockChain = ()=>{

    }

    render() {
        let orgList = [];
        let pagination = {};
        try {
            orgList = this.props.index.data.orgList;
            pagination = this.props.index.data.pagination;
        } catch (e) {
        }
        return <OraganContent formSubmit={this.formSubmit}
                              btnClick={this.toCreate}
                              dataSource={orgList}
                              pagination={pagination}
                              allOrgToBlockChain={this.allOrgToBlockChain}
                              onChange={this.paginationOnChange}
                              {...this.props}/>
    }

}

const columns = [
    {
        title: '机构名称',
        dataIndex: 'name',
        render: (text, record) => <a href={`#/systemManager/organManager/detail/${record.orgId}`}>{text}</a>,
    },
    {
        title: '真实机构号',
        dataIndex: 'realOrgId',
    },
    {
        title: '机构简称',
        dataIndex: 'shortName',
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (text) => {
            let show = text;
            if (text === "NORMAL") {
                show = "正常";
            } else if (text === "CANCEL") {
                show = "作废";
            } else if (text === "LOCKED") {
                show = "锁定";
            } else {
                show = text;
            }
            return (
                <span>{show}</span>
            )
        }
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        render: text => <span>{new Date(text).toLocaleString().substr(0, 9)}</span>
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        render: text => <span>{new Date(text).toLocaleString()}</span>
    },
];

const searchComponentData = [
    {
        label: '真实机构号',
        id: 'realOrgId',
        // rules:{
        //     required: true,
        //     message: '请输入正确真实机构号！'
        // },
        type: 'text',
        tag: 'input',
        // disabled:true
    },
    {
        label: '机构名称',
        id: 'name',
        // rules:{
        //     required: true,
        //     message: '请输入正确真机构名称！'
        // },
        type: 'text',
        tag: 'input',
    },
];

/** TableComponent
 *  componentTitle : 标题，
 *  btnName ： 按钮名称
 *  btnClick : 按钮事件
 *  其他为antd的table属性
 *
 * **/

const OtherComponent = (props) => {

    return (<React.Fragment>
        <Col span={3} offset={7}>
            <div onClick={props.allOrgToBlockChain} className='btn'>同步所有</div>
        </Col>
        <Col span={3}>
            <div onClick={props.btnClick} className='btn'>创建机构</div>
        </Col>
    </React.Fragment>)
};

const OraganContent = (props) => {

    return (
        <React.Fragment>
            <div className="containerHeader">
                <Row className=''>
                    <Col span={20} offset={3}>
                        <FormComponent formList={searchComponentData}
                                       btn={{sub: '搜索'}}
                                       layout={'inline'}
                                       formSubmit={props.formSubmit}
                        />
                    </Col>
                </Row>
            </div>
            <div className="containerContent">
                <TableComponent componentTitle={'机构列表'} 
                                columns={columns} bordered={true} rowKey={'orgId'}
                                btnClick={props.btnClick} pagination={props.pagination}
                                {...props} OtherComponent={OtherComponent}/>
            </div>
        </React.Fragment>
    )
};




