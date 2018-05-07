/*
 * @Author: mhc 
 * @Date: 2018-04-23 15:10:49 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 15:24:00
 */

// 路由path配置
// 系统
// dict字典
const dictBasePath = '/systemManager/dictManager';
export const dictModulePath = {
    basePath: dictBasePath,
    detailPath: `${dictBasePath}/detail`,
    detailParam: '/:dictId',
    createPath: `${dictBasePath}/create`
};

// businessSystem
const fundsBasePath = '/businessSystem/fundsModule';
export const fundsModulePath = {
    basePath: fundsBasePath,
};
export const publishFundsPath = {
    basePath: `${fundsBasePath}/publishFunds`,
    createPath: `${fundsBasePath}/publishFunds/create`,
    detailPath: `${fundsBasePath}/publishFunds/detail`,
    detailParam: `/:capitalId`
};
export const receivedFundsPath = {
    basePath: `${fundsBasePath}/receivedFunds`,
    detailPath: `${fundsBasePath}/receivedFunds/detail`,
    detailParam: `/:capitalId`
};

