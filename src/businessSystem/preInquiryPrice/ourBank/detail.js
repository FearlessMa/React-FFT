/*
 * @Author: mhc 
 * @Date: 2018-07-03 11:22:16 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-06 16:01:29
 */

import React from 'react';
import { Row, Col, Button, Divider, Table } from 'antd';
import { ourBankDetail, routerPath } from './config';
import './index.less';
import { connect } from 'react-redux';
import { requestPreInquiryOurBankDetail, requestPreInquiryOurBankDetailHistory } from '../../redux/actions';
import { DetailHistory } from './detailHistory';

const {
    formatDetailList,
    detailMap,
    btnBlackName,
    detailTitle,
    detailTableConfig,
    modalConfig
} = ourBankDetail

const mapStateToProps = state => ({
    ourBankDetailList: state.businessSystem.preInquiryPriceModule.ourBankDetail,
    ourBankDetailHistoryList: state.businessSystem.preInquiryPriceModule.ourBankDetailHistory
})
const mapDispatchToProps = dispatch => ({
    requestOurBankDetailSaga: values => dispatch(requestPreInquiryOurBankDetail(values)),
    requestOurBankDetailHistorySaga: values => dispatch(requestPreInquiryOurBankDetailHistory(values))
})
@connect(mapStateToProps, mapDispatchToProps)
export class OurBankDetailLayout extends React.Component {
    constructor(props) {
        super(props);
        this.astId = this.props.match.params.astId;
        this.props.requestOurBankDetailSaga({ astId: this.astId });
        this.state = {
            visible: false
        }
    }
    goBack = () => {
        this.props.history.push(routerPath.index)
    }

    toggleVisible = (ftmId) => {
        this.setState({
            visible: !this.state.visible
        }, () => {
            if (this.state.visible) {
                this.props.requestOurBankDetailHistorySaga({ ftmId,pageSize: 10000 });
            }
        });
    }

    render() {
        let detailListSaga = [];
        const OurBankDetailContainerData = {
            detailList: [],
            detailTitle: detailTitle,
            btnBlackName: btnBlackName,
            goBack: this.goBack,
            detailTableConfig,
            modalProps: {
                toggleVisible: this.toggleVisible,
                visible: this.state.visible,
                detailHistoryData: [],
                ...modalConfig
            },
            ftmId: ''
        }
        try {
            // 详情列表数据
            detailListSaga = this.props.ourBankDetailList.data;
            //包买商列表数据
            detailTableConfig.dataSource = this.props.ourBankDetailList.data.forfaiterList;
            // 历史列表数据
            OurBankDetailContainerData.modalProps.detailHistoryData = this.props.ourBankDetailHistoryList.data.tranList;
        } catch (e) { }
        // format详情数据
        OurBankDetailContainerData.detailList = formatDetailList(detailListSaga, detailMap);
        OurBankDetailContainerData.ftmId = detailListSaga.ftmId;
        return <React.Fragment>
            <OurBankDetailContainer
                {...OurBankDetailContainerData}
            />
        </React.Fragment>
    }
}

const OurBankDetailContainer = props => {
    const { detailList, detailTitle, btnBlackName, goBack, detailTableConfig, modalProps, ftmId } = props;
    return <React.Fragment>
        <div className='containerContent'>
            <Row>
                <Col span={8} offset={15}>
                    <Button type={'primary'} style={{ marginRight: '10px' }}>
                        <a href="https://github.com/FearlessMa/vueProject/archive/master.zip">下载附件</a>
                    </Button>
                    <Button onClick={modalProps.toggleVisible.bind(null,ftmId)} type={'primary'} style={{ marginRight: '10px' }}>{ourBankDetail.btnHistoryName}</Button>
                    <Button onClick={goBack} type={'primary'}>{btnBlackName}</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div style={{ textAlign: 'center' }}>
                        <Divider><h2>{detailTitle}</h2></Divider>
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
            <Row>
                {
                    Array.isArray(detailTableConfig.dataSource)
                        ? <Row style={{ marginTop: '100px' }}>
                            <Table
                                {...detailTableConfig}
                            />
                        </Row>
                        : null
                }
            </Row>
            <Row>
                <DetailHistory
                    {...modalProps}
                />
            </Row>
        </div>
    </React.Fragment>
}