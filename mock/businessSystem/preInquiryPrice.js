/*
 * @Author: mhc 
 * @Date: 2018-06-29 11:23:35 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-06 23:55:19
 */

import Mock from 'mockjs';


/* 
Path:/enquiry/sended/list
Method:POST
*/

const enquiryListData = Mock.mock({
    'enquiryList|3': [
        {
            "createTime": "0",
            "issuingBankSc": "saasas",
            "issuingBank": "民生",
            "duration": "0",
            "sendAll|1": ['Y', 'N'],
            "sta|+1": [
                "ENQUIRY", 'INTENTION_DEAL', 'CANCEL', 'ASSET', 'PRICE_DEAL', 'OFFER',
                'OFFER_MODIFY', 'OFFER_RETURN', 'CONFIRM', 'CONFIRM_MODIFY', 'CONFIRM_RETURN',
                'TRAN_DEAL', 'FINISH', 'OFFLINE_APPLY', 'OFFLINE'
            ],
            "astId": "@increment()",
            // "ftmId": "@increment()"
        },
    ]
});
export const PreInquiryOurBankList = Mock.mock('/enquiry/sended/list', option => {
    return {
        code: 200,
        message: 'succ',
        data: {
            "pagination": {
                "current": 1,
                "pageSize": 15,
                "total": 20,
                "totalPage": 2
            },
            enquiryList: enquiryListData.enquiryList
        }
    }
})

/* 
Path:/asset/detail
Method:POST
 */

export const PreInquiryOurBankDetail = Mock.mock(/\/asset\/detail?/, option => {
    // const astId  = JSON.parse(option);
    console.log('astId========')
    console.log(option)
    if (1) {
        return {
            code: 200,
            message: 'succ',
            data: {
                issuingBankSc: "1212",
                issuingBank: "ms",
                grantorBankCtter: "121",
                grantorBankContacts: "11111",
                paymentCurrency: "rmb",
                paymentAmt: "11111",
                duration: "2",
                baseBuyer: "11",
                baseSeller: "11",
                goods: "1",
                quotationUpperLimit: "11",
                ftmId:'123',
                attachment: { "FT_URL": "", "FILE_NAME": "", "FILE_PATH": "", "SYMMETRIC_KEY": "", "CHECK_CODE": "" },
                forfaiterList: [
                    {
                        ptyCode: '12212',
                        ptyName: '民生',
                        sta: '1',
                        parentNode: '1',
                        nodeType: '1',
                        createTime: '1',
                        updateTime: '1'
                    }
                ]
            }
        }
    }
    return null
})

let a = {
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

/* 
Path:/trancation/list
Method:POST
 */

const tranListData = Mock.mock({
    'tranList|3': [
        {
            'tranName|+1': ['发起询价','报价','达成意向'],
            sta: '状态',
            'completeTime|+1': [0,10000,200000,300000],
            'sender|1': ['民生银行','民生银行北京分行','民生银行苏州分行','民生银行南京分行'],
            trnId: '1212121'
        }
    ]
});

export const PreInquiryOurBankDetailHistory = Mock.mock(/\/trancation\/list?/, option => {
    return {
        code: 200,
        message: 'succ',
        data: {
            "pagination": {
                "current": 1,
                "pageSize": 15,
                "total": 20,
                "totalPage": 2
            },
            tranList:tranListData.tranList
            //  [
            //     {
            //         tranName: '交易名称',
            //         sta: '状态',
            //         completeTime: '0',
            //         sender: '交易发起方',
            //         trnId: '查询历史详情ID'
            //     }
            // ]
        }
    }
})