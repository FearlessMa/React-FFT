/**
 * Created by MHC on 2018/3/26.
 */
import React from 'react';
import { connect } from 'react-redux';
import {
    powerMenuModalVisible, powerPathModalVisible,
    requestPowerConfig, requestPowerConfigAddPath, requestPowerConfigMenuList,
    requestPowerConfigUnbind, requestPowerConfigUnboundPathList
} from "../redux/actions";
import { Tabs, Button, Modal, Table } from 'antd';
import { TableComponent, FormComponent, tranTreeData } from '../../common';

const mapStateToProps = state => ({
    config: state.systemManager.powerManager.config,
    loading: state.systemManager.powerManager.loading,
    configMenuList: state.systemManager.powerManager.configMenuList,
    UnboundPathLis: state.systemManager.powerManager.configUnboundPathList,
    pathModalVisible: state.systemManager.powerManager.pathModalVisible,
    menuModalVisible: state.systemManager.powerManager.menuModalVisible,
});
const mapDispatchToProps = dispatch => ({
    powerConfigSaga: values => dispatch(requestPowerConfig(values)),
    requestPowerConfigUnboundPathListSaga: values => dispatch(requestPowerConfigUnboundPathList(values)),
    powerConfigAddPathSaga: values => dispatch(requestPowerConfigAddPath(values)),
    powerConfigUnbindSaga: values => dispatch(requestPowerConfigUnbind(values)),
    powerConfigMenuListSaga: values => dispatch(requestPowerConfigMenuList(values)),
    powerPathModalVisible: values => dispatch(powerPathModalVisible(values)),
    powerMenuModalVisible: values => dispatch(powerMenuModalVisible(values)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class PowerConfigContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.powerConfig();
    }

    //config页面的数据获取
    powerConfig = () => {
        const permId = this.props.match.params.permId;
        if (isNaN(permId)) this.props.history.push('/systemManager/powerManager');
        this.props.powerConfigSaga({ permId });
    }
    //添加path
    addPath = (pathIds) => {
        const permId = this.props.match.params.permId;
        this.props.powerConfigAddPathSaga({ pathIds, permId });
        // this.setState({
        //     pathModalConfirmLoading: true
        // })
    }
    //显示modal并请求显示数据
    btnClick = data => {
        const permId = this.props.match.params.permId;
        if (data.type === 'path') {
            // this.setState({
            //     pathModalVisible: true
            // });
            this.props.powerPathModalVisible({ pathModalVisible: true });
            // if(!this.props.pathIndex.data){
            this.props.requestPowerConfigUnboundPathListSaga({ permId });
            // }
        } else {
            // this.setState({
            //     menuModalVisible: true
            // });
            this.props.powerMenuModalVisible({ menuModalVisible: true });
            this.props.powerConfigMenuListSaga({ permId });
        }
    }

    handleCancel = data => {
        if (data.type === 'path') {
            // this.setState({
            //     pathModalVisible: false
            // });
            this.props.powerPathModalVisible({ pathModalVisible: false })

        } else {
            // this.setState({
            //     menuModalVisible: false
            // });
            this.props.powerMenuModalVisible({ menuModalVisible: false });

        }
        //刷新页面数据
        // this.powerConfig();
    }
    //搜索
    pathModalSearch = (values) => {
        const permId = this.props.match.params.permId;
        this.props.requestPowerConfigUnboundPathListSaga({ permId, ...values });
    }
    //解绑
    unbind = (data) => {
        const powerConfigUnbindSaga = this.props.powerConfigUnbindSaga;
        const permId = this.props.match.params.permId;
        Modal.confirm({
            title: `是否解绑?`,
            content: '解绑后将无法返回',
            okText: '解绑',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                powerConfigUnbindSaga({ ...data, permId, cancel: true });
            },
            onCancel() {
                // TODO
            },
        });
    }

    addMenu = (menuId) => {
        const permId = this.props.match.params.permId;

        this.props.powerConfigUnbindSaga({ relationId: menuId, permId, type: 'menu', cancel: false })
    }

    toBack = () => {
        this.props.history.push('/systemManager/powerManager')
    }

    render() {
        const pathTableColumns = [
            {
                title: '名称',
                dataIndex: 'httpPath',
            },
            {
                title: '请求方法',
                dataIndex: 'httpMethodType',
            },
            {
                title: '描述',
                dataIndex: 'description',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => <Button
                    onClick={this.unbind.bind(this, { relationId: record.pathId, type: 'path' })}>解绑</Button>
            },
        ];
        // tabs menu
        const menuTableColumns = [
            {
                title: '名称',
                dataIndex: 'menuName',
            },
            {
                title: 'action',
                dataIndex: 'action',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => <Button
                    onClick={this.unbind.bind(this, { relationId: record.menuId, type: 'menu' })}>解绑</Button>
            },
        ];
        //menu->modal->table
        const menuColumns = [
            {
                title: '菜单名称',
                dataIndex: 'menuName',
            },
            {
                title: 'action',
                dataIndex: 'action',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    if (!record.btnHide) return <Button onClick={this.addMenu.bind(this, record.menuId)}
                        type={'primary'}>添加</Button>
                }
            }
        ];

        return (
            <React.Fragment>
                <PowerConfigContent pathTableColumns={pathTableColumns} menuTableColumns={menuTableColumns}
                    {...this.props} {...this.state} btnClick={this.btnClick}
                    handleCancel={this.handleCancel} pathModalSearch={this.pathModalSearch}
                    pathSearchLoading={this.props.pathSearchLoading}
                    powerConfig={this.powerConfig} addPath={this.addPath}
                    menuColumns={menuColumns} toBack={this.toBack} />
            </React.Fragment>
        );
    }

}


