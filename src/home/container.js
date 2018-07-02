/**
 * Created by MHC on 2018/1/25.
 */
import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
// import { OrganLayout } from '../systemManager/organManager';
// import { PathManagerLayout } from '../systemManager/pathManager';
// import { MenuManagerLayout } from "../systemManager/menuManager";
// import { PowerManagerLayout } from "../systemManager/powerManager";
// import { RoleManagerLayout } from "../systemManager/roleManager";
// import { UserManagerLayout } from "../systemManager/userManager";

// import { DictModuleLayout } from '../systemManager/dictManager';
// import { FundsModuleLayout } from '../businessSystem/fundsModule';
// import { ForfaitorContainer } from '../businessSystem/forfaiter';
import { dictModulePath } from 'publicConfig';
//按需加载
import {
    MenuManagerLayout, OrganLayout, PathManagerLayout, PowerManagerLayout, RoleManagerLayout, UserManagerLayout, DictModuleLayout,
    FundsModuleLayout, PackageBuyerContainer
} from '../routers/lazyRouters';
import { OurBankRouter } from '../businessSystem/preInquiryPrice/ourBank';

const AllRoutes = props => {
    return (
        <div className='containerFlex'>
            <Switch>
                <Route exact path={`${props.match.path}`} component={HomeIndex} />
                <Route path={`/systemManager/menuManager`} component={MenuManagerLayout} />
                <Route path={`/systemManager/pathManager`} component={PathManagerLayout} />
                <Route path={`/systemManager/organManager`} component={OrganLayout} />
                <Route path={`/systemManager/powerManager`} component={PowerManagerLayout} />
                <Route path={`/systemManager/roleManager`} component={RoleManagerLayout} />
                <Route path={`/systemManager/userManager`} component={UserManagerLayout} />
                <Route path={`/businessSystem/fundsModule`} component={FundsModuleLayout} />
                <Route path={`/businessSystem/packageBuyer`} component={PackageBuyerContainer} />
                <Route path={`${dictModulePath.basePath}`} component={DictModuleLayout} />
                <Route path={`/businessSystem/preInquiryPrice/ourBank`} component={OurBankRouter} />
                {/* <Redirect to={`${props.match.path}`} /> */}
            </Switch>
        </div>
    )
};
export default withRouter(AllRoutes);


//测试代码
const HomeIndex = () => (
    <div>homeIndex</div>
)
