/*
 * @Author: mhc 
 * @Date: 2018-06-29 11:23:35 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-29 11:35:03
 */

import Mock from 'mockjs';


/* 
Path:/enquiry/list/owner
Method:POST
*/

export const PreInquiryOurBankList = Mock.mock('/enquiry/list/owner', option => {
    return {
        code: 200,
        message: 'succ',
        data: [{
            "createTime": "0",
            "issuingBankSc": "saasas",
            "issuingBank": "民生",
            "duration": "0",
            "sta": "1",
            "astId": "1211",
            "ftmId": "1"
        }]
    }
})