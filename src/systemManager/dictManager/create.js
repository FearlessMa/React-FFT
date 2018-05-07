/*
 * @Author: mhc 
 * @Date: 2018-05-07 14:46:45 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 15:41:23
 */

import React from 'react';
import { FormComponent } from 'common';
import { Row, Col, Divider } from 'antd';
import { connect } from 'react-redux';
import { requestDictCreate } from '../redux/actions';


const mapDispatchToProps = dispatch => ({
    dictCreateSaga: values => dispatch(requestDictCreate(values))
})

@connect(null, mapDispatchToProps)
export class DictCreateContainer extends React.Component {
    // constructor(...arg) {
    //     super(...arg);
    // }

    formSubmit = values => {
        // console.log(values)
        this.props.dictCreateSaga(values);
    }

    render() {
        return <React.Fragment>
            <DictCreateContent
                formSubmit={this.formSubmit}
            />
        </React.Fragment>
    }
}

const formData = [
    {
        id: 'dictClass',
        label: '字典类别',
        tag: 'input',
        rules: {
            required: true,
            message: '字典类别必填！'
        }
    },
    {
        id: 'dictKey',
        label: '字典键值',
        tag: 'input',
        rules: {
            required: true,
            message: '字典键值必填！'
        }
    },
    {
        id: 'dictValue',
        label: '字典值',
        tag: 'input',
        rules: {
            required: true,
            message: '字典值必填！'
        }
    },
    {
        id: 'dictDesc',
        label: '字典描述',
        tag: 'input',
    },
];
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
}

const formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10, offset: 10 },
    }
};
const DictCreateContent = props => {
    return <React.Fragment>
        <div className="containerContent">
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Divider><h2>创建字典</h2></Divider>
                    </div>
                </Col>
            </Row>
            <FormComponent
                formList={formData}
                btn={{ sub: '提交', back: '返回' }}
                formItemLayout={formItemLayout}
                formSubBtnLayout={formSubBtnLayout}
                formSubmit={props.formSubmit}
                layout={'horizontal'}
                moreItemInRow={true}
            />
        </div>
    </React.Fragment>
}