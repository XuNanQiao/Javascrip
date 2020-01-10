/* 组件-侧边栏-学历类型指南-折叠 */
$(function(){
	var a = $("#J_c-siderEduGuide-mini");
	var b = a.children(".hd").find("li"), c = a.children(".ctn"), d = a.children(".ctn").children();
	var timeout = 200;
	var delay = 0;

	a.hover(function(){ ctn_show(); },function(){ ctn_hide(); });
	b.hover(function(){ var obj = $(this); ctn_change(obj); });
	
	function ctn_show(){
		clearTimeout(delay);
		delay = setTimeout(function(){
			c.show();
			clearTimeout(delay);
		},timeout);
	};
	function ctn_hide(){
		clearTimeout(delay);
		b.removeClass("selected");
		c.hide();
	};
	function ctn_change(obj){
		d.show();
		b.removeClass("selected");
		obj.addClass("selected");
		var i = b.index(obj); 
		d.hide();  
		$(d.get(i)).show();  
	};

});
