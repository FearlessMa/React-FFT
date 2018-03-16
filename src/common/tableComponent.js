/**
 * Created by MHC on 2018/3/16.
 */
import React from 'react';
import { Table, Col, Row, Button } from 'antd';

export const TableComponent = (props)=>(
    <React.Fragment>
        <Row>
            <Col span={3} ><div className='tableTitle'>{props.componentTitle}</div></Col>
            <Col span={3} offset={18}><div onClick={props.toCreate} className='btn'>{props.BtnName}</div></Col>
        </Row>
        <Table {...props} />
    </React.Fragment>
);

