var judgeConditions = {
	/*
	conditions: 传入一个条件，返回一个布尔值。
		type: Function,指定特殊的判定方式。
			 - not 指定一个函数，返回这个函数的相反值。
			 - and 指定一系列的判定列表，返回这个列表的值的与和。
			 - or 指定一系列的判定列表，返回这个列表的值的或和。
			 
			 - item 指定两个列表，物品名称和数量。如果物品数量均满足，返回true，否则false.
			 - attr 提供两个列表，属性名称和数量。如果属性数量均满足，返回true，否则false。
		info: 提供判定的信息。
	*/
	judge: function(conditions){
		if(typeof conditions === 'undefined'){
			gameCore.throwNoConditionDefineError();
			return;
		}
		if(typeof conditionList.list[conditions.type] === 'undefined'){
			gameCore.throwNoConditionTypeError(conditions.type);
			return;
		}
		return conditionList.list[conditions.type](conditions.info);
	}
}