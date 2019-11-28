//常量
let VERSION_INFO = {
    platformDesc: '', 
    platformType: '', //1：android，2：iOS，3：公众号wap，4：app wap
    name: '',
    code: '1.0.0',
}

let getWebClient =  function (){
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);//ios终端
    if(isAndroid) return 'android'
    if(isiOS) return 'ios'
    return 'web'
}

//判断实际打开页面的设备类型
if(getWebClient() == 'android'){
    VERSION_INFO.platformDesc = 'android';
    VERSION_INFO.platformType = 1;
}else if(getWebClient() == 'ios'){
    VERSION_INFO.platformDesc = 'ios';
    VERSION_INFO.platformType = 2;
}else{
    VERSION_INFO.platformDesc = 'wap',
    VERSION_INFO.platformType = 3;
}

export default {
    VERSION_INFO
}