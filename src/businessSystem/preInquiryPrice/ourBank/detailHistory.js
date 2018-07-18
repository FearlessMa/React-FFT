/*
 * @Author: mhc 
 * @Date: 2018-07-05 14:49:38 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-11 10:12:22
 */

import React from 'react';
import { Modal, Timeline, Row, Col } from 'antd';

export const DetailHistory = props => {
    const { title, visible, toggleVisible, cancelText, detailHistoryMap } = props;
    let { detailHistoryData } = props;
    detailHistoryData = detailHistoryData || [];
    return <React.Fragment>
        <Modal
            title={title}
            visible={visible}
            onOk={toggleVisible}
            onCancel={toggleVisible}
            cancelText={cancelText}
            style={{ minWidth: '80%' }}
        >
            <Row style={!detailHistoryData[0] ? { margin: '100px 0' } : null}>
                <Col offset={8}>
                    <Timeline>
                        {
                            detailHistoryData.map((item, i) => (
                                <Timeline.Item color='green' key={i}>
                                    <p className='detail-history-item'>
                                        <span>{new Date(item[detailHistoryMap.completeTime]).toLocaleString()}</span>
                                        <strong>{item[detailHistoryMap.sender]}</strong>
                                        <span>{item[detailHistoryMap.tranName]}</span>
                                    </p>
                                    <p>
                                        <span className='detail-history-item-link'
                                            onClick={() => { console.log(item[detailHistoryMap.trnId]) }}
                                        >查看详情</span>
                                    </p>
                                </Timeline.Item>
                            ))
                        }
                    </Timeline>
                </Col>
            </Row>
        </Modal>
    </React.Fragment>
}