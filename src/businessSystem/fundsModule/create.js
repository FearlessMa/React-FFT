/*
 * @Author: mhc 
 * @Date: 2018-04-25 15:15:22 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-05 16:21:30
 */


import React from 'react';
import { FormComponent, TableComponent } from 'common';
import { connect } from 'react-redux';
import { requestFundsPublishCreate, reuqestParentScForfaiterList } from '../redux/actions';

import { Modal, Table, notification, Divider, Row, Col } from 'antd';


const mapStateToProps = state => ({
    parentScForfaiterList: state.businessSystem.fundsModule.parentScForfaiterList,
    // modalTableLoading: state.businessSystem.forfaiterModule.loading,
})
const mapDispatchToProps = dispatch => ({
    fundsPublishCreateSaga: values => dispatch(requestFundsPublishCreate(values)),
    modalForfaiterListSaga: values => dispatch(reuqestParentScForfaiterList(values)),
});

@connect(mapStateToProps, mapDispatchToProps)
export class PublishCreateContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            modalVisible: false,
            //最终存储已选择的包买商数据
            selectedForfaiter: [],
            //modal框已选择的数据
            modalSelectedForfaiter: []
        }
    }
    // 提交
    onSubmit = values => {
        const { selectedForfaiter } = this.state;
        values.priceValidEnd = new Date(values.priceValidEnd).getTime();
        values.priceValidStart = new Date(values.priceValidStart).getTime();
        const list = this.formatForfaiterList(selectedForfaiter);
        // values.forfaiter = JSON.stringify(list);
        values.forfaiter = list;
        // console.log(values);
        if (!selectedForfaiter[0]) {
            notification['error']({
                message: '错误！',
                description: '包买商为必选'
            })
        } else {
            this.props.fundsPublishCreateSaga(values);
        }
    }
    
    onSearch = values =>{
        console.log('values')
        console.log(values)
        this.props.modalForfaiterListSaga(values);
    }

    // 创建包买商列表数据forfaiter
    formatForfaiterList = list => {
        const rootMap = {};
        const childrenList = [];
        list.map(item => {
            //筛选出根机构
            if (String(item['isRoot']) === '1') {
                rootMap[item['swiftCode']] = {
                    BK_NM_C: item['forfaiterName'],
                    BK_SC: item['swiftCode'],
                    FORFEITER: []
                }
            } else {
                childrenList.push(item)
            }
            return null
        })
        childrenList.map(item => {
            if (item['rootSwiftCode'] in rootMap) {
                rootMap[item['rootSwiftCode']].FORFEITER.push({
                    NM: item.forfaiterName,
                    SC: item.swiftCode
                })
            } else {
                // 如果只传子机构，创建对应的根机构并添加当前子机构在根机构中
                rootMap[item['rootSwiftCode']] = {
                    BK_NM_C: item['rootName'],
                    BK_SC: item['rootSwiftCode'],
                    FORFEITER: [
                        {
                            NM: item.forfaiterName,
                            SC: item.swiftCode
                        }
                    ]
                }
            }
            return null
        });
        return Object.values(rootMap)
    }
    //切换显示
    toggleModal = (type) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
        if (type === 'btn') {
            this.props.modalForfaiterListSaga({ forfaiterStatus: 'publish' })
        }
    }
    //modal确认按钮回调
    modalTableValue = () => {
        this.setState({
            selectedForfaiter: this.state.modalSelectedForfaiter,
            modalVisible: !this.state.modalVisible
        })
    }

    //modal 中table选择的数据
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            this.setState({
                modalSelectedForfaiter: selectedRows
            })
        },
    };

    // 删除已选中包买商
    deleteSelectedForfaiter = (record) => {
        const newData = this.state.selectedForfaiter.filter((item) => {
            if (item.swiftCode !== record.swiftCode) {
                return true
            }
            return null
        });
        this.setState({
            selectedForfaiter: newData
        });
    }

    //分页
    paginationOnChange = pagination => {
        this.props.modalForfaiterListSaga({ current: pagination.current, pageSize: pagination.pageSize });
    }

    render() {
        //扩展columns删除操作
        const tableDeleteColumns = [
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => {
                    return <span className={'detail-columns-delete'} onClick={this.deleteSelectedForfaiter.bind(this, record)}>删除</span>
                }
            },
        ];
        return <React.Fragment>
            <PublishCreateContent
                formSubmit={this.onSubmit}
                toggleModal={this.toggleModal}
                modalTableValue={this.modalTableValue}
                rowSelection={this.rowSelection}
                tableDeleteColumns={tableDeleteColumns}
                paginationOnChange={this.paginationOnChange}
                onSearch = {this.onSearch}
                {...this.state}
                {...this.props}
            />
        </React.Fragment>
    }
}


