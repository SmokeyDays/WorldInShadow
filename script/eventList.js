/*
这是一个事件的基本样例：

		'youFeelTired': {
			id: "youFeelTired",
			title: "疲惫袭来",
			desc: "你感觉非常疲倦、昏昏欲睡。",
			optionList: [
				{
					id: "haveASleep",
					title: "我必须睡一觉了。",
					desc: "尝试睡一觉来恢复体力。",
					eventList: [
						'haveASleep'
					]
				},
				{
					id: "continueWorking",
					title: "战斗，战斗，时刻战斗着，我是奇迹的创造者！",
					desc: "继续爆肝！"
				}
			]
		},
		'haveASleep': {
			id: "haveASleep",
			title: "睡一觉吧",
			desc: "我好困啊，该睡觉了。",
			optionList: [
				{
					id: "AGoodSleep",
					title: "做个好梦。",
					desc: "你进入了梦乡。"
				}
			]
		}
*/
var eventList = {
	list: {},
	init: function() {
		list = $.extend(
			this.list,
			startEvent,
			testEvent
		);
	}
};

