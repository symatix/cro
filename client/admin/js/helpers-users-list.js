Template.users.helpers({
	usersIndex: () => UsersIndex,
	loadBtn: function () {
		return { class: 'btn btn-submit' };
	},
	users: function () {
		return Meteor.users.find({ username: { $ne: "admin" } });
	},
	total: function () {
		return Prospero.find({ "info.userId": this.__originalId }).count();
	},
	private: function () {
		return Prospero.find({ "info.userId": this.__originalId, "visible": "private" }).count();
	},
	deleted: function () {
		return Prospero.find({ "info.userId": this.__originalId, "isDeleted": "deleted" }).count();
	},
	lastEdit: function () {
		var lastEdit = Prospero.findOne({ "info.userId": this.__originalId }, { sort: { "info.last_edit": -1 } }).info.last_edit;
		return lastEdit;
	},
	typeOfObject: function () {
		var object = Prospero.findOne({ "_id": this._id }).type;
		var type = "Pigment/dye/binder/varnish/reference materials";

		if (object === type) {
			return "Reference material";
		} else {
			return object;
		}
	},
	entry: function () {
		var userId = Meteor.user()._id;
		return Prospero.find({ "info.userId": this.__originalId }, { sort: { "info.last_edit": -1 }, limit: 6 });
	},
	painting: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Painting" }).count();
	},
	sculpture: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Sculpture" }).count();
	},
	sample: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Sample/cross-section" }).count();
	},
	reference: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Pigment/dye/binder/varnish/reference materials" }).count();
	},
	architectural: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Architectural heritage" }).count();
	},
	archival: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Archival object" }).count();
	},
	archaeological: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "Archaeological object" }).count();
	},
	other: function () {
		return Prospero.find({ "info.userId": this.__originalId, "type": "other" }).count();
	},
})
Template.users.events({
	'click .addUser-href': function () {
		delete Session.keys.userId;
	},
	'click .sendUserDetails': function (event) {
		event.preventDefault();
		userDetails = Meteor.users.findOne(this.__originalId);
		console.log(userDetails.profile.email);
		Meteor.call("resendUserDetails", userDetails, function (error, result) {
			if (error) {
				toastr.error(error);
			} else {
				return toastr.success(`Email to ${userDetails.profile.email} sent!`)
			}
		})

	},
	'click .btn-setSession': function (event) {
		var itemId = this._id;
		var type = Prospero.findOne(this._id).type;
		delete Session.keys.showPainting;
		delete Session.keys.showSculpture;
		delete Session.keys.showOther;
		delete Session.keys.showPigment;

		Session.set("showPainting", false);
		Session.set("showSculpture", false);
		Session.set("showOther", false);
		Session.set("showPigment", false);


		Session.set("itemId", itemId);

		if (type === "Painting") {
			Session.set("showPainting", true);
		}
		if (type === "Sculpture") {
			Session.set("showSculpture", true);
		}
		if (type === "Pigment/dye/binder/varnish/reference materials") {
			Session.set("showPigment", true);
		}
		if (type !== "Painting" && type !== "Sculpture" && type !== "Pigment/dye/binder/varnish/reference materials") {
			Session.set("showOther", true);
		}
	},
	"click .js-delete": function (event) {
		var userId = this.__originalId;
		var safeDelete = $('#safe-delete-' + userId).is(':checked');
		if (safeDelete == false) {
			toastr.error(`Denied! Check box to confirm the delete.`);
		} else {
			$("#" + userId).animate({ opacity: 0 }, 200, function () {
				Meteor.call("removeUser", userId, function (error) {
					if (!error) {
						toastr.success("User deleted.")
					} else {
						toastr.error(`Error deleting user: ${error}`)
					}
				});
			});
		}
	},
})