const PublishCreateContent = props => {
    let forfaiterData = [];
    const selectedColumns = tableColumns.concat(props.tableDeleteColumns);
    try {
        forfaiterData = props.parentScForfaiterList.data.forfaiterList;
    } catch (e) { }
    return (<React.Fragment>
        <div className={'containerContent'}>
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Divider><h2>创建资金</h2></Divider>
                    </div>
                </Col>
            </Row>
            <FormComponent
                formList={formList}
                layout={'horizontal'}
                moreItemInRow={true}
                formItemLayout={formItemLayout}
                formSubBtnLayout={formSubBtnLayout}
                btn={{ sub: '提交', back: '返回' }}
                formSubmit={props.formSubmit}
            >
                <TableComponent
                    componentTitle={'包买商列表'}
                    btnName={'添加包买商'}
                    columns={selectedColumns}
                    dataSource={props.selectedForfaiter}
                    rowKey='swiftCode'
                    btnClick={props.toggleModal.bind(this, 'btn')}
                    scroll={{ y: 240 }}
                    pagination={false}
                ></TableComponent>
                <ul>
                    <li>
                        选择添加总行默认包括所有分行
                    </li>
                    <li style={{ color: 'red' }}>
                        包买商为必选
                    </li>
                </ul>
            </FormComponent>
            <Modal
                //modal 
                title="包买商列表"
                visible={props.modalVisible}
                onOk={props.modalTableValue}
                onCancel={props.toggleModal}
                cancelText={'取消'}
                style={{ minWidth: '80%' }}
            >
                <FormComponent
                    //modal搜索
                    formList={ModalsearchComponentData}
                    formSubmit={props.onSearch}
                    btn={{ sub: '搜索' }}
                    layout={'inline'}
                //formItemLayout={formItemLayout}
                //formSubBtnLayout={modalFormSubBtnLayout}
                //moreItemInRow={true}
                />
                <Table
                    //modal table
                    rowKey='swiftCode'
                    columns={tableColumns}
                    dataSource={forfaiterData}
                    scroll={{ y: 400 }}
                    //扩展子table
                    //expandedRowRender={expandedRowRender}
                    //点击扩展图标是回调
                    //onExpand={props.onExpand}
                    //显示选择框
                    rowSelection={props.rowSelection}
                    onChange={props.paginationOnChange}
                //loading={props.modalTableLoading}
                />
            </Modal>
        </div>
    </React.Fragment>)
}

// 表单
const formList = [
    {
        label: '包买商名称',
        id: 'forfaiterNm',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '包买商名称必填'
        }
    },
    {
        label: '包买商BIC',
        id: 'forfaiterSc',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '包买商BIC必填'
        }
    },
    {
        label: '包买商联系人',
        id: 'forfaiterAtten',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '包买商联系人必填'
        }
    },
    {
        label: '包买商联系方式',
        id: 'forfaiterContacts',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '包买商联系方式必填'
        }
    },
    {
        label: '融资期限',
        id: 'financingMaturity',
        tag: 'number',
        rules: {
            type: 'number',
            required: true,
            message: '融资期限必填'
        },
        config:{
            formatter:value => `${value}天`,
            style:{width:'100%'},
        }
    },
    {
        label: '价格',
        id: 'price',
        tag: 'number',
        rules: {
            type: 'number',
            required: true,
            message: '价格必填且取值范围为0-99.99',
            max:99.99,
            min:0
        },
        config:{
            formatter:value => `${value}%`,
            style:{width:'100%'},
        }
    },
    {
        label: '价格有效开始时间',
        id: 'priceValidStart',
        tag: 'date',
        rules: {
            required: true,
            message: '价格有效开始时间必填',
            type: 'object'
        },
        config: {
            placeholder: ''
        }
    },
    {
        label: '价格有效结束时间',
        id: 'priceValidEnd',
        tag: 'date',
        rules: {
            required: true,
            message: '价格有效结束时间必填',
            type: 'object'
        },
        config: {
            placeholder: ''
        }
    },
    {
        label: '其他要求',
        id: 'requirements',
        tag: 'textarea',
        type: 'text',
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
//table columns数据
const tableColumns = [
    {
        title: '包买商名称',
        dataIndex: 'forfaiterName',
    },
    {
        title: 'swiftCode',
        dataIndex: 'swiftCode',
    },
];
//modal 搜索
const ModalsearchComponentData = [
    {
        label: '机构名称',
        id: 'forfaiterNm',
        type: 'text',
        tag: 'input',
    },
    {
        label: '结构BIC',
        id: 'parentSwiftCode',
        type: 'text',
        tag: 'input',
    },
    {
        label: '包买商BIC',
        id: 'swiftCode',
        tag: 'input',
    },
];
// //modal
// const modalFormSubBtnLayout = {
//     wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 4, offset: 20 },
//     }
// };

