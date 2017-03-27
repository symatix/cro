/*
Template.edit_button.events({
	'click .js-setSessionEdit':function(event){

		var id = this._id;
		Router.go("/edit/"+id);
		
		delete Session.keys.showPicture;
		delete Session.keys.showSculpture;
		delete Session.keys.showPigment;
		delete Session.keys.showOther;
		var type = Prospero.findOne(Session.get("itemId")).type;

		if(type === "Painting"){
			Session.set("showPicture", true);
			Router.go("/edit/"+id);
		}
		if(type === "Sculpture"){
			Session.set("showSculpture", true);
			Router.go("/edit/"+id);
		} 
		if(type === "Pigment/dye/binder/varnish/reference materials"){
			Session.set("showPigment", true);
			Router.go("/edit/"+id);
		} 
		if(type !== "Pigment/dye/binder/varnish/reference materials" || type !== "Sculpture" || type !== "Painting"){
			Session.set("showOther", true);
			Router.go("/edit/"+id);
		} 

	}
})
*/