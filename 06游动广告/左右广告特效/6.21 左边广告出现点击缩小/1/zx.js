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

document.getElementById("lovexin16").style.top=parseInt(document.getElementById("lovexin16").style.top)+percent+"px";
document.getElementById("lovexin18").style.top=parseInt(document.getElementById("lovexin18").style.top)+percent+"px";


lastScrollYy=lastScrollYy+percent; 
//alert(lastScrollY);
}


suspendcode16="<DIV id=\"lovexin16\" style='left:5px;POSITION:absolute;TOP:100px; display:none'><a href=JavaScript:; onclick=\"lovexin16.style.display='none',lovexin18.style.display = 'block'\"><img src=\"1/zxh.gif\" width=\"25\" height=\"270\" /></a></div>"

suspendcode18="<DIV id=\"lovexin18\" style='left:10px;POSITION:absolute;TOP:100px;height:250px;font-size:12px; width:115px; padding-left:13px;line-height:24px;padding-top:2px;'>"
suspendcode18+="<a href=\"http://www.sdzsw.net \" target=\"_blank\"><img src=\"1/zixunhui.gif\"></a>"
suspendcode18+="<span style='width:115px;font-size:12px; height:18px; line-height:18px; float:left;'><a href=JavaScript:; onclick=\"lovexin16.style.display = 'block',lovexin18.style.display = 'none'\"><img src=1/close.gif></a></span>"
suspendcode18+="</div>"

  
document.write(suspendcode16);
document.write(suspendcode18); 
window.setInterval("heartBeatt()",1);


