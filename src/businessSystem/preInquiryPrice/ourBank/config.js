/*
 * @Author: mhc 
 * @Date: 2018-06-29 10:41:33 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-11 16:56:08
 */

import React from 'react';
import { Button } from 'antd';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { OurBankLayout } from './index';
// import { OurBankCreateLayout } from './create';

/* router */

const routerPath = {
    index: '/businessSystem/preInquiryPrice/ourBank',
    create: '/businessSystem/preInquiryPrice/ourBank/create',
    detail: '/businessSystem/preInquiryPrice/ourBank/detail/:astId',
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
    rowKey: 'astId',
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
            dataIndex: 'astId',
            render: (text) => {
                return <a href={`#/businessSystem/preInquiryPrice/ourBank/detail/${text}`}>{text}</a>
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
            title: '是否定向发布',
            dataIndex: 'sendAll',
            render: (text) => {
                if (typeof text !== 'string') text += '';
                return <span style={text === 'Y' ? { color: 'blue' } : null}>{text === 'Y' ? '定向' : '非定向'}</span>
            }
        },
        {
            title: '状态',
            dataIndex: 'sta',
            render: (text) => {
                if (typeof text !== 'string') {
                    text = String(text);
                }
                return <span>{indexStaMap[text]}</span>
            }
        },
        {
            title: '操作',
            dataIndex: '',
            render: (text, record) => {
                return <div className='btn-group'>
                    <Button type='primary' onClick={() => console.log('撤销')}>报价列表</Button>
                    <Button onClick={() => console.log('撤销')}>修改信息</Button>
                    <Button type='danger' onClick={() => console.log('撤销')}>撤销</Button>
                </div>
            }
        }
    ];
}

const indexStaMap = {
    ENQUIRY: '已询价',
    INTENTION_DEAL: '价格意向达成',
    CANCEL: '取消',
    // ASSET: '资产已发布',
    // PRICE_DEAL: '价格达成',
    // OFFER: '待确定Offer',
    // OFFER_MODIFY: '待确认Offer(修改)',
    // OFFER_RETURN: '待修改Offer',
    // CONFIRM: '待买方确认',
    // CONFIRM_MODIFY: '待买方确认(修改)',
    // CONFIRM_RETURN: '待卖方修改',
    // TRAN_DEAL: '交易达成',
    // FINISH: '交易完结',
    // OFFLINE_APPLY: '下架申请',
    // OFFLINE: '已下架'
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
    formSubBtnLayout: createFormSubBtnLayout
}



/* -----detail------ */

const detailMap = {
    // bclcInst: "是否区块链开证",
    // grantorBankSc: "卖出行swift",
    // grantorBank: "卖出行名称",
    // creditNo: "债券工具编号",
    // bizNo: "交单编号",
    // durationtyp: "资产期限类型",
    // valuedate: "拟起息日",
    // debtMaturityDate: "债权到期日",
    // graceDays: "宽限期",
    // workDay: "工作日",
    // remaIningDays: "资产剩余天数",
    // buckle: "扣息方式",
    // intentionalPrice: "意向价格",

    issuingBankSc: "开证行swift",
    issuingBank: "开证行名称",
    grantorBankCtter: "卖方机构联系人",
    grantorBankContacts: "卖方机构联方式",
    paymentCurrency: "付款币别",
    paymentAmt: "付款金额",
    duration: "资产期限",
    baseBuyer: "基础交易买方",
    baseSeller: "基础交易卖方",
    goods: "货物名称",
    quotationUpperLimit: "报价上限",

    sta: "状态",

    forfaiterList: '包买商列表',
    // baseBuyerIndustry: "基础交易买方所属行业",
    // baseSellerIndustry: "基础交易卖方所属行业",
    // affiliatedEnterprise: "买卖双方是否关联企业",
    // 信用证详情
    // lcdetails: [{ "TRAN_CODE": "BCL0101", "TXID": "", "KEY": "" }, { "TRAN_CODE": "BCL0102", "TXID": "", "KEY": "" }],
    // // 国内证副本文件信息
    // lcCopy: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
    // // 付款确认副本文件信息
    // acceptCopy: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
    // // 交单副本文件信息
    // presentCopy: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
    // // 其他材料文件信息
    // otherInf: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
    // // 附件
    // attachment: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
    // createTime: "创建时间",
    // forfaitingId: "福费廷交易根ID",
    // ftmId: "福费廷交易主表ID",
    // astId: "资产表主键"
}
//转换显示
function formatDetailList(list, listMap) {
    const newList = [];
    for (let k in listMap) {

        newList.push({
            key: k,
            name: listMap[k],
            value: list[k]
        })
    }
    newList.map(item => {
        if (item.value === undefined) {
            return null;
        }
        switch (item.key) {
            case 'quotationUpperLimit':
                item.value += '%';
                break;
            case 'forfaiterList':
                item.value = Array.isArray(item.value) ? '定向发布' : '非定向发布';
                break;
            case 'capitalStatus':
                if (typeof item.value !== 'string') { item.value = String(item.value) };
                switch (item.value) {
                    case "0":
                        item.value = '未发布';
                        break;
                    case '1':
                        item.value = '已发布';
                        break;
                    case '2':
                        item.value = '已下架';
                        break;
                    case '3':
                        item.value = '超时';
                        break;
                    case '4':
                        item.value = '失败'
                        break;
                    default:
                        return null;
                }
                break;
            case 'forfaiter':
                item.value = <a>请看下方列表</a>;
                break;
            default:
                return item.value
        }
        return null
    })
    return newList
};

function detailColumns() {
    return [
        {
            title: '包买商名称',
            dataIndex: 'ptyName',
        },
        {
            title: '包买商swiftCode',
            dataIndex: 'ptyCode',
        },
        {
            title: '状态',
            dataIndex: 'sta',
        },
    ]
}
const detailTableConfig = {
    columns: detailColumns(),
    rowKey: 'ptyCode',
    pagination: false,
    title: () => <h3>包买商列表</h3>,
    bordered: true
}
const detailHistoryMap = {
    tranName: 'tranName',
    sta: 'sta',
    completeTime: 'completeTime',
    sender: 'sender',
    trnId: 'trnId',
    ftmId: 'ftmId'
}
const modalConfig = {
    title: '历史记录',
    cancelText: '关闭',
    detailHistoryMap
}


const ourBankIndex = {
    searchComponentData,
    searchOtherData,
    formItemLayout,
    formSubBtnLayout,
    publicColumns,
    tableComponentConfigs,
    tableComponentTitleConfigs
}
const ourBankCreate = {
    fromComponentCreateConfig
}
const ourBankDetail = {
    formatDetailList,
    detailMap,
    btnBlackName: '返回',
    detailTitle: '询价详情',
    btnHistoryName: '历史记录',
    detailTableConfig,
    modalConfig
}
export {
    routerPath,
    ourBankDetail,
    ourBankIndex,
    ourBankCreate
};