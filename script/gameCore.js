var gameCore = {
	startGame: function() {
		var oldBody = $('.main-body');
		oldBody.remove();
		showText.init();
		eventList.init();
		characterInfomation.init();
		$("#start-game-option").text("重启游戏");
		eventReader.excuteEvent('first-event');
	},
	throwNoEventError: function() {
		showText.printMessage("Error: 事件不存在。");
	},
	throwNoFunctionError: function() {
		showText.printMessage("Error: 函数不存在。");
	}
}
