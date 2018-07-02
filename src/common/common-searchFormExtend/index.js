/*
 * @Author: mhc 
 * @Date: 2018-06-28 16:16:09 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-06-28 16:19:45
 */

import React from 'react';
import { Form, Button, Icon } from 'antd';

/*
 * formSubBtnLayout Obj
 * toggleCollapsed Fun
 * collapsed 
*/

export const SearchFormExtend = props => {

    const { formSubBtnLayout, toggleCollapsed, collapsed } = props;

    return (<Form.Item {...formSubBtnLayout}>
        <Button type={'primary'} htmlType={'submit'}>搜索</Button>
        <span onClick={toggleCollapsed}
            style={{ marginLeft: '10px', color: '#1890ff', cursor: 'pointer' }}>
            {collapsed ? `展开` : '收起'}
            {collapsed ? <Icon type="down" /> : <Icon type="up" />}
        </span>
    </Form.Item>)
}