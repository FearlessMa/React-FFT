/*
 * @Author: mhc 
 * @Date: 2018-04-26 09:51:29 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 17:18:01
 */

import React from 'react';
import { Row, Col, Button, Divider, Table } from 'antd';
import './index.less';
import { connect } from 'react-redux';
import { requestFundsDetail } from '../redux/actions';


const FundsMap = {
    capitalId: 'id',
    forfaiterNm: '包买商名称',
    forfaiterSc: '包买商BIC',
    forfaiterAtten: '包买商联系人',
    forfaiterContacts: '包买商联系方式',
    financingMaturity: '融资期限',
    price: '价格',
    requirements: '其他要求',
    priceValidStart: '价格有效期开始时间',
    priceValidEnd: '价格有效期截止时间',
    capitalStatus: '状态',
    forfaiter: '包买商列表',
    txId: '交易ID',
    tranType: '交易类型',
    tranDate: '交易时间',
    extend: '扩展字段'
};

const mapStateToProps = state => ({
    fundsDetail: state.businessSystem.fundsModule.fundsDetail
});

const mapDispatchToprops = dispatch => ({
    fundsDetailSaga: values => dispatch(requestFundsDetail(values))
});
@connect(mapStateToProps, mapDispatchToprops)
export class FundsDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const capitalId = this.props.match.params.capitalId;
        this.capitalId = capitalId;
        this.props.fundsDetailSaga({ capitalId });
    }
    goBack = () => {
        window.history.go(-1)
    }

    render() {
        return (<React.Fragment>
            <FundsDetaulContent fundsDetail={this.props.fundsDetail} goBack={this.goBack} />
        </React.Fragment>)
    }

}

const FundsDetaulContent = props => {
    let detailList = [];
    let forfaiterList = [];
    try {
        let dataList = props.fundsDetail.data;
        forfaiterList = tranTreeList(JSON.parse(dataList.forfaiter));
        detailList = tranFundsList(dataList, FundsMap);
    } catch (e) { }
    if (typeof detailList !== 'object') { detailList = [] }
    return (<React.Fragment>
        <div className="containerContent">
            <Row>
                <Col span={3} offset={21}>
                    <Button onClick={props.goBack} type={'primary'}>返回</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Divider><h2>资金详情</h2></Divider>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    detailList.map(item => {
                        return (
                            <Col span={10} offset={1} key={item.key}>
                                <div className={'detail-row'}>
                                    <div>{item.name}:</div><p>{item.value}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row style={{ marginTop: '100px' }}>
                <div id='forfaiterTable'>
                    <Table
                        columns={columns}
                        dataSource={forfaiterList}
                        rowKey={'SC'}
                        pagination={false}
                        title={() => <h3>包买商列表</h3>}
                        bordered={true}
                    //scroll={{ y: 400 }}
                    />
                </div>
            </Row>
        </div>
    </React.Fragment>)
}

const columns = [
    {
        title: '名称',
        dataIndex: 'NM'
    },
    {
        title: 'swiftCode',
        dataIndex: 'SC'
    },
];
//转换显示
function tranFundsList(list, listMap) {
    const newList = [];
    for (let k in list) {

        newList.push({
            key: k,
            name: listMap[k],
            value: list[k]
        })
    }
    newList.map(item => {
        switch (item.key) {
            case 'price':
                item.value += '%';
                break;
            case 'priceValidStart':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'priceValidEnd':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'tranDate':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'tranType':
                if (typeof item.value !== 'string') { item.value = String(item.value) };
                item.value === '1' ? item.value = '我发布的' : item.value = '我收到的';
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
}

//forfaiter 列表转化为树形结构
function tranTreeList(list) {
    if (!Array.isArray(list)) {
        alert('fortaiter列表不是一个数组！');
        return
    }
    list.map(item => {
        if (Array.isArray(item.FORFEITER)) {
            item.children = item.FORFEITER;
        }
        item.SC = item.BK_SC;
        item.NM = item.BK_NM_C;
        return null
    });
    return list
}