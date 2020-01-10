(function($){
	var imag=[];
	var link=[];
	var text=[];

  	imag[0]=encodeURIComponent("images/1.jpg");
	link[0]=encodeURIComponent("http://www.lanrentuku.com");
	text[0]="¿¡»ÀÕºø‚";
  	imag[1]=encodeURIComponent("images/2.jpg");
	link[1]=encodeURIComponent("http://www.lanrentuku.com");
	text[1]="¿¡»ÀÕºø‚";
  	imag[2]=encodeURIComponent("images/3.jpg");
	link[2]=encodeURIComponent("http://www.lanrentuku.com");
	text[2]="¿¡»ÀÕºø‚";
  	imag[3]=encodeURIComponent("images/4.jpg");
	link[3]=encodeURIComponent("http://www.lanrentuku.com");
	text[3]="¿¡»ÀÕºø‚";
 
	if(imag.length < 4){
	    for(var i=imag.length;i<4;i++){
          	imag[i]="images/ad.jpg";
        	link[i]=encodeURIComponent("/");
        	text[i]="¿¡»ÀÕºø‚";
	    }
	}
 	var pic_width=550;
	var pic_height=228;
	var stop_time=6000;
    makeSWF('FrontPageFocusShower','focus.swf',{
		FlashVars : 'pics='+imag.join('|')+'&links='+link.join('|')+'&texts='+text.join('|')+'&stop_time='+stop_time+'',
		wmode: 'opaque',
		scale: 'noScale',
		quality: 'high',
		width : pic_width,
		height : pic_height
	});
})($);