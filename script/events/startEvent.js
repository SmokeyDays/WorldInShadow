var startEvent = {
	'first-event': {
		id: "first-event",
		title: "这是哪儿？",
		desc: "四周是茂盛的森林。潮湿的空气钻入你的鼻孔，你感觉到了腐烂的气味。意识逐渐清晰起来……",
		logs: "周围的森林很茂密。",
		optionList: [
			{
				id: "before-findDrink",
				title: "我的嘴巴就像被烤过了一样，",
				desc: "你感觉到非常口渴。",
				logs: "意识逐渐清晰。",
				eventList: [
					'before-findDrink'
				]
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
				logs: "你尝试挖一个坑来寻找地下水。",
				eventList: [
					'findDrink-tryBuildWells'
				]
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
				logs: "你尝试爬树，体会到了当猴子的快感。"
			},
			{
				id: "findOtherFruits",
				title: "还是找找周围有什么其他水果吧。",
				desc: "尝试去寻找浆果之外的其他水果。",
				logs: "你试图去寻找其他水果。"
				
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
	},
	'findDrink-tryBuildWells': {
		id: "findDrink-tryBuildWells",
		title: "浑浊的井水",
		desc: "你挖开了约一米深的圆锥形水坑，但是由于你没有办法固定坑壁松软的泥土，所以水和泥土一起落到了水坑中。",
		logs: "你徒手刨出了一个坑，你累并快乐着。",
		optionList: [
			{
				id: "drinkDirectly",
				title: "算了，吃土就吃土，不碍事，将就着喝吧。",
				desc: "真的猛士敢于饮下浑浊的泥浆！",
				logs: "你勇敢的喝下了这看起来很浑浊的水。"
				
			},
			{
				id: "findStones",
				title: "有点脏啊，去周围看看有没有可以固定坑壁的石料吧。",
				desc: "尝试去寻找石料。",
				logs: "你决定去寻找一些适合的石料。"
				
			},
			{
				id: "buildWells",
				title: "我想可以用收集到的一些东西固定一下。",
				desc: "在当前位置建一口井。",
				logs: "水井里的水终于不是那么浑浊了。",
			},
			{
				id: "findDrink",
				title: "这水一看就不能喝，还是试试其他方法吧。",
				desc: "尝试其他可以解渴的方法。",
				logs: "你决定试试其他可以解渴的方法。",
				eventList: [
					'findDrink'
				]
			}
		]
	}
}
