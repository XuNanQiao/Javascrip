// JavaScript Document
lastScrollYy=0;
function heartBeatt(){ 
var diffYy;
if (document.documentElement && document.documentElement.scrollTop)
    diffYy = document.documentElement.scrollTop;
else if (document.body)
    diffYy = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffYy-lastScrollYy); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("lovexin12").style.top=parseInt(document.getElementById("lovexin12").style.top)+percent+"px";
document.getElementById("lovexin14").style.top=parseInt(document.getElementById("lovexin14").style.top)+percent+"px";
lastScrollYy=lastScrollYy+percent; 
//alert(lastScrollY);
}
suspendcode12="<DIV id=\"lovexin12\" style='right:5px;POSITION:absolute;TOP:100px; display:none'><a href=JavaScript:; onclick=\"lovexin12.style.display='none',lovexin14.style.display = 'block'\"><img src=\"1/webzixun.gif\" /></a></div>"

suspendcode14="<DIV id=\"lovexin14\" style='right:10px;POSITION:absolute;TOP:100px;height:300px;font-size:12px; width:115px; padding-left:13px;line-height:24px;background:url(1/zxbj.jpg);padding-top:2px;color:#000;'>"
suspendcode14+="<span style='padding-left:80px;'><a href=JavaScript:; onclick=\"lovexin12.style.display = 'block',lovexin14.style.display = 'none'\"><img src=\"1/colse.jpg\" /></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left; text-align:left;padding-top:8px;'>TQ咨询</span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left;'><a href=http://float2006.tq.cn/static.jsp?version=vip&admiuin=8049466&uin=8267575&ltype=0&iscallback=1 target=_blank>张老师<img src=http://float2006.tq.cn/staticimg.jsp?version=vip&admiuin=8049466&uin=8267575&ltype=0&style=1 border='0'></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left;'><a href=http://float2006.tq.cn/static.jsp?version=vip&admiuin=8049466&uin=8302667&ltype=0&iscallback=1 target=_blank>林老师<img src=http://float2006.tq.cn/staticimg.jsp?version=vip&admiuin=8049466&uin=8302667&ltype=0&style=1 border='0'></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left;'><a href=http://float2006.tq.cn/static.jsp?version=vip&admiuin=8049466&uin=8845245&ltype=0&iscallback=1 target=_blank>周老师<img src=http://float2006.tq.cn/staticimg.jsp?version=vip&admiuin=8049466&uin=8845245&ltype=0&style=1 border='0'></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left;'><a href=http://float2006.tq.cn/static.jsp?version=vip&admiuin=8049466&uin=8845247&ltype=0&iscallback=1 target=_blank>黄老师<img src=http://float2006.tq.cn/staticimg.jsp?version=vip&admiuin=8049466&uin=8845247&ltype=0&style=1 border='0'></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; float:left; text-align:left;padding-top:2px;'>QQ咨询<br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:22px; float:left;'><a target=blank href=tencent://message/?uin=619127514&Site=中国在职研究生网在线客服&Menu=yes><img border=\"0\" SRC=http://wpa.qq.com/pa?p=1:619127514:1 alt=\"点击这里给我发消息\" align=\"absmiddle\"></a><br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; float:left; text-align:left;padding-top:2px;'>咨询电话<br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:18px; line-height:18px; float:left;'>010-88877747<br></span>"
suspendcode14+="<span style='width:115px;font-size:12px; height:18px; line-height:18px; float:left;'>010-88877748</span>"
suspendcode14+="<span style='width:105px;font-size:12px; height:22px; float:left; padding-left:5px; text-align:left;padding-top:2px;'><a href=\"http://qtt.tq.cn/leavemsg.do?uin=8049466\" target=_blank><img src=\"1/tel.gif\" /></a></span>"
suspendcode14+="</div>"



document.write(suspendcode12); 
document.write(suspendcode14);  
window.setInterval("heartBeatt()",1);


