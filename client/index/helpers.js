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
	noCategory: function () {
		return !Session.get("categorySelected");
	},
	category: function () {
		let category = Session.get("categorySelected");

		if (category === '') {
			return "All";
		}
		if (category === 'Painting') {
			return 'Paintings'
		}
		if (category === 'Sculpture') {
			return 'Sculptures'
		}
		return Session.get("categorySelected");
	}
})
