
Template.images_original.helpers({
	originalDisplay:function(){
		var itemId = this._id;
		var file1 = Prospero.findOne(itemId).data.original.photoOne;
		var file2 = Prospero.findOne(itemId).data.original.photoTwo;
		var file3 = Prospero.findOne(itemId).data.original.photoThree;
		var file4 = Prospero.findOne(itemId).data.original.photoFour;
		if (file1 || file2 || file3 || file4 || file5){
			return true;
		}
	},
})
Template.images_interventions.helpers({
	interventionsDisplay:function(){
		var itemId = this._id;
		var file1 = Prospero.findOne(itemId).data.interventions.photoOne;
		var file2 = Prospero.findOne(itemId).data.interventions.photoTwo;
		var file3 = Prospero.findOne(itemId).data.interventions.photoThree;
		var file4 = Prospero.findOne(itemId).data.interventions.photoFour;
		if (file1 || file2 || file3 || file4 || file5){
			return true;
		}
	},
})
Template.images_restoration.helpers({
	restorationDisplay:function(){
		var itemId = this._id;
		var file1 = Prospero.findOne(itemId).data.restoration.photoOne;
		var file2 = Prospero.findOne(itemId).data.restoration.photoTwo;
		var file3 = Prospero.findOne(itemId).data.restoration.photoThree;
		var file4 = Prospero.findOne(itemId).data.restoration.photoFour;
		if (file1 || file2 || file3 || file4 || file5){
			return true;
		}
	},
})