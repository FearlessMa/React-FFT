/*
 * @Author: mhc 
 * @Date: 2018-05-17 16:27:40 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-17 16:39:58
 */


export function formatYYYYMMDD(milliseconds) {
    if (typeof milliseconds !== 'number') {
        throw new Error('formatYYYYMMDD接收的参数不为毫秒数');
    }
    let time = new Date(milliseconds);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    return `${year}-${month}-${date}`
}