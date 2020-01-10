suspendcode="<div class='Qbox' id='divQbox'><div class='Qlist' id='divOnline' onmouseout='hideMsgBox(event);' style='display:none;'><div class='t'></div><div class='con'><h2>济南教育培训网<span onclick='hideq()' title='点击关闭悬浮'>X</span></h2><ul><li><a href='tencent://message/?Menu=yes&uin=258647423&Site=&Service=200&sigT=2314bcccdb1fa35f3264902f7877d25c579268dd5adba825b6393643db179244c2fbafe860cc5cb5' target='_self'><span><img src='http://wpa.qq.com/pa?p=1:258647423:4'/></span>历城区 王老师</a></li><li><a href='tencent://message/?Menu=yes&uin=673952787&Site=&Service=200&sigT=76029ce23a7d185328ad54a628535678fd8282a3ec3360253064185e0a19ac391c305ddc5daf0f0d' target='_self'><span><img src='http://wpa.qq.com/pa?p=1:673952787:4'/></span>市中区 刘老师</a></li><li><a href='tencent://message/?Menu=yes&uin=346796911&Site=&Service=200&sigT=8436353fee8a1d08e15c8a76f7ef2e42882cd6ca2af926578aeb76f930e8a7bbc204d902e69c505c' target='_self'><span><img src='http://wpa.qq.com/pa?p=1:346796911:4'/></span>历下区 李老师</a></li><li><a href='tencent://message/?Menu=yes&uin=197513145&Site=&Service=200&sigT=8436353fee8a1d08e15c8a76f7ef2e42882cd6ca2af926578aeb76f930e8a7bbc204d902e69c505c' target='_self'><span><img src='http://wpa.qq.com/pa?p=1:197513145:4'/></span>客服部 陈老师</a></li><li class='Qtel'>客服邮箱：jnstudy888@163.com<br/>客服电话：<br/>历城区 0531-82312288<br/>市中区 0531-86266288<br/>历下区 0531-88899121</li></ul></div><div class='b'></div></div><div id='divMenu' onmouseover='OnlineOver();'></div></div>"
document.write(suspendcode);

//<![CDATA[
function hideq(){
  obj=document.getElementById("divQbox");
  obj.style.display='none';
}

var tips; var theTop = 145/*这是默认高度,越大越往下*/; var old = theTop;
function initFloatTips() {
tips = document.getElementById('divQbox');
moveTips();
};

function moveTips() {
var tt=50;
if (window.innerHeight) {
pos = window.pageYOffset
}
else if (document.documentElement && document.documentElement.scrollTop) {
pos = document.documentElement.scrollTop
}
else if (document.body) {
pos = document.body.scrollTop;
}
pos=pos-tips.offsetTop+theTop;
pos=tips.offsetTop+pos/10;

if (pos < theTop) pos = theTop;
if (pos != old) {
tips.style.top = pos+"px";
tt=10;
//alert(tips.style.top);
}

old = pos;
setTimeout(moveTips,tt);
}
//!]]>

initFloatTips();


function OnlineOver(){
document.getElementById("divMenu").style.display = "none";
document.getElementById("divOnline").style.display = "block";
document.getElementById("divQbox").style.width = "145px";
}

function OnlineOut(){
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";
}


if(typeof(HTMLElement)!="undefined")    //给firefox定义contains()方法，ie下不起作用
{   
      HTMLElement.prototype.contains=function(obj)   
      {   
          while(obj!=null&&typeof(obj.tagName)!="undefind"){ //通过循环对比来判断是不是obj的父元素
   　　　　if(obj==this) return true;   
   　　　　obj=obj.parentNode;
   　　}   
          return false;   
      };   
}  


function hideMsgBox(theEvent){ //theEvent用来传入事件，Firefox的方式
　 if (theEvent){
　 var browser=navigator.userAgent; //取得浏览器属性
　 if (browser.indexOf("Firefox")>0){ //如果是Firefox
　　 if (document.getElementById('divOnline').contains(theEvent.relatedTarget)) { //如果是子元素
　　 return; //结束函式
} 
} 

if (browser.indexOf("MSIE")>0){ //如果是IE
if (document.getElementById('divOnline').contains(event.toElement)) { //如果是子元素
return; //结束函式

}
}
}

/*要执行的操作*/
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";
}