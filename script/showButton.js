var showButton = {
	/*
	type buttonOptions:
	id: String,选项的id。**
	title: String,选项显示的文字。
	desc: String,选项悬停时显示的提示。**
	eventList: Function args,选项执行的时间列表。
	functionList: Function args,选项执行的函数列表。
	
	*/
	printEventButton: function(buttonOptions){
		var eventOption = $('<div>')
		.addClass('event-option')
		.addClass('event-option-shadow')
		.click(function() {
			if(!$(this).hasClass('event-option-disabled')) {
				if(typeof $(this).data('handlerNumber') !== 'undefined'){
					for(var X=0;X<'handlerNumber';++X){
						$(this).data("handler_"+X);
					}
				}
				if(typeof $(this).data('eventNumber') !== 'undefined'){
					for(var X=0;X<'eventNumber';++X){
						eventReader.excuteEvent($(this).data("event_"+X));
					}
				}
			}
			var eventBlock = $(this).parent();
			eventBlock.animate({opacity: 0 },500,'linear',function() {eventBlock.remove()});
		})
		.text(buttonOptions.title);
		if(typeof buttonOptions.functionList !== 'undefined'){
			if(buttonOptions.functionList.length > 0){
				for(var X in buttonOptions.functionList){
					eventOption.data("handler_"+X,
					typeof buttonOptions.functionList[X] === 'function' ?
					buttonOptions.functionList[X] :
					function() {gameCore.throwNoFunctionError()
					});
				}
				eventOption.data('handlerNumber',buttonOptions.functionList.length);
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
				}
				eventOption.data('eventNumber',buttonOptions.eventList.length);
			}
		}
		return eventOption;
	}
}