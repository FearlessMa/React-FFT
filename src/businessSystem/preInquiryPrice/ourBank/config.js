/*
 * @Author: mhc 
 * @Date: 2018-06-29 10:41:33 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-29 18:43:29
 */

import React from 'react';
import { Button } from 'antd';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { OurBankLayout } from './index';
// import { OurBankCreateLayout } from './create';

/* router */

const routerPath = {
    index: '/businessSystem/preInquiryPrice/ourBank',
    create: '/businessSystem/preInquiryPrice/ourBank/create'
}



/* ---index---- */
/** 搜索框数据和布局 **/
const searchComponentData = [
    {
        label: '债务人swift',
        id: 'debtorSc',
        type: 'text',
        tag: 'input',
    },
    {
        label: '买方swift',
        id: 'ptycode',
        type: 'text',
        tag: 'input',
    }
];
const searchOtherData = [
    {
        label: '资产期限',
        id: 'duratiNo',
        type: 'text',
        tag: 'input',
        config: {
            placeholder: ''
        }
    },
    {
        label: '状态',
        id: 'sta',
        tag: 'select',
        options: [
            {
                name: '未发布',
                value: '0'
            },
            {
                name: '已发布',
                value: '1'
            },
            {
                name: '已下架',
                value: '2'
            },
            {
                name: '超时',
                value: '3'
            },
            {
                name: '失败',
                value: '4'
            },
        ]
    },
];
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
    },
};
const formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 17 },
    }
};


const tableComponentConfigs = {
    rowKey: 'ftmId',
    bordered: true,
}
const tableComponentTitleConfigs = {
    componentTitle: '我行询价列表',
    btnName1: '发起询价',
    btnName2: '导出Excel',
}

function publicColumns() {
    return [
        {
            title: 'id',
            dataIndex: 'ftmId',
            render: (text, record) => {
                return <a href={`#`}>{text}</a>
            }
        },
        {
            title: '开证行名称',
            dataIndex: 'issuingBank',
            // render: (text) => {
            //     return <span>{`${text}%`}</span>
            // }
        },
        {
            title: '询价日期',
            dataIndex: 'createTime',
            render: (text) => {
                return <span>{`${new Date(text).toLocaleString()}`}</span>
            }
        },
        {
            title: '资产期限',
            dataIndex: 'duration',
            render: (text) => {
                return <span>{`${new Date(text).toLocaleString()}`}</span>
            }
        },
        {
            title: '状态',
            dataIndex: 'sta',
            render: (text) => {
                if (typeof text !== 'string') {
                    text = String(text);
                }
                let state = '';
                switch (text) {
                    case "0":
                        state = '未发布';
                        break;
                    case '1':
                        state = '已发布';
                        break;
                    case '2':
                        state = '已下架';
                        break;
                    case '3':
                        state = '超时';
                        break;
                    case '4':
                        state = '失败'
                        break;
                    default:
                        return null;
                }
                return <span>{state}</span>
            }
        },
        {
            title: '操作',
            dataIndex: '',
            render: () => {
                return <div>
                    <Button onClick={() => console.log('撤销')}>撤销</Button>
                </div>
            }
        }
    ];
}


/* create */
const formCreateList = [
    {
        label: '开证行名称',
        id: 'issuingBank',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '开证行名称'
        }
    },
    {
        label: '开证行SWIFT',
        id: 'issuingBankSc',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '开证行SWIFT'
        }
    },
    {
        label: '卖方机构名称',
        id: 'grantorBank',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '卖方机构名称'
        }
    },
    {
        label: '卖方SWIFT',
        id: 'grantorBankSc',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '卖方SWIFT'
        }
    },
    {
        label: '卖方机构联系人',
        id: 'grantorBankCtter',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '卖方机构联系人'
        }
    },
    {
        label: '卖方机构联系方式',
        id: 'grantorBankContacts',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '卖方机构联系方式'
        }
    },
    {
        label: '付款币别',
        id: 'paymentCurency',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '付款币别'
        }
    },
    {
        label: '付款金额',
        id: 'payAmt',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '付款金额'
        }
    },
    {
        label: '资产期限',
        id: 'duration',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '资产期限',
        },
        config: {
            placeholder: '如3M,6M等'
        }
    },
    {
        label: '基础交易买方',
        id: 'basebuyer',
        tag: 'input',
        type: 'text',
        rules: {
            required: true,
            message: '基础交易买方'
        }
    },
    {
        label: '基础交易卖方',
        id: 'baseSeller',
        tag: 'input',
        rules: {
            required: true,
            message: '基础交易卖方',
        },
    },
    {
        label: '货物名称',
        id: 'goodsName',
        tag: 'input',
        rules: {
            required: true,
            message: '货物名称',
        },
    },
    {
        label: '报价上限',
        id: 'quotationUpperLimit',
        tag: 'number',
        rules: {
            message: '报价上限',
        },
        config: {
            formatter: value => `${value}%`,
            style: { width: '100%' },
        }
    },
    // {
    //     label: '价格有效结束时间',
    //     id: 'priceValidEnd',
    //     tag: 'date',
    //     rules: {
    //         required: true,
    //         message: '价格有效结束时间必填',
    //         type: 'object'
    //     },
    //     config: {
    //         placeholder: ''
    //     }
    // },
    {
        label: '备注',
        id: 'remark',
        tag: 'textarea',
        type: 'text',
    },
];

// formList={formList}
// layout={'horizontal'}
// moreItemInRow={true}
// formItemLayout={formItemLayout}
// formSubBtnLayout={formSubBtnLayout}
// btn={{ sub: '提交', back: '返回' }}
const createFormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
}

const createFormSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10, offset: 10 },
    }
};
const fromComponentCreateConfig = {
    formList: formCreateList,
    layout: 'horizontal',
    moreItemInRow: true,
    btn: { sub: '提交', back: '返回' },
    formItemLayout,
    formSubBtnLayout:createFormSubBtnLayout
}



export {
    routerPath, searchComponentData, searchOtherData, formItemLayout,
    formSubBtnLayout, publicColumns, tableComponentConfigs, tableComponentTitleConfigs,
    formCreateList,fromComponentCreateConfig
};