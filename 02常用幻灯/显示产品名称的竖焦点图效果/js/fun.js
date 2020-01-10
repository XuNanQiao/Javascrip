/**************配置开始**************/

//标题 .title
var pushName=["唯一定制","羽毛球拍","阿福猪","猫咪坠","18K卡地亚","爱情环"];
//图片 .image
var pushSrc=["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg"];
//链接 .link
var pushLink=["http://www.lanrentuku.com/","http://www.lanrentuku.com/","http://www.lanrentuku.com/","http://www.lanrentuku.com/","http://www.lanrentuku.com/","http://www.lanrentuku.com/"]
var pushShow="";
var width = '315px';

/**************配置结束**************/


function $(x){
    return document.getElementById(x);
}
rnd.today=new Date(); 
rnd.seed=rnd.today.getTime(); 
function rnd(){ 
	rnd.seed = (rnd.seed*9301+49297) % 233280; 
	return rnd.seed/(233280.0); 
}
function rand(number){ 
	return Math.ceil(rnd()*number)-1; 
}
function showPushLink(num){
	if(!num&&num!=0){
		mainPushNum++;
		if(mainPushNum>5) mainPushNum=0;
		num=mainPushNum;
	}
	for(i=0;i<6;i++){
		$("linkPush"+i).innerHTML="<img src='images/push"+i+".gif'>";
	}
	$("linkPush"+num).className="";
	$("linkPush"+num).innerHTML="<strong class='fontOrange'>"+(num+1)+".</strong>"+pushName[num];
	$("pushImg").src=pushSrc[num];
	$("pushImgLink").href=pushLink[num];
	$("pushImg").alt=pushName[num];
}

function showAtTime(){
	showPushLink();
	rollId=setInterval("showPushLink()",5000);
}

document.write('<DIV class="absolute overflow" id=push style="WIDTH: '+width+';">');
document.write('<DIV id=mainPush></DIV>');
document.write('<DIV id=linkPush style="BACKGROUND: url(images/pushBg.gif); HEIGHT: 43px"></DIV>');
document.write('</DIV>');


//初始化
for(i=0;i<6;i++){
	pushShow+='<a href="'+pushLink[i]+'" onmouseover="showPushLink('+i+');clearInterval(rollId)" id="linkPush'+i+'" target="_blank"><img src="images/push'+i+'.gif"></a>';
}
$("linkPush").innerHTML=pushShow;
var mainPushNum=rand(6);
$("linkPush"+mainPushNum).innerHTML="<strong class='fontOrange'>"+(mainPushNum+1)+".</strong>"+pushName[mainPushNum];
$("mainPush").innerHTML='<a href="'+pushLink[mainPushNum]+'" target="_blank" id="pushImgLink" onmouseover="clearInterval(rollId)" onmouseout="showAtTime()"><img src="'+pushSrc[mainPushNum]+'" name="pushImg" width="315" height="375" id="pushImg" alt="'+pushName[mainPushNum]+'" /></a>';
var rollId=setInterval("showPushLink()",5000);

//懒人图库 搜集整理 www.lanrentuku.com