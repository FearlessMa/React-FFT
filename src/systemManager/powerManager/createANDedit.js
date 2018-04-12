/**
 * Created by MHC on 2018/3/22.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {FormComponent, tranTreeData} from '../../common';
import {connect} from 'react-redux';
import {
    powerCreateComponentTitle, requestPowerCreate, requestPowerDetail, requestPowerEdit,
    requestPowerList
} from "../redux/actions";


const mapStateToProps = state => ({
    index: state.systemManager.powerManager.index,
    loading: state.systemManager.powerManager.loading,
    powerComponentTitle: state.systemManager.powerManager.componentTitle,
    detail: state.systemManager.powerManager.detail,
});
const mapDispatchToProps = dispatch => ({
    powerListSaga: values => dispatch(requestPowerList(values)),
    powerCreateSaga: values => dispatch(requestPowerCreate(values)),
    powerCreateComponentTitle: values => dispatch(powerCreateComponentTitle(values)),
    powerDetailSaga: values => dispatch(requestPowerDetail(values)),
    powerEditSaga : values=>dispatch(requestPowerEdit(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class PowerCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const permId = this.props.match.params.permId;
        this.permId = permId;
        if (permId) {
            if (isNaN(permId)) {
                this.props.history.push('/systemManager/powerManager');
            }
            this.props.powerCreateComponentTitle({componentTitle: 'edit'});
            this.props.powerDetailSaga({permId});
        }
        this.props.powerListSaga();
    }

    onSubmit = values => {
        values.parentPermId === undefined ? values.parentPermId = "" : null;
        if (this.props.powerComponentTitle === 'edit') {
            this.props.powerEditSaga({permId: this.permId, ...values});
        } else {
            this.props.powerCreateSaga(values);
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
    const componentTitle = props.powerComponentTitle === 'edit' ? '修改' : '创建';
    let selectData = [];
    let initValues = [];
    try {
        selectData = tranTreeData(props.index.powerList.data.permList, 'permId', 'parentPermId', 'permName');
        initValues = props.detail.data.perm;
    } catch (err) {
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
            initialValue: initValues.permName
        },
        {
            label: '描述',
            id: 'description',
            type: 'text',
            tag: 'textarea',
            initialValue: initValues.description
        },
        {
            label: '父级权限ID',
            id: 'parentPermId',
            type: 'text',
            tag: 'treeSelect',
            initialValue: initValues.parentPermId
        },
    ];

    return (
        <React.Fragment>
            <div className='containerContent'>
                <FormComponent btn={{sub: componentTitle, back: '返回'}} formList={formList}
                               formSubmit={props.formSubmit} selectData={selectData} selectDataName={'permName'}
                               layout={'horizontal'} formItemLayout={formItemLayout} formSubBtnLayout={formSubBtnLayout}
                />
            </div>
        </React.Fragment>
    )
}

