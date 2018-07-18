/*
 * @Author: mhc 
 * @Date: 2018-06-28 15:09:26 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-04 11:19:37
 */


import React from 'react';
import { FormComponent } from 'common';
import { Row, Col, Table } from 'antd';

class CommonModuleIndexLayout extends React.Component {

    render() {
        let { formComponentConfig, children, tableComponentConfig } = this.props;
        return (
            <React.Fragment>
                <div className="containerHeader">
                    <Row>
                        <Col offset={formComponentConfig.collapsed ? 5 : 0}>
                            <FormComponent
                                // 搜索 FormComponent 配置
                                {...formComponentConfig}
                            >
                                {children}
                            </FormComponent>
                        </Col>
                    </Row>
                </div>
                <div className="containerContent">
                    <Table
                        //公共
                        //{rowKey = { 'capitalId'}
                        //onChange={props.onChange}
                        //bordered={true}
                        //loading={props.publishLoading}
                        {...tableComponentConfig}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export { CommonModuleIndexLayout };