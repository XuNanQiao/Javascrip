function hidead()
{document.getElementById("juxian200").style.display="none";}

document.writeln("<div id=\"juxian200\" style='z-index:99999'>");
document.writeln("<div style=\"width:160px;height:28px;float:left;\"><\/div>");
document.writeln("<div style=\"width:20px;height:28px;float:left\">");
document.writeln("<div onclick=\"hidead();\" title=\"�ر�\" style=\"width:20px;height:20px;CURSOR:hand\"><\/div>");
document.writeln("<\/div>");
document.writeln("<div onclick=\"window.open (\'http:\/\/zkz.ckbm.cn\')\" title=\"�����ύ׼��֤��\" style=\"WIDTH:180px;height:25px;CURSOR:hand\"><\/div>");

document.writeln("<div style=\"WIDTH:180px;height:36px;float:left\"><\/div>");
document.writeln("<div style=\"WIDTH:15px;height:60px;float:left\"><\/div>");
document.writeln("<div onclick=\"window.open (\'http:\/\/www.juxianedu.com\/qq\/373315835\')\" title=\"�ͷ�QQ������ѯ\" style=\"WIDTH:46px;height:60px;float:left;CURSOR:hand\"><\/div>");
document.writeln("<div style=\"WIDTH:119px;height:60px;float:left\">");
document.writeln("��<a href=\"http:\/\/bm.juxianedu.com\" target=\"_blank\" title=\"����˸߿�������ѧ��&#13;&#10;������ϵ����,����ȡ��������,����ʽ¼ȡ����ͬʱ��ѧ,ͬʱ��ҵ\">���˸߿�������ѧ<\/a><br>");
document.writeln("��<a href=\"http:\/\/www.juxianedu.com\/kaifang\" target=\"_blank\" title=\"�������󿪷Ž�����&#13;&#10;������ѧ,���ڱ���,������ѧ,ѧ�ƶ�,ѧ�ѵ�,ѧ������������\">�����󿪷Ž���<\/a><br>");
document.writeln("��<a href=\"http:\/\/www.juxianedu.com\/zk\/6\/3\" target=\"_blank\" title=\"���ִ�Զ�����������&#13;&#10;���ƴ�ѧѧ��,��������,����ѧϰ,�������ʽ�ѧ��Դ,��ʱ��ط�����\">�ִ�Զ���������<\/a>");
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
