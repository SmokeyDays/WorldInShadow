var eventReader = {
	eventStack = [],
	excuteEvent: function(newEvent) {
		
	},
	activeEvent: function() {
		return eventReader.eventStack[0];
	}
}