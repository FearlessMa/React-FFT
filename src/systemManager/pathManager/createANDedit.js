/**
 * Created by MHC on 2018/3/20.
 */

import React from 'react';
import {Row, Col, message} from 'antd';
import {FormComponent} from '../../common/formComponent';
import {connect} from 'react-redux';
import {requestPathCreate, requestPathDetail, requestPathEdit} from "../redux/actions";


const mapStateToProps = state => ({
    detail: state.systemManager.pathManager.detail,
    loading: state.systemManager.pathManager.loading
});
const mapDispatchToProps = dispatch => ({
    pathCreateSaga: values => dispatch(requestPathCreate(values)),
    pathDetailSaga: values => dispatch(requestPathDetail(values)),
    pathEditSaga: values => dispatch(requestPathEdit(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class CreatePathContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const pathId = this.props.match.params.pathId;
        this.pathId = pathId;
        if (pathId) {
            if (isNaN(pathId)) {
                this.props.history.push('/systemManager/pathManager');
            }
            this.state={
                componentTitle: 'edit',
            };
            this.props.pathDetailSaga({pathId});
        }else {
            this.state = {
                componentTitle: 'create',
            }
        }
    }

    onSubmit = (values) => {
        const pathId = this.pathId;
        if (pathId) {
            this.props.pathEditSaga({...values, pathId});
        } else {
            this.props.pathCreateSaga(values);
        }
    }

    render() {
        return (
            <React.Fragment>
                <CreatePathContent componentTitle={this.state.componentTitle}
                                   formSubmit={this.onSubmit} {...this.props}/>
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

const CreatePathContent = (props) => {
    const title = props.componentTitle === 'create' ? '创建' : '修改';
    let data = [];
    if (props.match.params.pathId) {
        try {
            data = props.detail.data.path;
        } catch (err) {
        }
    }
    const formList = [
        {
            label: '请求path',
            id: 'httpPath',
            rules: {
                required: true,
            },
            type: 'text',
            tag: 'input',
            initialValue: data.httpPath
        },
        {
            label: '请求方式',
            id: 'httpMethodType',
            type: 'text',
            tag: 'input',
            initialValue: data.httpMethodType
        },
        {
            label: 'path资源描述',
            id: 'description',
            type: 'text',
            tag: 'textarea',
            initialValue: data.description
        },
    ];

    return (
        <React.Fragment>
            <div className='containerHeader'>
                {title}Path
            </div>
            <div className='containerContent'>
                <FormComponent btn={{sub: title, back: '返回'}} formList={formList} formSubmit={props.formSubmit}
                               layout={'horizontal'} formItemLayout={formItemLayout} formSubBtnLayout={formSubBtnLayout}
                />
            </div>
        </React.Fragment>
    )
}