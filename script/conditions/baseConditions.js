var baseConditions = {
	list: {
		or: function(conditions) {
			for(var X in conditions.info){
				if(judgeConditions.judge(conditions.info[X])){
					return true;
				}
			}
			return false;
		},
		and: function(conditions) {
			for(var X in conditions.info){
				if(!judgeConditions.judge(conditions.info[X])){
					return false;
				}
			}
			return true;
		},
		not: function(conditions){
			return !judgeConditions.judge(conditions.info);
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
			return attrRT;
		}
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
					return false;
				}
				if(!(characterInfomation.point[conditions.name[X]] > conditions.value[X])){
					return false;
				}
			}
			return true;
		}
	}
}