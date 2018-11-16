var eventReader = {
	excuteEvent: function(newEvent) {
		if(typeof newEvent !== 'undefined'){
			showText.printEventBlock(eventList.list[0][newEvent]);
		}else{
			gameCore.throwNoEventError();
		}
	}
}