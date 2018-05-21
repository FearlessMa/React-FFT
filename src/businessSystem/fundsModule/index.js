/*
 * @Author: mhc 
 * @Date: 2018-04-23 14:15:38 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-18 11:27:15
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//引入发布资金路径
import { publishFundsPath, receivedFundsPath, fundsModuleMap } from 'publicConfig';
import { FormComponent, TableComponent, BreadcrumbComponent, formatYYYYMMDD } from 'common';
import { Col, Row, Button, Icon, Modal, Form } from 'antd';
import { connect } from 'react-redux';
import { requestFundsPublishList, requestFundsOffshef, requestFundsReceivedList } from '../redux/actions';
import { PublishCreateContainer } from './create'
import { FundsDetailContainer } from './detail';


//路由
export const FundsModuleLayout = props => {
    return <React.Fragment>
        <BreadcrumbComponent {...props} breadcrumbNameMap={fundsModuleMap} />
        <Switch>
            <Route exact path={`${publishFundsPath.basePath}`} component={PublishFunds} />
            <Route exact path={`${receivedFundsPath.basePath}`} component={ReceivedFunds} />
            <Route path={publishFundsPath.createPath} component={PublishCreateContainer} />
            <Route path={`${publishFundsPath.detailPath}${publishFundsPath.detailParam}`}
                component={FundsDetailContainer} />
            <Route path={`${receivedFundsPath.detailPath}${receivedFundsPath.detailParam}`}
                component={FundsDetailContainer} />
            <Redirect to={publishFundsPath.basePath} />>
        </Switch>
    </React.Fragment>
}

export default FundsModuleLayout;


//我接收到的

const ReceivedFunds = props => {
    return <FundsModuleContainer {...props} description='receivedFunds' />
}
//我发布的

const PublishFunds = props => {
    return <FundsModuleContainer {...props} description='publishFunds' />
}


const mapStateToProps = state => ({
    publishLoading: state.businessSystem.fundsModule.loading,
    publishList: state.businessSystem.fundsModule.publishList,
    receivedList: state.businessSystem.fundsModule.receivedList
});
const mapDispatchToProps = dispatch => ({
    requestFundsPublishSaga: values => dispatch(requestFundsPublishList(values)),
    requestOffshefSaga: values => dispatch(requestFundsOffshef(values)),
    requestFundsReceivedSaga: values => dispatch(requestFundsReceivedList(values))
});

@connect(mapStateToProps, mapDispatchToProps)
class FundsModuleContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            collapsed: true,
        };
        if (this.props.description === 'publishFunds') {
            this.props.requestFundsPublishSaga();
        } else if (this.props.description === 'receivedFunds') {
            this.props.requestFundsReceivedSaga()
        }
    }

    // 搜索
    formSubmit = (values) => {
        console.log('priceValidEnd')
        console.log(values.priceValidEnd)
        if (!values.priceValidStart) {
            values.priceValidStart = '';
        } else {
            let milliseconds = new Date(values.priceValidStart).getTime();
            let ymdhms = formatYYYYMMDD(milliseconds);
            values.priceValidStart = new Date(ymdhms).getTime();
        }
        if (!values.priceValidEnd) {
            values.priceValidEnd = '';
        } else {
            let milliseconds = new Date(values.priceValidEnd).getTime();
            let ymdhms = formatYYYYMMDD(milliseconds) + ' 23:59:59';
            values.priceValidEnd = new Date(ymdhms).getTime();
        }
        if (this.props.description === 'publishFunds') {
            this.props.requestFundsPublishSaga(values);
        } else if (this.props.description === 'receivedFunds') {
            this.props.requestFundsReceivedSaga(values);
        }
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
        if (this.props.description === 'publishFunds') {
            this.props.requestFundsPublishSaga({ current: pagination.current, pageSize: pagination.pageSize });
        } else if (this.props.description === 'receivedFunds') {
            this.props.requestFundsReceivedSaga({ current: pagination.current, pageSize: pagination.pageSize });
        }
    }

    render() {
        let data = searchComponentData;
        if (!this.state.collapsed) {
            data = data.concat(searchOtherData);
        }

        const publicColumns = [
            {
                title: '包买商名称',
                dataIndex: 'forfaiterNm',
                render: (text, record) => {
                    if (this.props.description === 'publishFunds') {
                        return <a href={`#${publishFundsPath.detailPath}/${record.capitalId}`}>{text}</a>
                    }
                    return <a href={`#${receivedFundsPath.detailPath}/${record.capitalId}`}>{text}</a>
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

        ];
        const publishColumns = [{
            title: '操作',
            dataIndex: '',
            render: (text, record) => {
                if (typeof record.capitalStatus !== 'string') {
                    record.capitalStatus = String(record.capitalStatus);
                }
                if (record.capitalStatus === '1') {
                    return <Button onClick={this.offshelf.bind(this, record.capitalId)} type={'danger'}>下架</Button>
                } else {
                    return <Button disabled='disabled'>下架</Button>
                }
            }
        },]

        return (<FundsModuleContent
            formSubmit={this.formSubmit}
            collapsed={this.state.collapsed}
            searchComponentData={data}
            toggleCollapsed={this.toggleCollapsed}
            publicColumns={publicColumns}
            onChange={this.paginationOnChange}
            toCreateFunds={this.toCreateFunds}
            publishColumns={publishColumns}
            {...this.props}
        />)
    }

}
/**搜索框数据和布局 **/
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
        config: {
            placeholder: ''
        }
    },
    {
        label: '结束时间',
        id: 'priceValidEnd',
        rules: {
            type: 'object'
        },
        tag: 'date',
        config: {
            placeholder: ''
        }
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
/**-----------------**/

const FundsModuleContent = props => {
    const { collapsed, searchComponentData, toggleCollapsed, publicColumns, publishColumns, toCreateFunds, description } = props;
    // 搜索
    const formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };
    let publishData = [];
    let publishPagination = [];
    let tableConfig = {};
    let receivedData = [];
    let receivedPaginaton = [];
    try {
        // 发布的资金数据
        publishData = props.publishList.data.capitalList;
        publishPagination = props.publishList.data.pagination;
    } catch (e) {
    }
    try {
        // 接收的资金数据
        receivedData = props.receivedList.data.capitalList;
        receivedPaginaton = props.receivedList.data.pagination;
    } catch (e) {
    }
    if (description === 'publishFunds') {
        //发布资金
        publicColumns.push(...publishColumns)
        const publishFundsConfig = {
            columns: publicColumns,
            dataSource: publishData,
            // loading: props.publishLoading,
            componentTitle: '发布的资金列表',
            btnName: '资金发布',
            btnClick: toCreateFunds,
            pagination: publishPagination
        }
        tableConfig = publishFundsConfig;
    } else {
        //接收的资金
        const receivedFundsCongig = {
            columns: publicColumns,
            dataSource: receivedData,
            componentTitle: '接收的资金列表',
            pagination: receivedPaginaton
        }
        tableConfig = receivedFundsCongig
    }
    return (
        <React.Fragment>
            <div className="containerHeader">
                <Row>
                    <Col offset={collapsed ? 5 : 0}>
                        <FormComponent
                            // 搜索
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
                    //公共
                    rowKey={'capitalId'}
                    onChange={props.onChange}
                    bordered={true}
                    loading={props.publishLoading}
                    {...tableConfig}
                />
            </div>
        </React.Fragment>
    )
}



