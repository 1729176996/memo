var TIMEOUT = 8000;

//获取浏览器所在端
function getBrowser(){
    function IsPC(){  
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
        for(var v = 0; v < Agents.length; v++){  
            if(userAgentInfo.indexOf(Agents[v]) > 0){
                flag = false; break;
            }  
        }  
        return flag;  
    }
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        //苹果端
        return '苹果端';
    }else if(/(Android)/i.test(navigator.userAgent)){
        //安卓端
        return '安卓端';
    }else{
        //PC端
        return '电脑端';
    };
}
