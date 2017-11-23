Template.edit_button.events({
	'click .btn-setSession': function (event) {
		var itemId = this._id;
		var type = Prospero.findOne(this._id).type;
		delete Session.keys.showPicture;
		delete Session.keys.showSculpture;
		delete Session.keys.showOther;
		delete Session.keys.showPigment;

		Session.set("showPainting", false);
		Session.set("showSculpture", false);
		Session.set("showOther", false);
		Session.set("showSample", false);
		Session.set("showPigment", false);

		var painting = "Painting";
		var sculpture = "Sculpture";
		var sample = "Sample/cross-section";
		var pigment = "Pigment/dye/binder/varnish/reference materials";


		Session.set("itemId", itemId);

		if (type === painting) {
			Session.set("showPainting", true);
		} else if (type === sculpture) {
			Session.set("showSculpture", true);
		} else if (type === sample) {
			Session.set("showSample", true);
		} else if (type === pigment) {
			Session.set("showPigment", true);
		} else {
			Session.set("showOther", true);
		}
	},
})
