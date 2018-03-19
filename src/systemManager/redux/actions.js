/**
 * Created by MHC on 2018/3/13.
 */

import {REQUESTORG, REQUESTALLORG, REQUESTORGCREATE, REQUESTORGDETAIL, REQUESTORGDELETE } from "./actionTypes";

export const requestOrgList = (valves)=>(
    {
        type : REQUESTORG,
        ...valves
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

export const requestOrgDetail = (value)=>({
    type: REQUESTORGDETAIL,
    ...value
});

export const requestOrgDelete = (value)=>({
    type: REQUESTORGDELETE,
    ...value
});