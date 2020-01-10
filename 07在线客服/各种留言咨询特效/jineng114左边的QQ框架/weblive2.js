

	//leftfu.style.visibility='hidden'; 
	//sorollDiv1.style.visibility='hidden';
	var lastScrollY=0;
	var setup=0.02
	function heartBeat(){ 
		diffY=document.documentElement.scrollTop; 
		percent=setup*(diffY-lastScrollY); 
		if(percent>0)percent=Math.ceil(percent); 
		else percent=Math.floor(percent); 
		document.getElementById("leftfu").style.top=parseInt(document.getElementById("leftfu").style.top)+percent+"px";
		lastScrollY=lastScrollY+percent; 
	}
	window.setInterval("heartBeat()",1);
	
	
function divclose(name){
		document.getElementById(name).style.visibility='hidden';
}	


function showqqdivover(i)
{
document.getElementById("showqq"+i).style.display="block";
}

function showqqdivout(i)
{
document.getElementById("showqq"+i).style.display="none";
}
 
 
 
function showleftmenuover(id)
{
	document.getElementById("showleftmenu_"+id).style.display="block";
}
 
function showleftmenuout(id)
{
	document.getElementById("showleftmenu_"+id).style.display="none";
}
 
//这里去掉了右边游动脚本的不少函数！！！！！

