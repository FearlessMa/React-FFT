/**
 * Created by MHC on 2018/2/13.
 */

import {combineReducers} from 'redux';
import {loginReducer} from "../login/redux/reducer";
import {
    pathManager, organManager, menuManager, powerManager, roleManager,
    userManager
} from '../systemManager/redux/reducer';

//系统
const systemManager = combineReducers({
    organManager: organManager,
    pathManager: pathManager,
    menuManager: menuManager,
    powerManager: powerManager,
    roleManager: roleManager,
    userManager: userManager
});

const reducers = combineReducers({
    login: loginReducer,
    systemManager: systemManager
});


export default reducers;
