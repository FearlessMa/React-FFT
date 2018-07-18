/*
 * @Author: mhc 
 * @Date: 2018-06-29 16:39:19 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-11 19:47:14
 */

import React from 'react';
import { Row, Col, Divider, Upload, Switch, Button, Icon, Modal, Table } from 'antd';
import { FormComponent } from 'common';
import { ourBankCreate } from './config';

const { fromComponentCreateConfig } = ourBankCreate
export class OurBankCreateLayout extends React.Component {


    formSubmit = values => {
        console.log(values)
    }
    render() {
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