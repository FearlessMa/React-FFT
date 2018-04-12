/**
 * Created by MHC on 2018/3/21.
 */
import React from 'react';
import {Row, Col, message, Table, Button, Modal} from 'antd';
import {FormComponent} from '../../common/formComponent';
import {connect} from 'react-redux';
import {requestMenuDetail, requestMenuRemovePerm} from "../redux/actions";

const mapStateToProps = state => ({
    detail: state.systemManager.menuManager.detail,
    loading: state.systemManager.menuManager.loading,
});
const mapDispatchToProps = dispatch => ({
    menuDetailSaga: values => dispatch(requestMenuDetail(values)),
    menuRemovePermSaga: values => dispatch(requestMenuRemovePerm(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class MenuDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        const menuId = this.props.match.params.menuId;
        this.menuId = menuId;
        if (isNaN(menuId)) {
            this.props.history.push('/systemManager/menuManager');
        }
        this.props.menuDetailSaga({menuId});
    }

    toBack = () => {
        this.props.history.push('/systemManager/menuManager');
    }

    // componentDidMount(){
    //     const menuId = this.props.match.params.menuId;
    //     if (isNaN(menuId)) {
    //         this.props.history.push('/systemManager/menuManager');
    //     }
    //     this.props.menuDetailSaga({menuId});
    // }


    deletePermMenu = (record) => {
        const menuId = this.menuId;
        const menuRemovePermSaga = this.props.menuRemovePermSaga;
        Modal.confirm({
            title: `是否解绑${record.permName}?`,
            content: '解绑后将无法返回',
            okText: '解绑',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                menuRemovePermSaga({permId: record.permId, menuId});
                // console.log(record.permId)
                // console.log(menuId)
            },
            onCancel() {
                // console.log(record.permName)
                // TODO
            },
        });
    }

    toEdit=()=>{
        const menuId = this.menuId;
        this.props.history.push(`/systemManager/menuManager/edit/${menuId}`);
    }

    render() {
        const columns = [
            {
                title: '权限ID',
                dataIndex: 'permId',
            },
            {
                title: '权限名称',
                dataIndex: 'permName',
            },
            {
                title: '描述',
                dataIndex: 'description',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => <div>
                    <Button onClick={this.deletePermMenu.bind(this,record)} type={'danger'}>解绑</Button>
                </div>
            },
        ];
        return (
            <React.Fragment>
                <MenuDetailContent {...this.props} columns={columns} toBack={this.toBack}
                                   toEdit={this.toEdit}/>
            </React.Fragment>
        );
    }

}


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8, offset: 1},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 15},
    },
}

const MenuDetailContent = (props) => {
    let data = {};
    let dataSource = [];
    try {
        data = props.detail.data.menu || {};
        dataSource = props.detail.data.menu.perms || [];
        // if(props.detail.code != 200){
        //     message.error('未查询到数据');
        // }
    } catch (err) {}
    const formList = [
        {
            label: '菜单ID',
            id: 'menuId',
            initialValue: data.menuId,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '菜单名称',
            id: 'menuName',
            initialValue: data.menuName,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '父菜单Id',
            id: 'parentMenuId',
            initialValue: data.parentMenuId,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
    ];
    return (
        <React.Fragment>
            {/*<div className='containerHeader'>*/}
                {/*菜单详情*/}
            {/*</div>*/}
            <div className='containerContent'>
                <FormComponent formList={formList} layout={'horizontal'} formItemLayout={formItemLayout}
                               moreItemInRow={true} laoding={props.loading}
                />
                <Row>
                    <Table loading={props.loading} columns={props.columns} dataSource={dataSource} rowKey={'permId'} bordered={true}/>
                </Row>
                <Row>
                    <Col span={4} offset={8}>
                        <Button onClick={props.toEdit} type={'primary'}>编辑</Button>
                    </Col>
                    <Col span={4}>
                        <Button onClick={props.toBack}>返回</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}