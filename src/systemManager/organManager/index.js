/**
 * Created by MHC on 2018/3/13.
 */
import React from 'react';
import {Table, Col, Row, Button, Form} from 'antd';
import {connect} from 'react-redux';
import {requestOrgList} from '../redux/actions';
import './index.less';
import {Switch, Route} from 'react-router-dom';
import OrganCreateContainer from './createANDedit';
import {DetailLayout} from './detail';
import {TableComponent} from '../../common/tableComponent';
import {FormComponent} from '../../common/formComponent';
import {ViewMembers} from "./viewMembers";

export const OrganLayout = () => {
    return (
        <Switch>
            <Route path={`/systemManager/organManager/create`} component={OrganCreateContainer}/>
            <Route path={`/systemManager/organManager/edit/:orgId`} component={OrganCreateContainer}/>
            <Route path={`/systemManager/organManager/detail/:orgId`} component={DetailLayout}/>
            <Route path={`/systemManager/organManager/viewMembers/:orgId/:name`} component={ViewMembers}/>
            <Route exact path={`/systemManager/organManager/`} component={OrganContainer}/>
        </Switch>
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
    }

    componentDidMount() {
        this.props.queryOrgList();
    }

    toCreate = () => {
        this.props.history.push("/systemManager/organManager/create");
    }

    formSubmit = (values) => {
        console.log(values);
        this.props.queryOrgList(values)
    }
    //分页
    paginationOnChange = (pagination) => {
        this.props.queryOrgList({current: pagination.current, pageSize: pagination.pageSize});
    }

    render() {
        let orgList = [];
        let pagination = {};
        try {
            orgList = this.props.index.data.orgList;
            pagination = this.props.index.data.pagination;
        } catch (e) {
        }
        return <OraganContent formSubmit={this.formSubmit} btnClick={this.toCreate}
                              dataSource={orgList} pagination={pagination}
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
 *  componentTitle : 标题
 *  btnName ： 按钮名称
 *  btnClick : 按钮事件
 *  其他为antd的table属性
 *
 * **/
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
                <TableComponent componentTitle={'机构列表'} btnName={'创建机构'}
                                columns={columns} bordered={true} rowKey={'orgId'}
                                btnClick={props.btnClick} pagination={props.pagination}
                                {...props}/>
            </div>
        </React.Fragment>
    )
};



