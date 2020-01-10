/*================================================================
Created:2007-5-29
Copyright:www.Kesion.com  bbs.kesion.com
Version:KesionCMS V6.0
Service QQ：111394,54004407
==================================================================*/

var installdir='/';           //系统安装目录，请正确填写。如安装在kesion目录下，请设为 installdir='/kesion/'
function LabelAjax()
{
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	} else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	} 
	throw new Error("XMLHttp object could be created.");
}
function getlabeltag(){
    var labelItem = document.getElementsByTagName("span"); 
    for(var i=0; i<labelItem.length; i++){
        var obj = labelItem[i];   
		if (typeof(obj.id)!="undefined"&&(obj.id.substring(0,2)=="ks"||obj.id.substring(0,3)=="SQL"))
		{
		  if (obj.id.substring(0,2)=="ks")
		   {
			  var idarr=obj.id.split('_');
			  var labelid=idarr[0].replace("ks","");
			  var typeid=idarr[1];
			  var classid=idarr[2];
			  var infoid=idarr[3];
			  var channelid=idarr[4];
			  try{  
			  getlabelcontent("plus/ajax.asp",obj,labelid,"Label",typeid,channelid,classid,infoid)
			   }catch(e){}
		   }
		   else if (obj.id.substring(0,3)=="SQL")
		   {
			   var p=obj.id.substring(obj.id.indexOf("ksr")+3);
			   var parr=p.split('p');
			   var classid=0;
			   var infoid=0;
			   var channelid=0;
			   if (p!='') 
			   {  infoid=parr[0];
			      classid=parr[1];
			   }
			try{getlabelcontent("plus/ajax.asp",obj,obj.id,"SQL",0,channelid,classid,infoid);   
			 }catch(e){}
		   }
		}
  }
}
function getlabelcontent(posturl,obj,labelid,action,typeid,channelid,classid,infoid)
{ 
  try{
	var ksxhr=new LabelAjax(); 
	var senddata="?action="+action+"&labelid="+escape(labelid)+"&labtype="+typeid+"&channelid=" +channelid+"&classid="+classid+"&infoid="+infoid+getUrlParam();
	ksxhr.open("get",installdir+posturl+senddata,true);
    ksxhr.onreadystatechange=function(){
		  if(ksxhr.readyState==1)
				  {
					obj.innerHTML="<span align='center'><img src='"+installdir+"images/loading.gif'>正在加载数据...</span>";
				  }
				  else if(ksxhr.readyState==2 || ksxhr.readyState==3)
				  {
				   obj.innerHTML="<span align='center'><img src='"+installdir+"images/loading.gif'>正在读取数据...</span>";
				   }
				  else if(ksxhr.readyState==4)
				  {
					  
					 if (ksxhr.status==200)
					 {var s=ksxhr.responseText;
					  obj.innerHTML=s;
					 }
				  }
				}
	ksxhr.send(null);  
  }
  catch(e)
  {}
}
//取url传的参数
function getUrlParam()
{
	var URLParams = new Object() ;
	var aParams = document.location.search.substr(1).split('&') ;//substr(n,m)截取字符从n到m,split('o')以o为标记,分割字符串为数组
	if(aParams!=''&&aParams!=null){
		var sum=new Array(aParams.length);//定义数组
		for (i=0 ; i < aParams.length ; i++) {
		sum[i]=new Array();
		var aParam = aParams[i].split('=') ;//以等号分割
		URLParams[aParam[0]] = aParam[1] ;
		sum[i][0]=aParam[0];
		sum[i][1]=aParam[1];
		}
		var p='';
		for(i=0;i<sum.length;i++)
		{
		  p=p+'&'+sum[i][0]+"="+sum[i][1]
		}
	   return p;
	}else{
	   return "";
	}
}
getlabeltag();


		客服果果=function (id,_top,_left){
		var me=id.charAt?document.getElementById(id):id, d1=document.body, d2=document.documentElement;
		d1.style.height=d2.style.height='100%';me.style.top=_top?_top+'px':0;me.style.left=_left+"px";//[(_left>0?'left':'left')]=_left?Math.abs(_left)+'px':0;
		me.style.position='absolute';
		setInterval(function (){me.style.top=parseInt(me.style.top)+(Math.max(d1.scrollTop,d2.scrollTop)+_top-parseInt(me.style.top))*0.1+'px';},10+parseInt(Math.random()*20));
		return arguments.callee;
		};
		window.onload=function (){
		客服果果
		('xixi',150,-152)
		}
		
		
		lastScrollY=0; 
			var InterTime = 1;
			var maxWidth=-1;
			var minWidth=-152;
			var numInter = 8;
			
			var BigInter ;
			var SmallInter ;
			
			var o =  document.getElementById("xixi");
				var i = parseInt(o.style.left);
				function Big()
				{
					if(parseInt(o.style.left)<maxWidth)
					{
						i = parseInt(o.style.left);
						i += numInter;	
						o.style.left=i+"px";	
						if(i==maxWidth)
							clearInterval(BigInter);
					}
				}
				function toBig()
				{
					clearInterval(SmallInter);
					clearInterval(BigInter);
						BigInter = setInterval(Big,InterTime);
				}
				function Small()
				{
					if(parseInt(o.style.left)>minWidth)
					{
						i = parseInt(o.style.left);
						i -= numInter;
						o.style.left=i+"px";
						
						if(i==minWidth)
							clearInterval(SmallInter);
					}
				}
				function toSmall()
				{
					clearInterval(SmallInter);
					clearInterval(BigInter);
					SmallInter = setInterval(Small,InterTime);
					
				}