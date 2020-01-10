$(function(){
if($.browser.msie&&$.browser.version==6){
$('#hd-nav>li>a').hover(function(){$(this).next('div').show().append('<iframe id="selectMask" style="width:100%;position:absolute;top:5px;left:0;z-index:-1;" frameborder="0"></iframe>');$('#selectMask').height($(this).next('div').height()-5);},function(){$(this).next('div').hide().find('iframe').remove();});
$('#hd-nav>li>a').next('div').hover(function(){$(this).show().append('<iframe id="selectMask" style="width:100%;position:absolute;top:5px;left:0;z-index:-1;" frameborder="0"></iframe>');$('#selectMask').height($(this).height()-5);$(this).prev('a').addClass('cur');},function(){$(this).hide().find('iframe').remove();$(this).prev('a').removeClass('cur');}); 
}
$('#hd-nav>li>a').hover(function(){$(this).next('div').show();},function(){$(this).next('div').hide();});
$('#hd-nav>li>a').next('div').hover(function(){$(this).show();$(this).prev('a').addClass('cur');},function(){$(this).hide();$(this).prev('a').removeClass('cur');}); 
});
$(function(){
	$("#hd li.my-page").hover(function(){
		$(this).children("ul").show();	
		$(this).addClass("hover bg-none");
		$(this).next().addClass("bg-none");
		$(this).css({paddingLeft:"10px",paddingRight:"10px",marginTop:"-1px"});
		}, function(){
		$(this).children("ul").hide();	
		$(this).removeClass("hover bg-none");
		$(this).next().removeClass("bg-none");
		$(this).css({paddingLeft:"11px",paddingRight:"11px",marginTop:"0px"});
		});
});
$(function(){
var $hdText=$('#hd-sr .hd-text');
$hdText.val('女装T恤');
$hdText.focus(function(){
	$(this).select();
	$(this).removeClass('lower');
	if($(this).val()==this.defaultValue){
		$(this).val('');
		}
	}).blur(function(){
		if($(this).val()==''){
			$(this).addClass('lower').val(this.defaultValue);
			}
		});
$('#hd-sr form:first').submit(function(){
	if($hdText.val()==$hdText[0].defaultValue||$hdText.val()==''){
		return false;
		}
	});
});
$(function(){
	$("#help2").find("dl").hover(function(){
	$(this).addClass("cur");					   
	},
	function(){
	$(this).removeClass("cur");
	});	
});