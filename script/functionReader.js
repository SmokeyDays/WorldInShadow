var functionReader = {
	/*
	functions: 传入一串函数，表示某个选项随之执行的函数。
		type: String,指定特殊的判定方式。
			 - itemAdd 指定两个列表，物品名称和数量，使得指定的物品名称和数量均加上给定值。
			 - attrAdd 指定两个列表，属性名称和数量，使得指定的属性名称和数量均加上给定值。
			 - attrAdd 指定两个列表，属性名称和数量，使得指定的属性名称和数量均加上给定值。
			 - not 指定一个函数，返回这个函数的相反值。
			 - and 指定一系列的判定列表，返回这个列表的值的与和。
			 - or 指定一系列的判定列表，返回这个列表的值的或和。
		info: 提供判定的信息。
	*/
	excuteFunction: function(functions){
		if(typeof functions === 'undefined'){
			gameCore.throwNoFunctionDefineError();
			return;
		}
		if(typeof functionList.list[functions.type] === 'undefined'){
			gameCore.throwNoFunctionError(functions.type);
			return;
		}
		return functionList.list[functions.type](functions.info);
	}
}