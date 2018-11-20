var baseConditions = {
	list: {
		always: function(conditions) {
			return true;
		},
		or: function(conditions) {
			if(typeof conditions === 'undefined'){
				gameCore.throwNoConditionInfoError();
				return;
			}
			for(var X in conditions){
				if(judgeConditions.judge(conditions[X])){
					return true;
				}
			}
			return false;
		},
		and: function(conditions) {
			if(typeof conditions === 'undefined'){
				gameCore.throwNoConditionInfoError();
				return;
			}
			for(var X in conditions){
				if(!judgeConditions.judge(conditions[X])){
					return false;
				}
			}
			return true;
		},
		not: function(conditions){
			return !judgeConditions.judge(conditions);
		},
		attr: function(conditions){
			if(typeof conditions.name === 'undefined'||typeof conditions.value === 'undefined'||conditions.name.length === 0){
				gameCore.throwNoConditionInfoError();
				return;
			}
			if(conditions.name.length !== conditions.value.length){
				gameCore.throwItemListNumberError();
				return;
			}
			for(var X in conditions.name){
				if(typeof characterInfomation.attribute[conditions.name] === 'undefined'){
					gameCore.throwNoAttributeError();
				}
				if(!(characterInfomation.attribute[conditions.name[X]] > conditions.value[X])){
					return false;
				}
				
			}
			return true;
		},
		point: function(conditions){
			if(typeof conditions.name === 'undefined'||typeof conditions.value === 'undefined'||conditions.name.length === 0){
				gameCore.throwNoConditionInfoError();
				return;
			}
			if(conditions.name.length !== conditions.value.length){
				gameCore.throwItemListNumberError();
				return;
			}
			for(var X in conditions.name){
				if(typeof characterInfomation.point[conditions.name] === 'undefined'){
					gameCore.throwNoPointError();
				}
				if(!(characterInfomation.point[conditions.name[X]] > conditions.value[X])){
					return false;
				}
			}
			return true;
		},
		item: function(conditions){
			if(typeof conditions.name === 'undefined'||typeof conditions.value === 'undefined'||conditions.name.length === 0){
				gameCore.throwNoConditionInfoError();
				return;
			}
			if(conditions.name.length !== conditions.value.length){
				gameCore.throwItemListNumberError();
				return;
			}
			for(var X in conditions.name){
				if(typeof characterInfomation.item[conditions.name] === 'undefined'){
					return false;
				}
				if(!(characterInfomation.item[conditions.name[X]] > conditions.value[X])){
					return false;
				}
			}
			return true;
		}
	}
}