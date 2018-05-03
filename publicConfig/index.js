/*
 * @Author: mhc 
 * @Date: 2018-04-23 15:15:50 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-03 15:16:20
 */

//引入所有公共配置
import { fundsModulePath, publishFundsPath, receivedFundsPath } from './router';
import { axiosConfig } from './axios';
import {fundsModuleMap,forfaiterMap} from './breadcrumbNameMap';

//index为所有公共配置出口
export { 
    //axios
    axiosConfig,
    //面包屑导航配置
    fundsModuleMap,
    forfaiterMap,
    //router配置
    fundsModulePath, 
    publishFundsPath, 
    receivedFundsPath,
};