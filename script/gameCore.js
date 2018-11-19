var gameCore = {
	startGame: function() {
		var oldBody = $('.main-body');
		oldBody.remove();
		showText.init();
		eventList.init();
		characterInfomation.init();
		conditionList.init();
		$("#start-game-option").text("重启游戏");
		eventReader.excuteEvent('first-event');
	},
	throwNoEventError: function() {
		showText.printMessage("Error: 事件不存在。");
	},
	throwNoFunctionError: function() {
		showText.printMessage("Error: 函数不存在。");
	},
	throwNoConditionTypeError: function() {
		showText.printMessage("Error: 指定的条件不存在。");
	},
	throwNoConditionDefineError: function() {
		showText.printMessage("Error: 未指定条件。");
	},
	throwNoConditionInfoError: function() {
		showText.printMessage("Error：未指定合法参数");
	},
	throwItemListNumberError: function() {
		showText.printMessage("Error: 列表的项目不匹配。");
	},
	throwNoAttributeError: function() {
		showText.printMessage("Error: 指定的属性类型不存在。");
	},
	throwNoPointError: function() {
		showText.printMessage("Error: 指定的点数类型不存在。");
	}
}