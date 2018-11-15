var showText = {
	clearHidden: function() {
		var bottom = $('.main-body-command').position().top + $('.main-body-command').outerHeight(true);
		$('.main-body-command').each(function() {
			if($(this).position().top > bottom){
				$(this).remove();
			}
		});
	},
	
	printMessage: function(message){
		var text = $('<div>').addClass('message-text').addClass('main-text-type').css('opacity', '0').text(message).prependTo('div#message-box');
		text.animate({opacity: 0.8}, 500, 'linear', function() {
			showText.clearHidden();
		});
		text.removeAttr('style');
	},
	/*
	type: eventOptions:
	id: String,事件的id。**
	title: String,事件的标题。
	desc: String,事件的描述。
	optionList: String arg[],事件的选项列表。**
	*/
	printEventBlock: function(eventOptions) {
		var eventBlock = $('<div>').addClass('event-block').css('opacity','0').prependTo('div#event-box');
		if(typeof eventOptions.optionList !== 'undefined'){
			for(var X in eventOptions.optionList){
				var nowOption = new showButton.printEventButton(eventOptions.optionList[X]);
				nowOption.prependTo(eventBlock);
			}
		}
		var eventDesc = $('<div>').addClass('main-text-type').addClass('event-desc').text(eventOptions.desc).prependTo(eventBlock);
		var eventTitle = $('<div>').addClass('event-title').text(eventOptions.title).prependTo(eventBlock);
		eventBlock.animate({opacity: 1},1000,'linear',function() {});
		eventBlock.removeAttr('style');
	}
}