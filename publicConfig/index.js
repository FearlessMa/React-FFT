/*
 * @Author: mhc 
 * @Date: 2018-04-23 15:15:50 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-16 14:30:56
 */

//引入所有公共配置
import { fundsModulePath, publishFundsPath, receivedFundsPath, dictModulePath } from './router';
import { axiosConfig, loginTimeout } from './axios';
import { fundsModuleMap, forfaiterMap, dictMap } from './breadcrumbNameMap';


//index为所有公共配置出口
export {
    //axios
    axiosConfig,
    loginTimeout,
    //面包屑导航配置
    fundsModuleMap,
    forfaiterMap,
    dictMap,
    //router配置
    fundsModulePath,
    publishFundsPath,
    receivedFundsPath,
    dictModulePath
};