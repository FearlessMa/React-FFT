/*
 * @Author: mhc 
 * @Date: 2018-04-23 14:15:38 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-23 23:41:24
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fundsModulePath } from 'publicConfig';
import { FormComponent, TableComponent } from 'common';
import { Col, Row, Button, Icon } from 'antd';

export const FundsModuleLayout = props => {
    return <Switch>
        <Route exact path={fundsModulePath.basePath} component={FundsModuleContainer} />
    </Switch>
}

class FundsModuleContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            collapsed: true
        }
    }

    formSubmit = (values) => {
        if (values.priceValidStart === undefined) {
            values.priceValidStart = '';
        } else {
            values.priceValidStart = new Date(values.priceValidStart).getTime();
        }
        if (values.priceValidEnd === undefined) {
            values.priceValidEnd = '';
        } else {
            values.priceValidEnd = new Date(values.priceValidEnd).getTime();
        }
        console.log(values);

    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        let data = searchComponentData;
        if (!this.state.collapsed) {
            data = data.concat(searchOtherData);
        }

        return (<div>
            <FundsModuleContent
                formSubmit={this.formSubmit}
                collapsed={this.state.collapsed}
                searchComponentData={data}
                toggleCollapsed={this.toggleCollapsed}
            />
        </div>)
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
        rules:{
            type:'object'
        },
        tag: 'date',
    },
    {
        label: '结束时间',
        id: 'priceValidEnd',
        rules:{
            type:'date'
        },
        tag: 'date',
    },
    {
        label: '资金状态',
        id: 'capitalStatus',
        type: 'text',
        tag: 'input',
    },
];
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 11 }
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
    const { collapsed, searchComponentData, toggleCollapsed } = props;
    const formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };

    return (
        <React.Fragment>
            <div className="containerHeader">
                <Row>
                    <Col offset={1}>
                        <FormComponent
                            formList={searchComponentData}
                            formSubmit={props.formSubmit}
                            {...formConfig}
                        >
                            <Button type={'primary'} htmlType={'submit'}>搜索</Button>
                            <span onClick={toggleCollapsed}
                                style={{ marginLeft: '10px', color: '#1890ff', cursor: 'pointer' }}>
                                {collapsed ? `展开` : '收起'}
                                {collapsed ? <Icon type="down" /> : <Icon type="up" />}
                            </span>
                        </FormComponent>
                    </Col>
                </Row>
            </div>
            <div className="containerContent">
                {/* <TableComponent/> */}
                321
            </div>
        </React.Fragment>
    )
}