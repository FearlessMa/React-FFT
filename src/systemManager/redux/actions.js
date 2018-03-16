/**
 * Created by MHC on 2018/3/13.
 */

import {REQUESTORG, REQUESTALLORG, REQUESTORGCREATE} from "./actionTypes";

export const requestOrgList = ()=>(
    {
        type : REQUESTORG
    }
);
export const requestAllOrgList = ()=>(
    {
        type : REQUESTALLORG
    }
);
export const requestOrgCreate = (value)=>(
    {
        type : REQUESTORGCREATE,
        ...value
    }
);