/*
 * @Author: mhc 
 * @Date: 2018-04-26 09:51:29 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-26 21:49:48
 */

import React from 'react';


export class FundsDetailContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<React.Fragment>
            <FundsDetaulContent />
        </React.Fragment>)
    }

}

const FundsDetaulContent = props => {

    return (<React.Fragment>
        123
        {console.log(fundsData)}
    </React.Fragment>)
}

const fundsData = {
    "capitalId": "979524062367059968",
    "forfaiterNm": "民生银行北京分行",
    "forfaiterSc": "MSBCCNBJ100",
    "forfaiterAtten": "李四",
    "forfaiterContacts": "18200000000",
    "financingMaturity": "",
    "price": 0.15,
    "requirements": "",
    "priceValidStart": 1515052850000,
    "priceValidEnd": 1515052850000,
    "capitalStatus": "1",
    "forfaiter": "",
    "txId": "943d7109-070b-4f87-9da7-1824e0e6683a",
    "tranType": "1",
    "tranDate": 1515052850000,
    "extend": ""
}
console.log(fundsData);

const FundsMap = {
    capitalId:'id',
    forfaiterNm:'包买商名称',
    forfaiterSc:'包买商BIC',
    forfaiterAtten:'包买商联系人',
    forfaiterContacts:'包买商联系方式',
    financingMaturity:'融资期限',
    price:'价格',
    requirements:'其他要求',
    priceValidStart:'价格有效期开始时间',
    priceValidEnd:'价格有效期截止时间',
    capitalStatus:'状态',
    forfaiter:'包买商列表',
    txId:'交易ID',
    tranType:'交易类型',
    tranDate:'交易时间',
    extend:'扩展字段'
}