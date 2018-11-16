var startEvent = { list: [
	{
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
		},
		'before-findDrink': {
			id: "before-findDrink",
			title: "口渴难耐",
			desc: "你感到口渴难耐，你需要寻找可以喝的东西。",
			logs: "你感到口渴难耐。",
			optionList: [
				{
					id: "toFindDrink",
					title: "我应该寻找解渴的方法。",
					desc: "你开始思考用哪些方法可以找到水。",
					logs: "你开始思考用哪些方法可以找到水。",
					eventList: [
						'findDrink'
					]
				}
			]
		},
		'findDrink': {
			id: "findDrink",
			title: "试图解渴",
			desc: "你观察四周，有了几个解渴的方法。",
			logs: "你找到了几种解渴的方案。",
			optionList: [
				{
					id: "tryWaterOnLeaf",
					title: "可能树上的露珠可以解渴。",
					desc: "你决定舔一舔树上的露珠。",
					logs: "你决定试试树上的露珠。",
					eventList: [
						'findDrink-tryWaterOnLeaf'
					]
				},
				{
					id: "tryFruits",
					title: "找一找周围有什么可口的水果。",
					desc: "试试旁边的浆果。",
					logs: "你决定找找周围有什么可以解渴的水果。",
					eventList: [
						'findDrink-tryFruits'
					]
				},
				{
					id: "tryWetDirt",
					title: "泥土比较潮湿，也许掘地三尺会有地下水。",
					desc: "你尝试着挖一个坑。",
					logs: "你尝试挖一个坑来寻找地下水。"
				},
				{
					id: "observeAround",
					title: "还是先观察一下四周吧。",
					desc: "观察周围的情况。",
					logs: "你决定在解渴之前先弄清楚现在自己所处的状况。"
				}
			]
		},
		'findDrink-tryWaterOnLeaf': {
			id: "findDrink-tryWaterOnLeaf",
			title: "垂緌饮清露",
			desc: "你尝试舔了舔树上的露珠，发现完全没有想象中那么好喝，甚至有一种苦味。不过口干难忍得以暂时缓解。",
			logs: "露珠可以润喉，但是那个奇怪的味道实在是让人难以忍受。",
			optionList: [
				{
					id: "findDrink",
					title: "但是还是觉得有点渴啊，要不要试试其他方法吧。",
					desc: "再找找其他的寻找水源的方式。",
					logs: "你还是感到有点口渴。",
					eventList: [
						'findDrink'
					]
				}
			]
		},
		'findDrink-tryFruits': {
			id: "findDrink-tryFruits",
			title: "水灵灵的浆果",
			desc: "你看到了旁边有一棵树，树上有一些看起来水灵灵的浆果，你在想要不要去摘上面的浆果。",
			logs: "你找到了一棵长满了浆果的树。浆果水灵灵的，看上去似乎可以补充很多水分。",
			optionList: [
				{
					id: "tryTheFruit",
					title: "那就试着去摘它吧。",
					desc: "尝试爬上树去摘浆果。",
					
				},
				{
					id: "findOtherFruits",
					title: "还是找找周围有什么其他水果吧。",
					desc: "尝试去寻找浆果之外的其他水果。"
					
				},
				{
					id: "findDrink",
					title: "试试其他方法。",
					desc: "尝试其他可以解渴的方法。",
					logs: "你决定试试其他可以解渴的方法。",
					eventList: [
						'findDrink'
					]
				}
			]
		}
	}
]}