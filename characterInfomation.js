var characterInfomation = {
	attribute: {
		'physicalTalent': 0,
		'directionTalent': 0,
		'ObservationAbility': 0
	},
	points: {
		
	},
	items: {
		'water': 0
	},
	init: function() {
		characterInfomation.attribute.physicalTalent = 2+8*Math.random();
		characterInfomation.attribute.directionTalent = 2+8*Math.random();
		characterInfomation.attribute.ObservationAbility = 2+8*Math.random();
	}
}