const searchComponentData = [
    {
        label: 'Path路径',
        id: 'httpPath',
        type: 'text',
        tag: 'input',
    },
];
//path->modal->table
const pathColumns = [
    {
        title: 'path路径',
        dataIndex: 'httpPath',
    },
    {
        title: '描述',
        dataIndex: 'description',
    },
];

const PowerConfigContent = props => {
    // tabs path页面数据
    let pathData = [];
    // tabs菜单页面数据
    let menuData = [];
    //path下modal的数据
    let pathIds = [];
    let pathModalTableList = [];
    try {
        pathModalTableList = props.UnboundPathLis.data.pathList;
    } catch (err) {

    }

    //menu下modal的数据
    let menuModalTableList = [];
    try {
        menuModalTableList = props.configMenuList.data.menuList;
        const bindMenuModalTableList = props.configMenuList.data.alreadyConfigedMenuList;
        bindMenuModalTableList.map(item => {
            menuModalTableList.find(value => {
                if (String(value.menuId) === String(item.menuId)) {
                    value.btnHide = true;
                }
                return null
            });
            return null;
        });
        menuModalTableList = tranTreeData(props.configMenuList.data.menuList, 'menuId', 'parentMenuId', 'menuName');
    } catch (err) {

    }

    try {
        pathData = props.config.data.alreadyConfigedPathList;
        menuData = props.config.data.alreadyConfigedMenuList;
    } catch (err) {
    }

    //path页面Modal关闭按钮的配置
    const pathModalCancel = () => {
        props.handleCancel({ type: 'path' });
    }
    //path下modal里的table
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            selectedRows.map(item => pathIds.push(item.pathId));
        },
    };
    //path页面Modal的配置
    const pathModalProps = {
        title: '添加Path',
        visible: props.pathModalVisible,
        onCancel: pathModalCancel,
        onOk: props.addPath.bind(this, pathIds),
        confirmLoading: props.loading,
        cancelText: '取消',
        okText: '添加'
    };


    //menu页面Modal关闭按钮的配置
    const menuModalCancel = () => {
        props.handleCancel({ type: 'menu' });
    }
    //menu页面Modal的配置
    const menuModalProps = {
        title: '添加菜单',
        visible: props.menuModalVisible,
        onCancel: menuModalCancel,
        onOk: props.addPath.bind(this, pathIds),
        footer: null
        // confirmLoading:props.pathModalConfirmLoading

    };
    const operations = <Button onClick={props.toBack}>返回</Button>;
    return (
        <React.Fragment>
            <div className='containerContent'>
                <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
                    <Tabs.TabPane tab="Path配置" key="1">
                        <TableComponent columns={props.pathTableColumns} dataSource={pathData}
                            rowKey={'httpPath'} componentTitle={'Path列表'}
                            btnName={'添加'} loading={props.loading}
                            btnClick={props.btnClick.bind(this, { type: 'path' })}
                            pagination={false}
                        />
                        <Modal {...pathModalProps} style={{ minWidth: '80%' }}>
                            <FormComponent formList={searchComponentData}
                                btn={{ sub: '搜索' }}
                                layout={'inline'}
                                // messageContent={'搜索中...'}
                                loading={props.loading}
                                formSubmit={props.pathModalSearch} />
                            <Table columns={pathColumns} dataSource={pathModalTableList} loading={props.loading}
                                bordered={true} rowKey={'httpPath'} rowSelection={rowSelection} pagination={false} />
                        </Modal>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="菜单配置" key="2">
                        <TableComponent columns={props.menuTableColumns} dataSource={menuData}
                            rowKey={'menuName'} componentTitle={'菜单列表'}
                            btnName={'添加'} loading={props.loading}
                            btnClick={props.btnClick.bind(this, { type: 'menu' })}
                            pagination={false}
                        />
                        <Modal {...menuModalProps} style={{ minWidth: '80%' }}>
                            <Table
                                columns={props.menuColumns}
                                dataSource={menuModalTableList}
                                loading={props.loading}
                                rowKey={'menuId'} pagination={false} />
                        </Modal>
                    </Tabs.TabPane>
                </Tabs>
            </div>

        </React.Fragment>
    );
};



