var urp = new Array(); //来源参数名称
var urpv = new Array();
var arrayCount = 0;
var sEn = new Array(); //搜索引擎的名称
var keyWord = new Array(); //关键字传输形式
sEn[0] = "baidu";
keyWord[0] = "wd";
var pageOpen = new Date();
var uexp = pageOpen.getTime() + (1000 * 60 * 60 * 24); //设置cookie过期时间 既回访用户的限定

// 比较url,如果为搜索引擎则保存关键字
function getKeyword(url) {
    var hostname = getHostName(url);
    for (var i = 0; i < sEn.length; i++) {
        if (hostname == sEn[i]) {
            for (var j = 0; j < urp.length; j++) {
                if (urp[j] == keyWord[i]) {
                    return urpv[j];
                }
            }
        }
    }
    return "";
}

//获得域名
function getHostName(url) {
    var hostname;
    if (url.indexOf(".") == -1)
    { hostname = url; }
    else
    { hostname = url.substring(url.indexOf(".") + 1, url.lastIndexOf(".")); }
    return hostname;
}

//设定Cookie值
function setCookie(name, value) {
    var expdate = new Date();
    var expires = 15768000;
    var path = null;
    var domain = ".m18.com";
    var secure = false;

    if (expires != null) {
        //设置过期时间24小时
        expdate.setTime(uexp);
        document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expdate.toGMTString()))
		    + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain))
		    + ((secure == true) ? "; secure=" : "");
    }

}

//将URL转换为地址和页面参数和参数值 参数uri为页面地址
function gethn(uri) {
    if (!uri || uri == "") return "";
    ur = uri;
    var sub;
    //带参数
    if (ur.indexOf("?") != -1) {
        var url = ur.substring(0, ur.indexOf("?"));
        var para = ur.substring(ur.indexOf("?") + 1, ur.length);
        while (para.length > 0) {
            if (para.indexOf("&") == -1) {
                urp[arrayCount] = para.substring(0, para.indexOf("="));
                urpv[arrayCount] = para.substring(para.indexOf("=") + 1, para.length);
                break;
            }
            sub = para.substring(0, para.indexOf("&"));
            urp[arrayCount] = sub.substring(0, sub.indexOf("="));
            urpv[arrayCount] = sub.substring(sub.indexOf("=") + 1, sub.length);
            para = para.substring(para.indexOf("&") + 1, para.length);
            arrayCount++;
        }
        return url;
    }
    else
        return ur;
}

//分析并写入数据
//var sourceUrl = "http://www.baidu.com/s?wd=%C2%F3%CD%F8";
var sourceUrl = document.referrer;
gethn(sourceUrl);
var cookieValue = getKeyword(sourceUrl);
if (cookieValue) {
    cookieValue = "baidu-" + cookieValue;
    setCookie("UnionSite", cookieValue);
}


