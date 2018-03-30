/**
 * Created by MHC on 2018/3/21.
 */

import {message} from "antd";


export const tranTreeList = (list) => {
    if (!Array.isArray(list)) message.error('数据错误，请联系管理员！');
    let treeList = [];
    let filterList = [];
    filterList = list.filter((item) => {
        item.action = item.action.replace(/\./g, '/');
        if (item.parentMenuId === "Root") {
            treeList.push(item);
        }
        //排序
        treeList.sort(compare);
        return item.parentMenuId !== "Root"
    });
    return treeMenuList(treeList, filterList);
};

const compare = (arr1, arr2) => arr1.sort - arr2.sort;

//转为树形数据结构
const treeMenuList = (treeList, filterList) => {
    treeList.map((item) => {
        let isIncludeChildern = filterList.find((value) => item.menuId === value.parentMenuId);
        if (isIncludeChildern) {
            item.children = [];
            filterList.map((fItem) => {
                if (item.menuId === fItem.parentMenuId) {
                    item.children.push(fItem);
                }
                return null;
            });
            item.children.sort(compare);
            treeMenuList(item.children, filterList)
        }
        return null;
    });
    return treeList
};

/**
 * 转为树形结构最终代码
 *
 * **/
export const tranTreeData = (selectData,id,parentId,name)=>{
    if (!Array.isArray(selectData)) {
        throw new Error(`参数selectData不是一个数组`);
    }
    let selectTreeList = [];
    let selectListMap = {};
    for(let i in selectData){
        selectData[i]['key'] = i;
        let _item = selectData[i];
        let isIncludeChildern = selectData.find((value) => _item[id] === value[parentId]);
        if(isIncludeChildern)_item.children = [];
        _item.id = _item[id];
        _item.name = _item[name];
        selectListMap[_item[id]] = _item;
    }
    for(let i in selectData){
        let _item = selectData[i];
        if(_item[parentId] in selectListMap){
            let parentPerm = selectListMap[_item[parentId]];
            parentPerm.children.push(_item);
        }else{
            selectTreeList.push(_item);
        }
    }
    return selectTreeList
};