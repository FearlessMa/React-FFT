/*
 * @Author: mhc 
 * @Date: 2018-05-08 23:04:09 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-14 10:32:53
 */

//按需加载
import { lazyLoad } from './lazyLoad';

//home container router
export const MenuManagerLayout = lazyLoad(()=>import(/* webpackChunkName: "MenuManagerLayout" */'../systemManager/menuManager'));
export const OrganLayout = lazyLoad(()=>import(/* webpackChunkName: "OrganLayout" */'../systemManager/organManager'));
export const PathManagerLayout = lazyLoad(()=>import(/* webpackChunkName: "PathManagerLayout" */'../systemManager/pathManager'));
export const PowerManagerLayout = lazyLoad(()=>import(/* webpackChunkName: "PowerManagerLayout" */'../systemManager/powerManager'));
export const RoleManagerLayout = lazyLoad(()=>import(/* webpackChunkName: "RoleManagerLayout" */'../systemManager/roleManager'));
export const UserManagerLayout = lazyLoad(()=>import(/* webpackChunkName: "UserManagerLayout" */'../systemManager/userManager'));
export const DictModuleLayout = lazyLoad(()=>import(/* webpackChunkName: "DictModuleLayout" */'../systemManager/dictManager'));
export const FundsModuleLayout = lazyLoad(()=>import(/* webpackChunkName: "FundsModuleLayout" */'../businessSystem/fundsModule'));
export const PackageBuyerContainer = lazyLoad(()=>import(/* webpackChunkName: "PackagebuyerContainer" */'../businessSystem/packageBuyer'));
