var baseFunctions = {
	list: {
		itemAdd: function(functionInfo) {
			if(typeof functionInfo === 'undefined'){
				gameCore.throwNoFunctionInfoError();
				return;
			}
			if(typeof functionInfo.name === 'undefined' || typeof functionInfo.value === 'undefined' || functionInfo.value.length !== functionInfo.name.length){
				gameCore.throwItemListNumberError();
				return;
			}
			for(var X in functionInfo.name)
			characterInfomation.items[functionInfo.name[X]] += functionInfo.value[X];
		}
	}
}