

//一点击就出现一个帮助的提示框，内容自己定义！
function help()
{
    var helpmess;
    helpmess="---------------填写帮助---------------\r\n\r\n"+
         "1.请不要发表有危险性的脚本。\r\n\r\n"+
         "2.如果要书写源代码，请选中\r\n\r\n"+
         "　查看HTML源代码书写.\r\n\r\n"+
         "3.需要你自己运行,才能看效果.\r\n\r\n"+
         "4.如果书写js，尽量不要在这儿书写.\r\n\r\n";
    alert(helpmess);
}

//以某个窗口的形式打开还具有多层执行命令的网页
function MyWin(url,target) { 
	var iWidth=527; 
	var iHeight=406; 
	var iTop=(window.screen.height-iHeight)/2; 
	var iLeft=(window.screen.width-iWidth)/2; 
	window.open(url,target,"Scrollbars=no,Toolbar=no,Location=no,Direction=no,Resizeable=no, Width="+iWidth+" ,Height="+iHeight+",top="+iTop+",left="+iLeft); 
} 

//以某个窗口的形式打开一层执行命令的网页
function winopen(url)
{
 window.open(url,'','top=100,left=200,width=500,height=400,toolbar=no,menubar=no,scrollbars=no, resizable=no');
}
var isIE=navigator.appName.indexOf("Explorer") > -1;

//获得指定的对象
function $(obj){ return document.getElementById(obj); }
function G(obj){ return document.getElementById(obj); }

//获得指定的对象标签中的内容
function getElementText(obj){
	var text = "";
	if(isIE){
		text = G(obj).innerText;
	} else{
		text = G(obj).textContent;
	}
	return text;

}

//获得指定的对象标签中的内容
function getElementText(obj){
	var text = "";

	text = G(obj).innerHTML;
	return text;
}

//去掉字符串前后的空白
String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

function HTMLEncode( text )
{
	if ( !text )
		return '' ;
	text = text.replace( /"/g, '&quot;');
	text = text.replace( /</g, '&lt;' ) ;
	text = text.replace( />/g, '&gt;' ) ;
	return text ;
}


function HTMLDecode( text )
{
	if ( !text )
		return '' ;
	text = text.replace( /&gt;/g, '>' ) ;
	text = text.replace( /&lt;/g, '<' ) ;
	text = text.replace( /&quot;/g, '"');
	text = text.replace( /&amp;/g, '&' ) ;
	return text ;
}


//Ajax通用类
function getXMLHttpRequest() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

//执行GET操作的调用
function doGet(url,method){
  var req = getXMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      var data=req.responseText; 
      method(data);
    }
  };
  req.open("GET",url, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(null);
}


//执行POST方式的调用
function doPost(url,params,method){
  var req = getXMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      var data=req.responseText; 
      method(data);
    }
  };
  req.open("POST",url, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(params);
}

//获得指定Cookie对象值
function getCookie(cookieName){

	var s=document.cookie.indexOf(cookieName);
	if(s==-1){
		return null;
	}
	
	var e=document.cookie.indexOf(";",s);
	if(e==-1){
		return document.cookie.substring(s+cookieName.length+1);
	}else{
		return document.cookie.substring(s+cookieName.length+1,e);
	}
}

//js连接函数，本窗口打开
function link(url){ window.location=url;}

//显示指定对象
function showObj(obj){

	if($(obj)) $(obj).style.display="";
}

//隐藏指定对象
function hideObj(obj){

	if($(obj)) $(obj).style.display="none";
}

//切换对象 显示/隐藏
function switchDiv(obj){

	if($(obj)){

		if ($(obj).style.display=="none") $(obj).style.display=""; 
		else $(obj).style.display="none"; 
	}
}


//弹出dialog窗口
function MyWin(_url,_width,_height){
	config="dialogWidth:"+_width+"px;dialogHeight:"+_height+"px;status:no;help:no;scroll:no;unadorned:no;"
	showModalDialog(_url,window,config);
}

//显示指定的隐藏元素
function showHideObj(obj,value) {
	
	if (value==1){
		$(obj).style.display="";
	}else{
		$(obj).style.display="none";
	}
}

//为指定对象赋值
function setValue(obj,value){ $(obj).value=value; }

//为指定对象的指定属性赋值
function setObjValue(obj,property,value){ $(obj).property=value; }

//检测是否为数字
function checkNumber(Obj,DescriptionStr)
{
	if (Obj.value!='' && (isNaN(Obj.value) || Obj.value<0))
	{
		alert(DescriptionStr+"应填有效数字！");
		Obj.value="";
		Obj.focus();
	}
}


//多个层之间切换显示
function switchTab(mode,id){
	contentArr=document.getElementsByName(mode+"_content");
	titleArr=document.getElementsByName(mode+"_title");

	for (i=1;i<=titleArr.length;i++){
		if (i==id){
			contentArr[i-1].style.display="";
			titleArr[i-1].className="on";
		}else{
			contentArr[i-1].style.display="none";
			titleArr[i-1].className="";
		}
	}
}

function getDateTime(obj){
	G(obj).innerHTM=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());
	
}

function showDateTime(obj){
	setInterval(getDateTime(obj),1000);
}