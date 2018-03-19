/**
 * Created by MHC on 2018/3/19.
 */
import React from 'react';

export default class viewMembers extends React.Component {
    constructor(...arg) {
        super(...arg);
    }

    render() {
        return (
            <React.Fragment>
                123{console.log(11111111111)}
            {console.log(this.props)}
            </React.Fragment>
        );
    }

}

