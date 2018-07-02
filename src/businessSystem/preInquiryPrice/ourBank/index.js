/*
 * @Author: mhc 
 * @Date: 2018-06-28 15:20:16 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-29 17:07:06
 */

import React from 'react';
import { CommonModuleIndexLayout, SearchFormExtend } from 'common'
import { routerPath, searchComponentData, searchOtherData, formItemLayout, formSubBtnLayout, publicColumns, tableComponentConfigs, tableComponentTitleConfigs } from './config';
import { connect } from 'react-redux';
import { requestPreInquiryOurBankList } from '../../redux/actions';
import { Row, Col, Button } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OurBankCreateLayout } from './create';


export const OurBankRouter = props => (
    <React.Fragment>
        <Switch>
            <Route exact path={routerPath.index} component={OurBankLayout} />
            <Route exact path={routerPath.create} component={OurBankCreateLayout} />
        </Switch>
    </React.Fragment>
)

const mapStateToProps = state => ({
    ourBankList: state.businessSystem.preInquiryPriceModule.ourBankList
})

const mapDispatchToProps = dispatch => ({
    requestOurBankListSaga: values => dispatch(requestPreInquiryOurBankList(values))
})


@connect(mapStateToProps, mapDispatchToProps)
class OurBankLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.props.requestOurBankListSaga()
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    formSubmit = values => {
        // console.log(values)
        this.props.requestOurBankListSaga(values)
    }

    //分页
    paginationOnChange = pagination => {
        // this.props.requestOurBankListSaga({ current: pagination.current, pageSize: pagination.pageSize });
        console.log(pagination)
    }

    toCreate = () => {
        this.props.history.push(routerPath.create);
    }

    upLoadExcel = () => {
        console.log('upLoadExcel')
    }

    render() {
        const { collapsed } = this.state;
        //收起，收缩切换搜索itemdata
        let data = searchComponentData;
        if (!this.state.collapsed) {
            data = data.concat(searchOtherData);
        }

        //搜索form配置
        const formComponentConfig = {
            formList: data,
            formSubmit: this.formSubmit,
            collapsed,
            moreItemInRow: !collapsed,
            formItemLayout: collapsed ? null : formItemLayout,
            layout: collapsed ? 'inline' : null,
            formSubBtnLayout: collapsed ? null : formSubBtnLayout
        }
        const titleFun = () => {
            return <React.Fragment>
                <Row>
                    <Col span={10}>
                        <div style={{ fontSize: '20px' }} >{tableComponentTitleConfigs.componentTitle}</div>
                    </Col>
                    <Col offset={8} span={6}>
                        <div>
                            <Button type='primary' style={{ marginRight: '10px' }} onClick={this.toCreate}>{tableComponentTitleConfigs.btnName1}</Button>
                            <Button type='primary' onClick={this.upLoadExcel}>{tableComponentTitleConfigs.btnName2}</Button>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        }
        // tableComponent配置
        const tableComponentConfig = {
            onChange: this.paginationOnChange,
            loading: false,
            columns: publicColumns.call(this),
            dataSource: [],
            // componentTitle: '我行询价',
            // btnName: '资金发布',
            // btnClick: () => { },
            title: titleFun,
            ...tableComponentConfigs
        }

        try {
            tableComponentConfig.dataSource = this.props.ourBankList.data
        } catch (e) { }

        return <React.Fragment>
            <CommonModuleIndexLayout
                formComponentConfig={formComponentConfig}
                tableComponentConfig={tableComponentConfig}
            >
                <SearchFormExtend
                    formSubBtnLayout={formComponentConfig.formSubBtnLayout}
                    collapsed={collapsed}
                    toggleCollapsed={this.toggleCollapsed}
                />
            </CommonModuleIndexLayout>
        </React.Fragment>
    }
}




