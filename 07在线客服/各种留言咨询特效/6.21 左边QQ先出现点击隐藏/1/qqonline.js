document.writeln("<div id=\"kfFloat\" style=\"margin:0; padding:0; z-index: 20; visibility: visible; position: absolute; top: 350px; left:10px;\">");
document.writeln("<table id=\"qqtab\" cellspacing=\"0\" cellpadding=\"0\" width=\"134\" border=\"0\">");
document.writeln("    <tbody>");
document.writeln("        <tr>");
document.writeln("            <td height=\"30\" align=\"right\" valign=\"top\" background=\"1\/top.gif\"><a href=\"javascript:void(0);\" onclick=\"closekf(0)\"><img src=\"1\/close.gif\" hspace=\"10\" vspace=\"8\" border=\"0\" \/><\/a><\/td>");
document.writeln("        	  <td></td>");
document.writeln("        <\/tr>");
document.writeln("        <tr id=\"qqstab\">");
document.writeln("        	  <td width=\"120\" align=\"center\" valign=\"middle\" background=\"1\/middle.gif\">");
document.writeln("        	  <table cellspacing=\"0\" cellpadding=\"0\" width=\"100\" border=\"0\">");
//start
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/79_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/join\/\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">马上报名<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/79_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/cha\/\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">高考成绩查询<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/12_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/baoming\/\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;\">免费领简章<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/99_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/join\/zhuxue\/\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">免费领Q币<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/87_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/mf.html\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">免费上大学<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/45_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/join\/query.asp\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;\">录取查询<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/52_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"\/tongzhishu\/\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">通知书申请<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/45_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"http:\/\/wpa.qq.com\/msgrd?V=1&Uin=763804010&Site=zhaoban.org&Menu=yes\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;\">航空咨询<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/79_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"http:\/\/wpa.qq.com\/msgrd?V=1&Uin=763805041&Site=zhaoban.org&Menu=yes\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">留学咨询<\/a><\/td>");
document.writeln("        	  	</tr>");
document.writeln("        	  	<tr>");
document.writeln("        	  		<td valign=\"middle\" align=\"left\" height=\"22\"><img src=\"1\/79_m.gif\" align=\"absmiddle\" border=\"0\"> <a href=\"http:\/\/wpa.qq.com\/msgrd?V=1&Uin=763802736&Site=zhaoban.org&Menu=yes\" target=\"_blank\" style=\"font-size:12px;text-decoration:none;color:#ff0000;\">高校咨询<\/a><\/td>");
document.writeln("        	  	</tr>");
//end
document.writeln("        	  <\/table><\/td>");
document.writeln("        	  <td valign=\"middle\"><img src=\"1\/online.gif\" width=\"24\" height=\"110\" onclick=\"(document.getElementById(\'kfFloat\').style.left==\'-120px\')?openkf(12):closekf(0)\" \/><\/td>");
document.writeln("        <\/tr>");
document.writeln("        <tr>");
document.writeln("        	  <td valign=\"top\"><img border=\"0\" src=\"1\/bottom.gif\" /><\/td>");
document.writeln("        	  <td></td>");
document.writeln("        <\/tr>");
document.writeln("    <\/tbody>");
document.writeln("<\/table>");
document.writeln("<\/div>");

//js 部分
//<![CDATA[
var tips; var theTop = 320;var old = theTop;
function initFloatTips() {
tips = document.getElementById('kfFloat');
moveTips();
};
function moveTips() {
var grantt=20;
if (window.innerHeight) {
	pos = window.pageYOffset;
}
else if (document.documentElement && document.documentElement.scrollTop) {
	pos = document.documentElement.scrollTop;
}
else if (document.body) {
	pos = document.body.scrollTop;
}
pos=pos-tips.offsetTop+theTop;
pos=tips.offsetTop+pos/10;
if (pos < theTop) pos = theTop;
if (pos != old) {
	tips.style.top = pos+"px";
	grantt=10;
	//alert(tips.style.top);
}
old = pos;
setTimeout(moveTips,grantt);
}
//!]]>
initFloatTips();
function closekf(i){
	if(i<13){
	document.getElementById('kfFloat').style.left=-10*i+'px';
	i++;
	setTimeout("closekf("+i+")",10);
	}
}
function openkf(i){
	if(i>-2){
	document.getElementById('kfFloat').style.left=-10*i+'px';
	i--;
	setTimeout("openkf("+i+")",10);
	}
}