/**
 * Created by MHC on 2018/3/14.
 */

import React from 'react';
import './index.less';
/**
 *  Container容器布局
 *
 * **/
export const ContainerLayout = (props)=>{
    return (
        <React.Fragment>
            {props.containerHeader?<div className='containerHeader'>
                <props.containerHeader {...props}/>
            </div>:null}
            <div className='containerContent'>
                <props.containerContent {...props}/>
            </div>
        </React.Fragment>
    )
};