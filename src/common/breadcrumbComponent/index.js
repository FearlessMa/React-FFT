/**
 * Created by MHC on 2018/4/11.
 */

import React from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import './index.less'

// const breadcrumbNameMap = {
//     '/systemManager': '系统管理',
//     '/systemManager/menuManager': '菜单管理',
//     '/systemManager/menuManager/create': '创建菜单',
//     '/systemManager/pathManager': 'Path管理',
// };
export const BreadcrumbComponent = props => {
    const {location, breadcrumbNameMap} = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        console.log(url);
        console.log(index);
        console.log(breadcrumbNameMap[url]);
        if (!breadcrumbNameMap[url]) return null;
        if (index === 0) {
            return (
                <Breadcrumb.Item key={url}>
                    {breadcrumbNameMap[url]}
                </Breadcrumb.Item>
            )
        }
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });

    return (
        <Breadcrumb className={'breadcrumb'}>
            {[].concat(extraBreadcrumbItems)}
        </Breadcrumb>)
};