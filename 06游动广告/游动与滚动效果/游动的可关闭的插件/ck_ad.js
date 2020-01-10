function hidead()
{document.getElementById("juxian200").style.display="none";}

document.writeln("<div id=\"juxian200\" style='z-index:99999'>");
document.writeln("<div style=\"width:160px;height:28px;float:left;\"><\/div>");
document.writeln("<div style=\"width:20px;height:28px;float:left\">");
document.writeln("<div onclick=\"hidead();\" title=\"关闭\" style=\"width:20px;height:20px;CURSOR:hand\"><\/div>");
document.writeln("<\/div>");
document.writeln("<div onclick=\"window.open (\'http:\/\/zkz.ckbm.cn\')\" title=\"在线提交准考证号\" style=\"WIDTH:180px;height:25px;CURSOR:hand\"><\/div>");

document.writeln("<div style=\"WIDTH:180px;height:36px;float:left\"><\/div>");
document.writeln("<div style=\"WIDTH:15px;height:60px;float:left\"><\/div>");
document.writeln("<div onclick=\"window.open (\'http:\/\/www.juxianedu.com\/qq\/373315835\')\" title=\"客服QQ在线咨询\" style=\"WIDTH:46px;height:60px;float:left;CURSOR:hand\"><\/div>");
document.writeln("<div style=\"WIDTH:119px;height:60px;float:left\">");
document.writeln("·<a href=\"http:\/\/bm.juxianedu.com\" target=\"_blank\" title=\"◇成人高考免试入学◇&#13;&#10;立即联系报名,可争取免试名额,与正式录取考生同时入学,同时毕业\">成人高考免试入学<\/a><br>");
document.writeln("·<a href=\"http:\/\/www.juxianedu.com\/kaifang\" target=\"_blank\" title=\"◇中央电大开放教育◇&#13;&#10;免试入学,现在报名,春季入学,学制短,学费低,学历含金量更高\">中央电大开放教育<\/a><br>");
document.writeln("·<a href=\"http:\/\/www.juxianedu.com\/zk\/6\/3\" target=\"_blank\" title=\"◇现代远程网络教育◇&#13;&#10;名牌大学学历,即报即上,网上学习,共享优质教学资源,随时随地方便快捷\">现代远程网络教育<\/a>");
document.writeln("<\/div><\/div>")

var x = 50,y = 60
var xin = true, yin = true
var step = 1
var delay = 1
var obj=document.getElementById("juxian200")
function floatAD() {
var L=T=0
var R= document.documentElement.clientWidth-obj.offsetWidth
var B = document.documentElement.clientHeight-obj.offsetHeight
obj.style.left = x + document.documentElement.scrollLeft
obj.style.top = y + document.documentElement.scrollTop
x = x + step*(xin?1:-1)
if (x < L) { xin = true; x = L}
if (x > R){ xin = false; x = R}
y = y + step*(yin?1:-1)
if (y < T) { yin = true; y = T }
if (y > B) { yin = false; y = B }
}
var itl= setInterval("floatAD()", delay)
obj.onmouseover=function(){clearInterval(itl)}
obj.onmouseout=function(){itl=setInterval("floatAD()", delay)}
