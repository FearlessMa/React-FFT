/*
 * @Author: mhc 
 * @Date: 2018-05-04 09:28:04 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 16:10:15
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { dictModulePath } from 'publicConfig';
import { TableComponent, FormComponent, BreadcrumbComponent } from 'common';
import { Row, Col, Button, Popconfirm } from 'antd';
import { connect } from 'react-redux';
import { requestDictList, requestDictDelete } from '../redux/actions';
import { DictDetailContainer } from './detail';
import { DictCreateContainer } from './create';
import { dictMap } from 'publicConfig';

export const DictModuleLayout = props => {
    return <React.Fragment>
        <BreadcrumbComponent {...props} breadcrumbNameMap={dictMap} />
        <Switch>
            <Route exact path={dictModulePath.basePath} component={DictModuleContainer} />
            <Route path={`${dictModulePath.detailPath}${dictModulePath.detailParam}`} component={DictDetailContainer} />
            <Route path={dictModulePath.createPath} component={DictCreateContainer} />
            <Redirect to={dictModulePath.basePath} />
        </Switch>
    </React.Fragment>
};

const mapStateToProps = state => ({
    distLoading: state.systemManager.dictModule.loading,
    dictList: state.systemManager.dictModule.dictList,
});

const mapDispatchToProps = dispatch => ({
    dictListSaga: values => dispatch(requestDictList(values)),
    dictDeleteSaga: values => dispatch(requestDictDelete(values))
})

@connect(mapStateToProps, mapDispatchToProps)
class DictModuleContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.props.dictListSaga()
    }

    onSearch = values => {
        this.props.dictListSaga(values);
    }

    toCreate = () => {
        this.props.history.push(dictModulePath.createPath)
    }

    dictDelete = dictId => {
        this.props.dictDeleteSaga({ dictId });
    }

    //分页
    paginationOnChange = pagination => {
        this.props.dictListSaga({ current: pagination.current, pageSize: pagination.pageSize });
    }

    render() {
        const tableColumns = [
            {
                title: '字典ID',
                dataIndex: 'dictId',
                render: (text, record) => {
                    return <a href={`#${dictModulePath.detailPath}/${record.dictId}`}>{text}</a>
                }
            },
            {
                title: '描述',
                dataIndex: 'dictDesc'
            },
            {
                title: '类别',
                dataIndex: 'dictClass'
            },
            {
                title: '创建时间',
                dataIndex: 'createTime'
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    return <Popconfirm title={'请确认是否删除？'}
                        onConfirm={this.dictDelete.bind(this, record.dictId)}
                        //onCancel={null}
                        okText={'确认'}
                        cancelText={'取消'}
                    >
                        <Button type={'danger'} >删除</Button>
                    </Popconfirm>
                }
            },
        ];
        let tableData = null;
        let pagination = null;
        try {
            tableData = this.props.dictList.data.dictList;
            pagination = this.props.dictList.data.pagination;
        } catch (e) { }

        return <React.Fragment>
            <DictModuleContnt
                columns={tableColumns}
                onSearch={this.onSearch}
                tableData={tableData}
                toCreate={this.toCreate}
                onChange={this.paginationOnChange}
                pagination={pagination}
                {...this.props}
            />
        </React.Fragment>
    }
}

const searchData = [
    {
        label: '字典键值',
        tag: 'input',
        id: 'dictKey'
    },
    {
        label: '字典类别',
        tag: 'input',
        id: 'dictClass'
    }
];

const DictModuleContnt = props => {

    return <React.Fragment>
        <div className="containerHeader">
            <Row>
                <Col offset={3}>
                    <FormComponent
                        formList={searchData}
                        btn={{ sub: '搜索' }}
                        layout={'inline'}
                        formSubmit={props.onSearch}
                    />
                </Col>
            </Row>
        </div>
        <div className="containerContent">
            <TableComponent
                columns={props.columns}
                componentTitle={'字典表'}
                btnName={'创建字典'}
                loading={props.distLoading}
                dataSource={props.tableData}
                rowKey={'dictId'}
                btnClick={props.toCreate}
                pagination={props.pagination}
                onChange={props.onChange}
            />
        </div>
    </React.Fragment>
}