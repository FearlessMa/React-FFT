/**
 * Created by MHC on 2018/3/21.
 */

import React from 'react';
// import {Row, Col, notification} from 'antd';
import {FormComponent} from '../../common/formComponent';
import {connect} from 'react-redux';
import {requestMenuCreate, requestMenuDetail, requestMenuEdit} from "../redux/actions";

const mapStateToProps = state => ({
    create: state.systemManager.menuManager.create,
    loading: state.systemManager.menuManager.loading,
    menuDetail: state.systemManager.menuManager.detail,
});
const mapDispatchToProps = dispatch => ({
    menuCreateSaga: values => dispatch(requestMenuCreate(values)),
    menuDetailSaga: values => dispatch(requestMenuDetail(values)),
    menuEditSaga: values => dispatch(requestMenuEdit(values))

});

@connect(mapStateToProps, mapDispatchToProps)
export class MenuCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const menuId = this.props.match.params.menuId;
        this.menuId = menuId;
        if (isNaN(menuId) && menuId !== undefined) {
            alert('错误');
            //TODO
        }
        if (menuId) {
            this.props.menuDetailSaga({menuId});
            this.state = {
                componentTitle: 'edit',
            };
        } else {
            this.state = {
                componentTitle: 'create',
            }
        }
    }

    onSubmit = (values) => {
        const menuId = this.menuId;
        if (menuId) {
            this.props.menuEditSaga({menuId, ...values});
        } else {
            this.props.menuCreateSaga(values)
        }
    }

    // componentDidMount() {
    //     const menuId = this.props.match.params.menuId;
    //     if (isNaN(menuId) && menuId !== undefined) {
    //         alert('错误');
    //         //TODO
    //     }
    //     if (menuId) {
    //         this.props.menuDetailSaga({menuId});
    //         this.setState({
    //             componentTitle: 'edit',
    //         });
    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <MenuCreateContent {...this.props} formSubmit={this.onSubmit}
                                   componentTitle={this.state.componentTitle}/>
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

const MenuCreateContent = (props) => {
    const title = props.componentTitle === 'create' ? '创建' : '修改'
    let menuInitValues = [];
    try {
        if (props.componentTitle === 'edit') {
            menuInitValues = props.menuDetail.data.menu;
            menuInitValues.sortNumber = menuInitValues.sort;
        }
    } catch (e) {
    }
    const formList = [
        {
            label: '菜单名称',
            id: 'menuName',
            rules: {
                required: true,
            },
            type: 'text',
            tag: 'input',
            initialValue: menuInitValues.menuName
        },
        {
            label: '父级菜单ID',
            id: 'parentMenuId',
            type: 'text',
            tag: 'input',
            initialValue: menuInitValues.parentMenuId
        },
        {
            label: 'action',
            id: 'action',
            type: 'text',
            tag: 'input',
            initialValue: menuInitValues.action
        },
        {
            label: 'tab',
            id: 'tab',
            type: 'text',
            tag: 'input',
            initialValue: menuInitValues.tab
        },
        {
            label: '排序号',
            id: 'sort',
            rules: {
                required: true,
            },
            type: 'text',
            tag: 'input',
            initialValue: menuInitValues.sortNumber
        },
    ];

    return (
        <React.Fragment>
            {/*<div className='containerHeader'>*/}
            {/*{title}菜单*/}
            {/*</div>*/}
            <div className='containerContent'>
                <FormComponent btn={{sub: '提交', back: '返回'}} formList={formList} formSubmit={props.formSubmit}
                               layout={'horizontal'} formItemLayout={formItemLayout} formSubBtnLayout={formSubBtnLayout}
                />
            </div>
        </React.Fragment>
    )
}
