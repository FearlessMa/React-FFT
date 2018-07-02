/**
 * Created by MHC on 2018/2/13.
 */

import { combineReducers } from 'redux';
import { loginReducer } from "../login/redux/reducer";
import { pathManager, organManager, menuManager, powerManager, roleManager, userManager, dictModule } from '../systemManager/redux/reducer';
import { fundsModule, forfaiterModule, preInquiryPriceModule } from '../businessSystem/redux/reducer';

//系统
const systemManager = combineReducers({
    organManager,
    pathManager,
    menuManager,
    powerManager,
    roleManager,
    userManager,
    dictModule
});

//业务
const businessSystem = combineReducers({
    fundsModule,
    forfaiterModule,
    preInquiryPriceModule
});

const reducers = combineReducers({
    login: loginReducer,
    systemManager: systemManager,
    businessSystem: businessSystem
});


export default reducers;
