


Template.materials_techniques.helpers({
	painting:function(){
		if (Session.get("showPicture")){
			return true;
		}
	},
	sculpture:function(){
		if(Session.get("showSculpture")){
			return true;
		}
	},
	other:function(){
		if(Session.get("showOther")){
			return true;
		}
	},
})