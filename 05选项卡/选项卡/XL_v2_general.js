
/* 插件-选项卡 J_secTabs */
$(function(){$(".J_secTabs").each(function(){var timeout=200;var delay=0;var a=$(this).find("li"),b=$(this).next().children("div");a.hover(function(){var obj=$(this);item_show(obj)},function(){item_hide()});a.click(function(){var obj=$(this);item_action(obj)});function item_action(obj){a.removeClass("selected");obj.addClass("selected");var i=a.index(obj);b.hide();$(b.get(i)).show()}function item_show(obj){clearTimeout(delay);delay=setTimeout(function(){item_action(obj);clearTimeout(delay)},timeout)}function item_hide(){clearTimeout(delay)}})});





