/**
 * Created by MHC on 2018/2/13.
 */

import { combineReducers } from 'redux';
import { loginReducer } from "../login/redux/reducer";
import { pathManager, organManager, menuManager, powerManager, roleManager, userManager } from '../systemManager/redux/reducer';
import { fundsModule, forfaiterModule } from '../businessSystem/redux/reducer';

//系统
const systemManager = combineReducers({
    organManager: organManager,
    pathManager: pathManager,
    menuManager: menuManager,
    powerManager: powerManager,
    roleManager: roleManager,
    userManager: userManager
});

//业务
const businessSystem = combineReducers({
    fundsModule: fundsModule,
    forfaiterModule
});

const reducers = combineReducers({
    login: loginReducer,
    systemManager: systemManager,
    businessSystem: businessSystem
});


export default reducers;
