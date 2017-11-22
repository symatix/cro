// web ("/database/myitems") > local ("/client/user/item-list")
Template.moderator_db.helpers({
	moderatorIndex: () => ModeratorIndex,
	loadBtn: function () {
		return { class: 'btn btn-submit' };
	},
	gallery: function () {
		var userId = Meteor.user()._id;
		return Prospero.find({ userId: userId, visible: { $ne: "hidden" } }, { sort: Session.get("sortList"), limit: Session.get("siteLimit") });
	},
	totalPublic: function () {
		var userId = Meteor.user()._id;
		return Prospero.find({ "visible": "public", "isDeleted": "available", "owner": userId }).count();
	},
	totalPrivate: function () {
		var userId = Meteor.user()._id;
		return Prospero.find({ "visible": "private", "isDeleted": "available", "owner": userId }).count();
	},
	loadBtn: function () {
		return { class: 'btn-default btn-submit' }
	},
	total: function () {
		return Prospero.find({ "info.userId": Meteor.user()._id, "isDeleted": "available" }).count();
	},
	painting: function () {
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Painting" }).count();
	},
	sculpture: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Sculpture" }).count();
	},
	sample: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Sample/cross-section" }).count();
	},
	reference: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Pigment/dye/binder/varnish/reference materials" }).count();
	},
	architectural: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Architectural heritage" }).count();
	},
	archival: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Archival object" }).count();
	},
	archaeological: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "Archaeological object" }).count();
	},
	other: function () {
		console.log(Prospero.find({ "info.userId": Meteor.user()._id }).fetch());
		return Prospero.find({ "info.userId": Meteor.user()._id, "type": "other" }).count();
	},
	// now goes a long section of checking how much data is inside object
	basicLength: function () {
		var i = 0;
		var y = 0;
		var x = 0;
		var object = Prospero.findOne({ _id: this.__originalId });
		var basic = object.basic;
		var basicNotes = object.basic.notes;

		for (var key in basic) {
			if (basic.hasOwnProperty(key)) {
				if (basic[key] !== "") {
					x++;
				}
			}
		}
		// subtract 1 because notes[objectObject]
		x--;

		for (var key in basicNotes) {
			if (basicNotes.hasOwnProperty(key)) {
				if (basicNotes[key] !== "") {
					y++;
				}
			}
		}
		i = x + y;
		return i;
	},
	originalLength: function () {
		var i = 0;
		var y = 0;
		var x = 0;
		var object = Prospero.findOne({ _id: this.__originalId });
		var materials = object.materials;
		var original = materials.original;
		var originalNotes = object.materials.original.notes;

		for (var key in original) {
			if (original.hasOwnProperty(key)) {
				if (original[key] !== "") {
					x++;
				}
			}
		}
		if (object.type === "Painting") {
			x = x - 5;
		} else {
			x--;
		}

		for (var key in originalNotes) {
			if (originalNotes.hasOwnProperty(key)) {
				if (originalNotes[key] !== "") {
					y++;
				}
			}
		}

		i = x + y;
		return i;
	},
	interventionsLength: function () {
		var i = 0;
		var y = 0;
		var x = 0;
		var object = Prospero.findOne({ _id: this.__originalId });
		var materials = object.materials;
		var interventions = materials.interventions;
		var interventionsNotes = object.materials.interventions.notes;

		for (var key in interventions) {
			if (interventions.hasOwnProperty(key)) {
				if (interventions[key] !== "") {
					x++;
				}
			}
		}
		//write for different object different subtraction depending on object
		if (object.type === "Painting") {
			x = x - 5;
		} else {
			x--;
		}

		for (var key in interventionsNotes) {
			if (interventionsNotes.hasOwnProperty(key)) {
				if (interventionsNotes[key] !== "") {
					y++;
				}
			}
		}

		i = x + y;
		return i;
	},
	restorationLength: function () {
		var i = 0;
		var y = 0;
		var x = 0;
		var object = Prospero.findOne({ _id: this.__originalId });
		var materials = object.materials;
		var restoration = materials.restoration;
		var restorationNotes = object.materials.restoration.notes;

		for (var key in restoration) {
			if (restoration.hasOwnProperty(key)) {
				if (restoration[key] !== "") {
					x++;
				}
			}
		}
		//write for different object different subtraction depending on object
		x = x - 1;

		for (var key in restorationNotes) {
			if (restorationNotes.hasOwnProperty(key)) {
				if (restorationNotes[key] !== "") {
					y++;
				}
			}
		}

		i = x + y;
		return i;
	},
	// this one does not need substraction - all false or object
	methodsLength: function () {
		var x = 0;
		var object = Prospero.findOne({ _id: this.__originalId });
		var details = object.details;
		var methods = details.methods;

		for (var key in methods) {
			if (methods.hasOwnProperty(key)) {
				if (methods[key] !== false) {
					x++;
				}
			}
		}
		return x;
	},
})
