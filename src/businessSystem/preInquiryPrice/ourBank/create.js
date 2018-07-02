/*
 * @Author: mhc 
 * @Date: 2018-06-29 16:39:19 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-29 18:41:46
 */

import React from 'react';
import { Row, Col, Divider, Upload, Switch, Button, Icon, Modal, Table } from 'antd';
import { FormComponent } from 'common';
import { fromComponentCreateConfig, TableComponent } from './config';

export class OurBankCreateLayout extends React.Component {


    formSubmit = values => {
        console.log(values)
    }
    render() {

        // formList={formList}
        // layout={'horizontal'}
        // moreItemInRow={true}
        // formItemLayout={formItemLayout}
        // formSubBtnLayout={formSubBtnLayout}
        // btn={{ sub: '提交', back: '返回' }}
        // formSubmit={props.formSubmit}

        const formComponentConfig = {
            formSubmit: this.formSubmit,
            ...fromComponentCreateConfig
        }
        return <React.Fragment>
            <PreInquiryPriceOurBankCreateContainer
                formComponentConfig={formComponentConfig}
            />
        </React.Fragment>
    }
}

const PreInquiryPriceOurBankCreateContainer = props => {

    return <React.Fragment>
        <div className="containerContent">
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Divider><h2>发起询价</h2></Divider>
                    </div>
                </Col>
            </Row>
            <FormComponent
                {...props.formComponentConfig}
            >
            </FormComponent>
        </div>
    </React.Fragment>
}