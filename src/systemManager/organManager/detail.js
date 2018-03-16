/**
 * Created by MHC on 2018/3/15.
 */
import React from 'react';

export default class OrganDetailContainer extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    render() {
        return (
            <React.Fragment>
                <OraganDetailContent/>
            </React.Fragment>
        );
    }

}

const OraganDetailContent = (props)=>{

    return (
        <React.Fragment>
            {/*<div className="containerHeader">*/}
            {/*机构管理*/}
            {/*</div>*/}
            <div className="containerContent">
                <div>OrganDetailContainer</div>
            </div>
        </React.Fragment>
    )
};

