var showText = {
	init: function() {
		var mainBody = $('<div>').addClass('main-body').appendTo('body');
		var mainBodyCommand = $('<div>').addClass('main-body-command').addClass('main-shadow').attr('id','message-box').appendTo(mainBody);
		var mainBodyCommandOn = $('<div>').addClass('main-body-command-on').appendTo(mainBody);
		var mainBodyDisplay = $('<div>').addClass('main-body-display').addClass('main-alpha-shadow').attr('id','event-box').appendTo(mainBody);
	},
	
	clearHidden: function() {
		/*
		var bottom = $('.main-body-command').position().top + $('.main-body-command').outerHeight(true);
		$('.main-body-command').each(function() {
			if($(this).position().top > bottom){
				$(this).remove();
			}
		});
		*/
		$('.message-text').remove();
	},
	
	printMessage: function(message){
		var text = $('<div>'+message+'</div>').addClass('message-text').addClass('main-text-type').css('opacity', '0').prependTo('div#message-box');
		text.animate({opacity: 0.8}, 500, 'linear', function() {
			$(this).removeAttr('style');
		});
		text.removeAttr('style');
	},
	/*
	type: eventOptions:
	id: String,事件的id。**
	title: String,事件的标题。
	desc: String,事件的描述。
	logs: String,事件输出到左侧日志区的内容。
	optionList: String arg[],事件的选项列表。
	*/
	printEventBlock: function(eventOptions) {
		if(typeof eventOptions === 'undefined'){
			gameCore.throwNoEventError();
			return;
		}
		var eventBlock = $('<div>').addClass('event-block').css('opacity','0').prependTo('div#event-box');
		if(typeof eventOptions.optionList !== 'undefined'){
			for(var X=eventOptions.optionList.length-1;X>=0;--X){
				var nowOption = new showButton.printEventButton(eventOptions.optionList[X]);
				if(typeof nowOption !== 'undefined'){
					nowOption.prependTo(eventBlock);
				}
			}
		}
		var eventDesc = $('<div>'+eventOptions.desc+'</div>').addClass('main-text-type').addClass('event-desc').prependTo(eventBlock);
		var eventTitle = $('<div>'+eventOptions.title+'</div>').addClass('event-title').prependTo(eventBlock);
		if(typeof eventOptions.logs !== 'undefined'){
			showText.printMessage(eventOptions.logs);
		}
		eventBlock.animate({opacity: 1},1000,'linear',function() {$(this).removeAttr('style')});
	}
}