/*
 * @Author: mhc 
 * @Date: 2018-04-23 15:10:49 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-02 14:51:18
 */

// 路由path配置
// businessSystem
const fundsBasePath = '/businessSystem/fundsModule';
export const fundsModulePath ={
    basePath:fundsBasePath,
    createPath:`${fundsBasePath}/create`
}
export const publishFundsPath = {
    basePath:`${fundsBasePath}/publishFunds`,
    createPath:`${fundsBasePath}/publishFunds/create`,
    detailPath:`${fundsBasePath}/publishFunds/detail`,
    detailParam:`/:capitalId`
}
export const receivedFundsPath = {
    basePath:`${fundsBasePath}/receivedFunds`,
    detailPath:`${fundsBasePath}/receivedFunds/detail`,
    detailParam:`/:capitalId`
}