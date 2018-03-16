/**
 * Created by MHC on 2018/3/1.
 */
import Mock from 'mockjs';
import {loginMock} from './login';
import {queryorganListMock, queryAllOrgList, orgCreate} from './organManager';
Mock.setup({
    timeout:'1000-2000'
});

loginMock;
queryorganListMock;
queryAllOrgList;
orgCreate;