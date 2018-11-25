var showButton = {
	/*
	type buttonOptions:
	id: String,选项的id。**
	title: String,选项显示的文字。
	desc: String,选项悬停时显示的提示。**
	logs: String,选项点击后输出到日志区的文字。
	eventList: Function args,选项执行的时间列表。
	functionList: Function args,选项执行的函数列表。
	conditionList: 选项显示需要的条件列表。
	conditionEventList: 某个事件需要的条件列表。
	*/
	printEventButton: function(buttonOptions){
		if(typeof buttonOptions.conditionList !== 'undefined'){
			for(var X in buttonOptions.conditionList){
				if(!judgeConditions.judge(buttonOptions.conditionList[X])){
					return;
				}
			}
		}
		var eventOption = $('<div>'+buttonOptions.title+'</div>')
		.addClass('event-option')
		.addClass('event-option-shadow')
		if(typeof buttonOptions.functionList !== 'undefined'){
			if(buttonOptions.functionList.length > 0){
				for(var X in buttonOptions.functionList){
					eventOption.data("function_"+X,
					typeof buttonOptions.functionList[X] !== 'undefined' ?
					buttonOptions.functionList[X] :
					function() {gameCore.throwNoFunctionError()
					});
					if(gameCore.DEBUG_MODE){
						showText.printMessage("函数类型"+buttonOptions.functionList[X].type+"成功添加");
					}
				}
				eventOption.data('functionNumber',buttonOptions.functionList.length);
				if(gameCore.DEBUG_MODE){
					showText.printMessage("共加载了"+eventOption.data('functionNumber')+"个函数")
				}
			}
		}
		if(typeof buttonOptions.eventList !== 'undefined'){
			if(buttonOptions.eventList.length > 0){
				for(var X in buttonOptions.eventList){
					eventOption.data("event_"+X,
					typeof buttonOptions.eventList[X] === 'string' ?
					buttonOptions.eventList[X] :
					function() {gameCore.throwNoEventError()
					});
					eventOption.data("eventCondition_"+X,
					(typeof buttonOptions.conditionEventList !=='undefined'&&typeof buttonOptions.conditionEventList[X] !=='undefined') ?
					buttonOptions.conditionEventList[X] :
					true
					);
				}
				eventOption.data('eventNumber',buttonOptions.eventList.length);
			}
		}
		eventOption.click(function() {
			if(!$(this).hasClass('event-option-disabled')) {
				var eventBlock = $(this).parent();
				eventBlock.animate({opacity: 0 },500,'linear',function() {
					eventBlock.detach();
					if(typeof buttonOptions.logs !== 'undefined'){
						showText.printMessage(buttonOptions.logs);
					}
					if(typeof eventOption.data('handlerNumber') !== 'undefined'){
						for(var X=0;X<eventOption.data('handlerNumber');++X){
							eventOption.data("handler_"+X);
						}
					}
					if(typeof eventOption.data('eventNumber') !== 'undefined'){
						for(var X=0;X<eventOption.data('eventNumber');++X){
							if((typeof eventOption.data("eventCondition_"+X) === 'boolean')?
							eventOption.data("eventCondition_"+X) :
							judgeConditions.judge(eventOption.data("eventCondition_"+X))){
								eventReader.excuteEvent(eventOption.data("event_"+X));
							}
						}
					}
					if(typeof eventOption.data('functionNumber') !== 'undefined'){
						console.log("加载了",eventOption.data('functionNumber'),"个事件。");
						for(var X=0;X<eventOption.data('functionNumber');++X){
							functionReader.excuteFunction(eventOption.data("function_"+X));
						}
					}
					eventBlock.remove();
				});
				
			}
		});
		if(typeof buttonOptions.desc !== 'undefined'){
			var eventOptionDescription = $('<div>'+buttonOptions.desc+'<div>')
			.addClass('event-option-desc')
			.appendTo(eventOption);
		}
		return eventOption;
	}
}