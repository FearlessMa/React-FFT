/**
 * Created by MHC on 2018/1/25.
 */
import React from 'react';
import { Switch, withRouter, Route} from 'react-router-dom';

import {OrganLayout} from '../systemManager/organManager';
// import OrganCreateContainer from '../systemManager/organManager/create'


const AllRoutes = (props)=>{
    console.log('containerprops');
    console.log(props);
    console.log(props.match.path);
    return(
        <div className='containerFlex'>
            <Switch>
                <Route exact path={`${props.match.path}`} component={HomeIndex}/>
                <Route path={`${props.match.path}123/99/89`} component={Adf}/>
                {/*<Route path={`/systemManager/organManager/create`} component={OrganCreateContainer}/>*/}
                {/*<Route path={`/systemManager/organManager/:orgId`} component={Adf} />*/}
                <Route path={`/systemManager/organManager`} component={OrganLayout}/>
                {/*<Redirect to={`${props.match.path}`}/>*/}
            </Switch>
        </div>
    )};
export default withRouter(AllRoutes) ;

const HomeIndex = ()=>(
    <div>homeindex</div>
)
const Adf = (props)=>{
    console.log('Adfprops');
    console.log(props);
    console.log(props.match.params.orgId);
    return(
    <div>Adf</div>
)}