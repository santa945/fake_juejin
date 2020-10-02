//获取cookie
const getCookie = (key)=>{
    console.log('key',key);
    const name = key + '='
    const ca = document.cookie.split(';')
    for(let i=0;i<ca.length;i++){
        const c = ca[i].trim()
        if(c.indexOf(name) === 0){
            //将name=value格式的字符串裁切成 value 输出
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

export {getCookie}