/*
 * @Author: mhc 
 * @Date: 2018-04-23 14:15:38 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-28 17:45:00
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publishFundsPath } from 'publicConfig';
import { FormComponent, TableComponent } from 'common';
import { Col, Row, Button, Icon, Modal,Form } from 'antd';
import { connect } from 'react-redux';
import { requestFundsPublishList, requestFundsOffshef } from '../redux/actions';
import { PublishCreateContainer } from './create'
import { FundsDetailContainer } from './detail';

export const FundsModuleLayout = props => {
    return <Switch>
        <Route exact path={publishFundsPath.basePath} component={FundsModuleContainer} />
        <Route path={publishFundsPath.createPath} component={PublishCreateContainer} />
        <Route path={`${publishFundsPath.detailPath}${publishFundsPath.detailParam}`} component={FundsDetailContainer} />
    </Switch>
}


const mapStateToProps = state => ({
    publishLoading: state.businessSystem.fundsModule.loading,
    publishList: state.businessSystem.fundsModule.publishList
});
const mapDispatchToProps = dispatch => ({
    requestFundsPublishSaga: values => dispatch(requestFundsPublishList(values)),
    requestOffshefSaga: values => dispatch(requestFundsOffshef(values))
});
@connect(mapStateToProps, mapDispatchToProps)
class FundsModuleContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            collapsed: true
        };
        this.props.requestFundsPublishSaga();
    }

    formSubmit = (values) => {
        if (values.priceValidStart === undefined || values.priceValidStart === 0) {
            values.priceValidStart = '';
        } else {
            values.priceValidStart = new Date(values.priceValidStart).getTime();
        }
        if (values.priceValidEnd === undefined || values.priceValidEnd === 0) {
            values.priceValidEnd = '';
        } else {
            values.priceValidEnd = new Date(values.priceValidEnd).getTime();
        }
        console.log(values);
        this.props.requestFundsPublishSaga();
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    //下架资金
    offshelf = capitalId => {
        const that = this;
        Modal.confirm({
            title: `是否下架?`,
            content: '下架后需要重新创建新资金',
            okText: '下架',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log(that)
                that.props.requestOffshefSaga({ capitalId })
            },
            onCancel() {
                // console.log(record.menuName)
            },
        });
    }

    //创建资金
    toCreateFunds = () => {
        this.props.history.push(publishFundsPath.createPath);
    }
    // //查看发布资金详情
    // toPublishFundsDetail = () => {
    // }

    //分页
    paginationOnChange = pagination => {
        this.props.requestFundsPublishSaga({ current: pagination.current, pageSize: pagination.pageSize });
    }

    render() {
        let data = searchComponentData;
        if (!this.state.collapsed) {
            data = data.concat(searchOtherData);
        }

        const publishColumns = [
            {
                title: '包买商名称',
                dataIndex: 'forfaiterNm',
                render: (text, record) => {
                    return <a href={`#${publishFundsPath.detailPath}/${record.capitalId}`}>{text}</a>
                }
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: (text) => {
                    return <span>{`${text}%`}</span>
                }
            },
            {
                title: '价格有效期开始时间',
                dataIndex: 'priceValidStart',
                render: (text) => {
                    return <span>{`${new Date(text).toLocaleString()}`}</span>
                }
            },
            {
                title: '价格有效期截止时间',
                dataIndex: 'priceValidEnd',
                render: (text) => {
                    return <span>{`${new Date(text).toLocaleString()}`}</span>
                }
            },
            {
                title: '状态',
                dataIndex: 'capitalStatus',
                render: (text) => {
                    if (typeof text !== 'string') {
                        text = String(text);
                    }
                    let state = '';
                    switch (text) {
                        case "0":
                            state = '未发布';
                            break;
                        case '1':
                            state = '已发布';
                            break;
                        case '2':
                            state = '已下架';
                            break;
                        case '3':
                            state = '超时';
                            break;
                        case '4':
                            state = '失败'
                            break;
                        default:
                            return null;
                    }
                    return <span>{state}</span>
                }
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    if (typeof record.capitalStatus !== 'string') { String(record.capitalStatus) }
                    if (record.capitalStatus === '1') {
                        return <Button onClick={this.offshelf.bind(this, record.capitalId)} type={'danger'} >下架</Button>
                    } else {
                        return <Button disabled='disabled' >下架</Button>
                    }
                }
            },
        ];

        return (<FundsModuleContent
            formSubmit={this.formSubmit}
            collapsed={this.state.collapsed}
            searchComponentData={data}
            toggleCollapsed={this.toggleCollapsed}
            columns={publishColumns}
            onChange={this.paginationOnChange}
            toCreateFunds={this.toCreateFunds}
            {...this.props}
        />)
    }

}

const searchComponentData = [
    {
        label: '包买商名称',
        id: 'forfaiterNm',
        type: 'text',
        tag: 'input',
    },
    {
        label: '包买商BIC',
        id: 'forfaiterSc',
        type: 'text',
        tag: 'input',
    }
];
const searchOtherData = [
    {
        label: '开始时间',
        id: 'priceValidStart',
        rules: {
            type: 'object'
        },
        tag: 'date',
    },
    {
        label: '结束时间',
        id: 'priceValidEnd',
        rules: {
            type: 'object'
        },
        tag: 'date',
    },
    {
        label: '资金状态',
        id: 'capitalStatus',
        tag: 'select',
        options: [
            {
                name: '未发布',
                value: '0'
            },
            {
                name: '已发布',
                value: '1'
            },
            {
                name: '已下架',
                value: '2'
            },
            {
                name: '超时',
                value: '3'
            },
            {
                name: '失败',
                value: '4'
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


const FundsModuleContent = props => {
    const { collapsed, searchComponentData, toggleCollapsed, columns, toCreateFunds } = props;
    const formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };
    let tableData = [];
    let pagination = [];
    try {
        tableData = props.publishList.data.capitalList;
        pagination = props.publishList.data.pagination;
    } catch (e) { }
    return (
        <React.Fragment>
            <div className="containerHeader">
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
                    dataSource={tableData}
                    loading={props.publishLoading}
                    rowKey={'capitalId'}
                    onChange={props.onChange}
                    pagination={pagination}
                    bordered={true}
                    componentTitle={'发布的资金列表'}
                    btnName={'资金发布'}
                    btnClick={toCreateFunds}
                />
            </div>
        </React.Fragment>
    )
}