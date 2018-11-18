var characterInfomation = {
	attribute: {
		'physicalTalent': 0,
		'directionTalent': 0
	},
	points: {
		
	},
	items: {
		
	},
	init: function() {
		characterInfomation.attribute.physicalTalent = 2+8*Math.random();
		characterInfomation.attribute.directionTalent = 2+8*Math.random();
	}
}