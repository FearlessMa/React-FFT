/**
 * Created by MHC on 2018/3/1.
 */
import Mock from 'mockjs';
import {loginMock} from './login';
import {queryorganListMock, queryAllOrgList, orgCreate} from './systemManager/organManager';
import {pathManager} from './systemManager/pathManager';
import {menuListTemplate} from './systemManager/menuManager';
import {powerManager} from "./systemManager/powerManager";
import {roleList} from "./systemManager/roleManager";
import {userManager} from "./systemManager/userManager";
Mock.setup({
    timeout:'500-1500'
});

loginMock;
queryorganListMock;
queryAllOrgList;
orgCreate;
pathManager;
menuListTemplate;
powerManager;
roleList;
userManager
