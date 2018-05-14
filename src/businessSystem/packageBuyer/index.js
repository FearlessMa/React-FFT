/*
 * @Author: mhc 
 * @Date: 2018-04-28 09:31:17 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-14 10:34:26
 */

import React from 'react';
import { FormComponent, TableComponent, BreadcrumbComponent } from 'common';
import { Row, Col, Button, Icon, Form } from 'antd';
import { connect } from 'react-redux';
import { requestForfaiterList, requestSyncAllForfaiter } from '../redux/actions';
import { forfaiterMap } from 'publicConfig';



const mapStateToProps = state => ({
    loading: state.businessSystem.forfaiterModule.loading,
    forfaiterList: state.businessSystem.forfaiterModule.forfaiterList,
})

const mapDispatchToProps = dispatch => ({
    forfaiterListSaga: values => dispatch(requestForfaiterList(values)),
    syncAllSaga: () => dispatch(requestSyncAllForfaiter())
})

@connect(mapStateToProps, mapDispatchToProps)
export default class PackagebuyerContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            collapsed: true
        };
        this.props.forfaiterListSaga()
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    formSubmit = values => {
        console.log(values)
        this.props.forfaiterListSaga(values)
    }

    toAllForfaiter = () => {
        this.props.syncAllSaga()
    }

    //分页
    paginationOnChange = pagination => {
        this.props.requestFundsPublishSaga({ current: pagination.current, pageSize: pagination.pageSize });
    }

    render() {
        let data = searchComponentData;
        if (!this.state.collapsed) {
            data = data.concat(searchOtherData);
        }

        return <React.Fragment>
            <PackagebuyerContent
                collapsed={this.state.collapsed}
                searchComponentData={data}
                toggleCollapsed={this.toggleCollapsed}
                formSubmit={this.formSubmit}
                onChange={this.paginationOnChange}
                toAllForfaiter={this.toAllForfaiter}
                {...this.props}
            />
        </React.Fragment>
    }

}


const searchComponentData = [
    {
        label: '机构名称',
        id: 'forfaiterNm',
        type: 'text',
        tag: 'input',
    },
    {
        label: '结构BIC',
        id: 'parentSwiftCode',
        type: 'text',
        tag: 'input',
    }
];
const searchOtherData = [
    {
        label: '包买商BIC',
        id: 'swiftCode',
        tag: 'input',
    },
    {
        label: '包买商状态',
        id: 'forfaiterStatus',
        tag: 'select',
        options: [
            {
                name: '已发布',
                value: 'Publish'
            },
            {
                name: '撤销',
                value: 'offline'
            },
        ]
    },
];
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
    },
};
const formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 17 },
    }
};

const columns = [
    {
        title: '包买商名称',
        dataIndex: 'forfaiterName',
    },
    {
        title: 'swiftCode',
        dataIndex: 'swiftCode',
    },
    {
        title: '状态',
        dataIndex: 'forfaiterStatus',
        render: (text) => {
            return <span>{text === 'publish' ? '已发布' : '撤销'}</span>
        }
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        render: text => <span>{new Date(text).toLocaleString().substr(0, 9)}</span>
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        render: text => <span>{new Date(text).toLocaleString().substr(0, 9)}</span>
    },
];

const PackagebuyerContent = props => {
    const { collapsed, searchComponentData, toggleCollapsed, forfaiterList, loading, toAllForfaiter } = props;
    const formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };

    let data = [];
    let pagination = [];
    try {
        data = forfaiterList.data.forfaiterList;
        pagination = forfaiterList.data.pagination;
    } catch (e) { }


    return <React.Fragment>
        <BreadcrumbComponent {...props} breadcrumbNameMap={forfaiterMap} />
        <div className={'containerHeader'}>
            <Row>
                <Col offset={collapsed ? 5 : 0}>
                    <FormComponent
                        formList={searchComponentData}
                        formSubmit={props.formSubmit}
                        {...formConfig}
                    >
                        <Form.Item {...formConfig.formSubBtnLayout}>
                            <Button type={'primary'} htmlType={'submit'}>搜索</Button>
                            <span onClick={toggleCollapsed}
                                style={{ marginLeft: '10px', color: '#1890ff', cursor: 'pointer' }}>
                                {collapsed ? `展开` : '收起'}
                                {collapsed ? <Icon type="down" /> : <Icon type="up" />}
                            </span>
                        </Form.Item>
                    </FormComponent>
                </Col>
            </Row>

        </div>
        <div className="containerContent">
            <TableComponent
                columns={columns}
                dataSource={data}
                loading={loading}
                //分页
                onChange={props.onChange}
                pagination={pagination}
                rowKey={'swiftCode'}
                componentTitle={'包买商列表'}
                btnName={'同步所有'}
                btnClick={toAllForfaiter}
            >

            </TableComponent>
        </div>
    </React.Fragment>
}