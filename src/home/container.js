/**
 * Created by MHC on 2018/1/25.
 */
import React from 'react';
import { Switch, withRouter} from 'react-router-dom';

// import Adf from 'js/tpl/antdFrom';
// import AJs from 'js/tpl/antdJS';
// import RJs from 'js/tpl/reactJS';
// import HomeIndex from 'js/homeIndex/homeIndex';

const FlexStyle = {
    flex:1,
    padding:'10px',
    margin:'15px',
    backgroundColor:'#fff',
};

const AllRoutes = (props)=>{
    return(
        <div style={FlexStyle}>
            <Switch>
                {/*<Route exact path={`${props.match.path}`} component={HomeIndex}/>*/}
                {/*<Route path={`${props.match.path}/adf`} component={Adf}/>*/}
                {/*<Route path={`${props.match.path}/ajs`} component={AJs}/>*/}
                {/*<Route path={`${props.match.path}/rjs`} component={RJs}/>*/}
                {/*<Redirect to={`${props.match.path}`}/>*/}
            </Switch>
        </div>
    )};
export default withRouter(AllRoutes) ;