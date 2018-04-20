/**
 * Created by MHC on 2018/3/16.
 */
import React from 'react';
import {Table, Col, Row} from 'antd';


/**
 *  componentTitle : 标题 Str
 *  titleStyle : 自定义title样式 Obj
 *  btnName : 按钮名称 Str
 *  btnStyle : 自定义button样式 Obj
 *  btnClick : 按钮事件 Fun
 *  OtherComponent : 其他组件
 *  其他为antd的table属性
 *
 * **/
export const TableComponent = (props) => {
    let {btnName, titleStyle, btnStyle, OtherComponent} = props;
    btnName = btnName || false;
    OtherComponent = OtherComponent || false;
    return (
        <React.Fragment>
            <Row>
                <Col span={10}>
                    <div className='tableTitle' style={titleStyle}>{props.componentTitle}</div>
                </Col>
                {
                    OtherComponent ? <Col>
                        <OtherComponent/>
                    </Col> : null
                }
                {
                    btnName ? <Col span={3} offset={11}>
                        <div onClick={props.btnClick} className='btn' style={btnStyle}>{props.btnName}</div>
                    </Col> : null
                }
            </Row>
            <Table {...props} />
        </React.Fragment>
    )
};

