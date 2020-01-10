var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
//Iterate over the current set of matched elements
	var _titles = $("ul.slide-txt li");
	var _titles_bg = $("ul.op li");
	var _bodies = $("ul.slide-pic li");
	var _count = _titles.length;
	var _current = 0;
	var _intervalID = null;
	var stop = function() { window.clearInterval(_intervalID); };
	var slide = function(opts) {
		if (opts) {
			_current = opts.current || 0;
		} else {
			_current = (_current >= (_count - 1)) ? 0 : (++_current);
		};
		_bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function() {
			_bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
			_bodies.removeClass("cur").eq(_current).addClass("cur");
		});
		_titles.removeClass("cur").eq(_current).addClass("cur");
		_titles_bg.removeClass("cur").eq(_current).addClass("cur");
	}; //endof slide
	var go = function() {
		stop();
		_intervalID = window.setInterval(function() { slide(); }, defaultOpts.interval);
	}; //endof go
	var itemMouseOver = function(target, items) {
		stop();
		var i = $.inArray(target, items);
		slide({ current: i });
	}; //endof itemMouseOver
	_titles.hover(function() { if($(this).attr('class')!='cur'){itemMouseOver(this, _titles); }else{stop();}}, go);
	//_titles_bg.hover(function() { itemMouseOver(this, _titles_bg); }, go);
	_bodies.hover(stop, go);
	//trigger the slidebox
	go();
	

function getCookie(name){
var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
if(arr != null) return unescape(arr[2]); return null;
}
var cookieVal=getCookie('mhp');
if(cookieVal==null){
	window.open('http://www.m18.com/static/hp/hp_pop.html','popvote','width=500,height=340,top=260,left=50');
	}


function f_RegisterEMail() {
    if (($(".email").val() == "输入您的电子邮箱地址") || ($(".email").val().length == 0)) {
        alert("EMail格式不正确");
        return;
    }

    if (!f_CheckEMail($(".email").val())) {
        window.alert("EMail格式不正确");
        $(".email").focus(function(){
			$(".email").val('')
		});
        $(".email").select();
        return;
    }
    window.open("http://www.m18.com/Contact/ContactEMailList.aspx?EMail=" + $(".email").val());
}


function f_ClearRegisterEMail() {
    if ($(".email").val() == "输入您的电子邮箱地址") {
        $(".email").val('');
    }
}

function f_CheckEMail(email) {

    if (email == null || email.length == 0)
        return true;
    if (email.indexOf(' ') >= 0)
        return false;
    var reg = /([-])?\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
    var result = email.match(reg);
    if (result == null)
        return false;
    if (result[0] != email)
        return false;
    return true;
}

$(document).ready(function() {
	$(".email").focus(function(){
			$(".email").val('')
			.css("color","#333");
		})
		.blur(function(){
					   $(".email").css("color","#CCC");
					   })
		.css("color","#CCC");
		
    $("input.sbt").click(function() {
		f_RegisterEMail();
    })
});
var slideX={
	thisUl:$('#catalog ul.imgbox'),
	btnLeft:$('#catalog a.left'),
	btnRight:$('#catalog a.right'),
	thisLi:$('#catalog ul.imgbox li'),
	init:function(){
		slideX.thisUl.width(slideX.thisLi.length*119);
		slideX.slideAuto();
		slideX.btnLeft.click(slideX.slideLeft).hover(slideX.slideStop,slideX.slideAuto);
		slideX.btnRight.click(slideX.slideRight).hover(slideX.slideStop,slideX.slideAuto);
		slideX.thisUl.hover(slideX.slideStop,slideX.slideAuto);
		},
	slideLeft:function(){
		slideX.btnLeft.unbind('click',slideX.slideLeft);
		slideX.thisUl.find('li:last').prependTo(slideX.thisUl);
		slideX.thisUl.css('marginLeft',-119);
		slideX.thisUl.animate({'marginLeft':0},350,function(){
			slideX.btnLeft.bind('click',slideX.slideLeft);
			});
		return false;
		},
	slideRight:function(){
		slideX.btnRight.unbind('click',slideX.slideRight);
		slideX.thisUl.animate({'marginLeft':-119},350,function(){
			slideX.thisUl.css('marginLeft','0');
			slideX.thisUl.find('li:first').appendTo(slideX.thisUl);
			slideX.btnRight.bind('click',slideX.slideRight);
			});
		return false;
		},
	slideAuto:function(){
		slideX.intervalId=window.setInterval(slideX.slideRight,3000);
		},
	slideStop:function(){
		window.clearInterval(slideX.intervalId);
		}
	}
$(document).ready(function(){
	slideX.init();
})

$('#jbrand .bnav li').mouseover(function(){
		var tabIndex=$('#jbrand .bnav li').index(this);
		$(this).addClass('cur').siblings().removeClass('cur');
		$('#jbrand .hpb').removeClass('cur').eq(tabIndex).addClass('cur').find('.listb li').eq(0).trigger('mouseover');
	});
$('#jbrand .listb li').mouseover(function(){
		var isrc=$(this).attr('loadsrc');
		var ihref=$(this).find('a').attr('href');
		$(this).parent().prev().find('img').attr('src',isrc).end().find('a').attr('href',ihref);
		$('#jbrand .listb .brand-ico').removeClass('hc');
		$(this).addClass('hover').siblings().removeClass('hover').end().find('.brand-ico').addClass('hc');
	});
$('#jbrand .listb li').mouseover(function(){$(this).addClass('hover').find('.brand-ico').addClass('hc');},function(){$(this).removeClass('hover').find('.brand-ico').removeClass('hc');});
