

//һ����ͳ���һ����������ʾ�������Լ����壡
function help()
{
    var helpmess;
    helpmess="---------------��д����---------------\r\n\r\n"+
         "1.�벻Ҫ������Σ���ԵĽű���\r\n\r\n"+
         "2.���Ҫ��дԴ���룬��ѡ��\r\n\r\n"+
         "���鿴HTMLԴ������д.\r\n\r\n"+
         "3.��Ҫ���Լ�����,���ܿ�Ч��.\r\n\r\n"+
         "4.�����дjs��������Ҫ�������д.\r\n\r\n";
    alert(helpmess);
}

//��ĳ�����ڵ���ʽ�򿪻����ж��ִ���������ҳ
function MyWin(url,target) { 
	var iWidth=527; 
	var iHeight=406; 
	var iTop=(window.screen.height-iHeight)/2; 
	var iLeft=(window.screen.width-iWidth)/2; 
	window.open(url,target,"Scrollbars=no,Toolbar=no,Location=no,Direction=no,Resizeable=no, Width="+iWidth+" ,Height="+iHeight+",top="+iTop+",left="+iLeft); 
} 

//��ĳ�����ڵ���ʽ��һ��ִ���������ҳ
function winopen(url)
{
 window.open(url,'','top=100,left=200,width=500,height=400,toolbar=no,menubar=no,scrollbars=no, resizable=no');
}
var isIE=navigator.appName.indexOf("Explorer") > -1;

//���ָ���Ķ���
function $(obj){ return document.getElementById(obj); }
function G(obj){ return document.getElementById(obj); }

//���ָ���Ķ����ǩ�е�����
function getElementText(obj){
	var text = "";
	if(isIE){
		text = G(obj).innerText;
	} else{
		text = G(obj).textContent;
	}
	return text;

}

//���ָ���Ķ����ǩ�е�����
function getElementText(obj){
	var text = "";

	text = G(obj).innerHTML;
	return text;
}

//ȥ���ַ���ǰ��Ŀհ�
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


//Ajaxͨ����
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

//ִ��GET�����ĵ���
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


//ִ��POST��ʽ�ĵ���
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

//���ָ��Cookie����ֵ
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

//js���Ӻ����������ڴ�
function link(url){ window.location=url;}

//��ʾָ������
function showObj(obj){

	if($(obj)) $(obj).style.display="";
}

//����ָ������
function hideObj(obj){

	if($(obj)) $(obj).style.display="none";
}

//�л����� ��ʾ/����
function switchDiv(obj){

	if($(obj)){

		if ($(obj).style.display=="none") $(obj).style.display=""; 
		else $(obj).style.display="none"; 
	}
}


//����dialog����
function MyWin(_url,_width,_height){
	config="dialogWidth:"+_width+"px;dialogHeight:"+_height+"px;status:no;help:no;scroll:no;unadorned:no;"
	showModalDialog(_url,window,config);
}

//��ʾָ��������Ԫ��
function showHideObj(obj,value) {
	
	if (value==1){
		$(obj).style.display="";
	}else{
		$(obj).style.display="none";
	}
}

//Ϊָ������ֵ
function setValue(obj,value){ $(obj).value=value; }

//Ϊָ�������ָ�����Ը�ֵ
function setObjValue(obj,property,value){ $(obj).property=value; }

//����Ƿ�Ϊ����
function checkNumber(Obj,DescriptionStr)
{
	if (Obj.value!='' && (isNaN(Obj.value) || Obj.value<0))
	{
		alert(DescriptionStr+"Ӧ����Ч���֣�");
		Obj.value="";
		Obj.focus();
	}
}


//�����֮���л���ʾ
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
	G(obj).innerHTM=new Date().toLocaleString()+' ����'+'��һ����������'.charAt(new Date().getDay());
	
}

function showDateTime(obj){
	setInterval(getDateTime(obj),1000);
}