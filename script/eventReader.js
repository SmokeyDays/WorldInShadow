var eventReader = {
	excuteEvent: function(newEvent) {
		if(typeof newEvent !== 'undefined'){
			showText.printEventBlock(eventList.list[newEvent]);
		}else{
			gameCore.throwNoEventError();
		}
	}
}