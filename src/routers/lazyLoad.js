/*
 * @Author: mhc 
 * @Date: 2018-05-08 17:05:15 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-08 22:21:02
 */

import React from 'react';
import { Bundle } from './bundle.js';


//  loading页面
const Loading = () => <div>loading...</div>;


//    包装方法，第一次调用后会返回一个组件（函数式组件） 
//    由于要将其作为路由下的组件，所以需要将 props 传入 
//       <Bundle load={loadComponent}> 
//       {Comp => (Comp ? <Comp {...props} /> : <Loading />)} 
//    </Bundle> 

// export const lazyLoad = (loadComponent, props) => {
//     //Bundle  包含的是一个函数子组件 由Bundle.js里的this.props.children(this.state.mod)渲染  
//     return (
//         <Bundle load={loadComponent}>
//             {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
//         </Bundle>
//     );
// }

export const lazyLoad = (loadComponent) => props => (
    <Bundle load={loadComponent}>
        {Comp => (Comp ? <Comp {...props} /> : <Loading />)}
    </Bundle>
);