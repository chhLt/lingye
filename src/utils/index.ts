
export const terminalWeb=():boolean=>{
    let flag = true;
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
    //跳转移动端页面
    flag=false;
    } 
    return flag
}