// JavaScript Document
var newFocus_01 = new ScrollPic();
newFocus_01.scrollContId   = "scrollFocus"; //内容容器ID
newFocus_01.arrLeftId      = "newFocusArrL";//左箭头ID
newFocus_01.arrRightId     = "newFocusArrR"; //右箭头ID
newFocus_01.dotListId      = "";//点列表ID
newFocus_01.dotClassName   = "";//点className
newFocus_01.dotOnClassName	= "";//当前点className
newFocus_01.listType		= "";//列表类型(number:数字，其它为空)
newFocus_01.listEvent      = "onclick"; //切换事件
newFocus_01.frameWidth     = 950;//显示框宽度 **显示框宽度必须是翻页宽度的倍数
newFocus_01.pageWidth      = 950; //翻页宽度
newFocus_01.upright        = false; //垂直滚动
newFocus_01.speed          = 5; //移动速度(单位毫秒，越小越快)
newFocus_01.space          = 100; //每次移动像素(单位px，越大越快)
newFocus_01.autoPlay       = true; //自动播放
newFocus_01.autoPlayTime   = 10; //自动播放间隔时间(秒)
newFocus_01.initialize();