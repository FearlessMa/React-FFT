/**
 * Created by MHC on 2018/3/22.
 */
import React from 'react';
import {connect} from "react-redux";
import {Row, Col, Button, Table, Tabs} from 'antd';
import {message} from "antd/lib/index";
import {FormComponent} from '../../common';
import {requestPowerDetail} from "../redux/actions";

const TabPane = Tabs.TabPane;


const mapStateToProps = state => ({
    detail: state.systemManager.powerManager.detail,
    loading: state.systemManager.powerManager.loading,
});
const mapDispatchToProps = dispatch => ({
    powerDetailSaga: values => dispatch(requestPowerDetail(values))
});

@connect(mapStateToProps, mapDispatchToProps)
export class PowerDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    componentDidMount() {
        const permId = this.props.match.params.permId;
        console.log(this.props);
        if (isNaN(permId)) {
            this.props.history.push('/systemManager/powerManager');
        }
        this.props.powerDetailSaga({permId});
        const hideLoading = message.loading('正在获取数据...', 0);
        this.setState({
            hideLoading
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading) {
            this.state.hideLoading();
        }
    }

    toBack = () => {
        this.props.history.push('/systemManager/powerManager');
    }

    render() {
        const pathListColumns = [
            {
                title: '名称',
                dataIndex: 'httpPath',
            },
            {
                title: '类型',
                dataIndex: '',
                render:()=><span>Path</span>
            },
            {
                title: '请求方法',
                dataIndex: 'httpMethodType',
            },
            {
                title: '描述',
                dataIndex: 'description',
            },
            // {
            //     title: '操作',
            //     dataIndex: '',
            //     render: (text, record) => <div>
            //         <Button onClick={this.deletePermMenu.bind(this, record)} type={'danger'}>解绑</Button>
            //     </div>
            // },
        ];
        const menuListColumns = [
            {
                title: '名称',
                dataIndex: 'menuName',
            },
            {
                title: '类型',
                dataIndex: '',
                render:()=><span>菜单</span>
            },
            {
                title: 'tab',
                dataIndex: 'tab',
            },
            // {
            //     title: '操作',
            //     dataIndex: '',
            //     render: (text, record) => <div>
            //         <Button onClick={this.deletePermMenu.bind(this, record)} type={'danger'}>解绑</Button>
            //     </div>
            // },
        ];

        return (
            <React.Fragment>
                <PowerDetailContent toBack={this.toBack} pathListColumns={pathListColumns}
                                    menuListColumns={menuListColumns} {...this.props}/>
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


const PowerDetailContent = props => {
    let data = {};
    let pathListData = [];
    let menuListData = [];
    try {
        data = props.detail.data.perm;
        pathListData = props.detail.data.pathList;
        menuListData = props.detail.data.menuList;
    } catch (err) {}

    const formList = [
        // {
        //     label: '权限点编码',
        //     id: 'code',
        //     initialValue: data.menuId,
        //     type: 'text',
        //     tag: 'input',
        //     disabled: true,
        // },
        {
            label: '权限点名称',
            id: 'name',
            initialValue: data.permName,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '上级权限点',
            id: 'upPower',
            initialValue: data.parentPermId,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '权限点描述',
            id: 'description',
            initialValue: data.description,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '创建时间',
            id: 'createTime',
            initialValue: data.createTime,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
        {
            label: '更新时间',
            id: 'updateTime',
            initialValue: data.updateTime,
            type: 'text',
            tag: 'input',
            disabled: true,
        },
    ];

    return (
        <React.Fragment>
            <div className='containerHeader'>
                权限详情
            </div>
            <div className='containerContent'>
                <FormComponent formList={formList} layout={'horizontal'} formItemLayout={formItemLayout}
                               moreItemInRow={true} laoding={props.loading}
                />
                <Row>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Path关系" key="1">
                            <Table loading={props.loading} columns={props.pathListColumns} dataSource={pathListData}
                                   rowKey={'httpPath'} bordered={true}/>
                        </TabPane>
                        <TabPane tab="菜单关系" key="2">
                            <Table loading={props.loading} columns={props.menuListColumns}
                                   dataSource={menuListData} rowKey={'menuId'}
                                   bordered={true}/>
                        </TabPane>
                    </Tabs>

                </Row>
                <Row>
                    <Col span={4} offset={8}>
                        <Button type={'primary'}>编辑</Button>
                    </Col>
                    <Col span={4}>
                        <Button onClick={props.toBack}>返回</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};
