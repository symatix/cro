// web ("/") / local ("index/index")
Template.mainGallery.helpers({
	galleryIndex: () => GalleryIndex,
	// yup...just to style a damn button...
	loadBtn: function () {
		return { class: 'btn btn-submit btn-load-more' };
	},
	croartia: function () {
		return Prospero.find({}, { sort: { type: 1 }, limit: 8 });
	},
	typeOfObject: function () {
		var object = Prospero.findOne(this.__originalId).type;
		var pigment = "Pigment/dye/binder/varnish/reference materials";
		var other = "other";
		if (object === pigment) {
			object = "Reference material";
			return object;
		} else if (object === other) {
			object = "Other";
			return object;
		} else {
			return object;
		}

	},
	viewLarge: function () {
		if (Session.get("large")) {
			return true;
		}
	},
	viewDetails: function () {
		if (Session.get("details")) {
			return true;
		}
	},
	noCategory: function () {
		return !Session.get("categorySelected");
	},
	category: function () {
		if (Session.get("categorySelected") === '') {
			return "All";
		}
		return Session.get("categorySelected");
	}
})
