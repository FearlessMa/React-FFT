/**
 * Created by MHC on 2018/3/22.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {FormComponent, tranTreeData} from '../../common';
import {connect} from 'react-redux';
import {requestPowerCreate, requestPowerList} from "../redux/actions";


const mapStateToProps = state => ({
    index: state.systemManager.powerManager.index,
    loading: state.systemManager.powerManager.loading
});
const mapDispatchToProps = dispatch => ({
    powerListSaga: values => dispatch(requestPowerList(values)),
    powerCreateSaga : values =>dispatch(requestPowerCreate(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class PowerCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    onSubmit = values => {
        values.parentPermId === undefined ? values.parentPermId = "" : null;
        this.props.powerCreateSaga(values);
    }

    componentDidMount() {
        if(!this.props.location.state) {
            this.props.powerListSaga();
        }
    }

    render() {
        return (
            <React.Fragment>
                <PowerCreateContent formSubmit={this.onSubmit} {...this.props}/>
            </React.Fragment>
        );
    }

}

const formList = [
    {
        label: '权限名称',
        id: 'permName',
        rules: {
            required: true,
        },
        type: 'text',
        tag: 'input',
    },
    {
        label: '描述',
        id: 'description',
        type: 'text',
        tag: 'textarea',
    },
    {
        label: '父级权限ID',
        id: 'parentPermId',
        type: 'text',
        tag: 'treeSelect',
    },
];

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4, offset: 1},
        // sm: {span:11}
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10},
        // sm:{ span: 13}
    },
};

const formSubBtnLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10, offset: 5},
    }
};

const PowerCreateContent = (props) => {
    let selectData = [];
    try {
        selectData = tranTreeData(props.index.powerList.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {}

    return (
        <React.Fragment>
            <div className='containerHeader'>
                <Row className=''>
                    <Col span={20} offset={3}>
                        创建权限
                    </Col>
                </Row>
            </div>
            <div className='containerContent'>
                <FormComponent btn={{sub: '创建', back: '返回'}} formList={formList}
                               formSubmit={props.formSubmit} selectData={selectData} selectDataName={'permName'}
                               layout={'horizontal'} formItemLayout={formItemLayout} formSubBtnLayout={formSubBtnLayout}
                />
            </div>
        </React.Fragment>
    )
}

