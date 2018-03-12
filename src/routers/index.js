/**
 * Created by MHC on 2018/2/14.
 */
import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginComponent from "../login";
import HomeComponent from "../home";
import {connect} from 'react-redux';
import { authenticatedAction } from '../login/redux/actions';
import {storeMenuListAction} from './redux/actions';
import {STOREMENULIST} from './redux/actionTypes';

const RouterIndex = ()=>{
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={LoginComponent} />
                    <PrivateRoute  path={'/home'} component={HomeComponent} />
                    {/*<Route path={'/home'} component={HomeComponent} />*/}
                    <Redirect to={'/'}/>
                </Switch>
            </Router>
        );

};

const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch)=>({
    authDispatch : (sessionAuth)=>dispatch(authenticatedAction(sessionAuth)),
    sessionUserDataToStore : (userData)=>dispatch(storeMenuListAction(userData))
});
@connect(mapStateToProps,mapDispatchToProps)
class PrivateRoute extends React.Component{
       constructor(props){
           super(props);
           this.state = {
               isAuthenticated : this.props.login.isLogin
           }
       }
        componentWillMount() {
            const sessionAuth = sessionStorage.getItem('isAuthenticated');
            // console.log('this.props');
            // console.log(this.props);
            //通过session验证身份
            if(sessionAuth){
                const userData = JSON.parse(sessionStorage.getItem('userData'));
                this.props.authDispatch(sessionAuth);
                if(userData){
                    this.props.sessionUserDataToStore(userData);
                }
                this.setState({
                        isAuthenticated : true
                    }
                )
            }

        }

        render(){
           const {component: Component,...rest} = this.props;
            return <Route {...rest} render={props => (
                this.state.isAuthenticated? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/',
                    }}/>
                )
            )}/>
        }
}

export default RouterIndex

export {STOREMENULIST}