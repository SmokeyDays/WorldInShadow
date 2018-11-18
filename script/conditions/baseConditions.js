var baseConditions = {
	list: {
		or: function(conditions) {
			var orRT=false;
			for(var X in conditions.info){
				if(judgeConditions.judge(conditions.info[X])){
					orRT=true;
				}
			}
			return orRT;
		},
		and: function(conditions) {
			var andRT=true;
			for(var X in conditions.info){
				if(!judgeConditions.judge(conditions.info[X])){
					andRT=false;
				}
			}
			return andRT;
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
			var attrRT = true;
			for(var X in conditions.name){
				if(typeof characterInfomation.attribute[conditions.name] === 'undefined'){
					gameCore.throwNoAttributeError();
				}
				if(!(characterInfomation.attribute[conditions.name[X]] > conditions.value[X])){
					attrRT = false;
				}
				
			}
			return attrRT;
		}
	}
}