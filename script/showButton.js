var showButton = {
	/*
	type buttonOptions:
	id: String,选项的id。**
	title: String,选项显示的文字。
	desc: String,选项悬停时显示的提示。**
	eventList: Function args,选项执行的事件列表。**
	*/
	printEventButton: function(buttonOptions){
		var eventOption = $('<div>')
		.addClass('event-option')
		.addClass('event-option-shadow')
		.click(function() {
			if(!$(this).hasClass('event-option-disabled')) {
				if(typeof $(this)
			}
		})
		.text(buttonOptions.title);
		if(typeof buttonOptions.eventList != 'undefined'){
			if(buttonOptions.eventList.length > 0){
				for(var X in buttonOptions.eventList){
					eventOption.data("handler_"+X,
					typeof buttonOptions.eventList[X] === 'function' ?
					buttonOptions.eventList[X] :
					function() {gameCore.throwNoFunctionError()
					});
				}
				eventOption.data("handlerNumber")
			}
		}
		return eventOption;
	}
}