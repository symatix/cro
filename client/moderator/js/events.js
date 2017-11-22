// web ("/database/myitems") > local ("/client/user/item-list")
Template.moderator_db.events({
	"click .js-delete": function (event) {
		var itemId = this.__originalId;
		var safeDelete = $('#safe-delete-' + itemId).is(':checked');
		var obj = Prospero.findOne(itemId);
		if (safeDelete == false) {
			toastr.error(`Denied! Check box to confirm the delete.`);
		} else {
			$("#" + itemId).animate({ opacity: 0 }, 200, function () {
				var dateFormat = Meteor.myFunctions.dateFormat();
				Meteor.call("hideItem", itemId, dateFormat);
			});
		}
	},
	'click .btn-setSession': function (event) {
		var itemId = this.__originalId;
		var type = Prospero.findOne(itemId).type;
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
	"click .js-remove": function (event) {
		itemId = this.__originalId;
		$("#" + itemId).animate({ opacity: 0 }, 200, function () {
			var dateFormat = Meteor.myFunctions.dateFormat();
			Meteor.call("hideItem", itemId, dateFormat);
		});
	},
	"mouseenter .img-front-xs": function (event) {
		var itemId = this.__originalId;
		var imgSrc = $("#img-front-" + itemId).attr("src");
		var author = Prospero.findOne(itemId).basic.author;
		var title = Prospero.findOne(itemId).basic.title;
		$(".img-modal").attr("src", imgSrc);
		$(".modal-title").text(author + " - " + title + " • front image");
	},
	"mouseenter .img-back-xs": function (event) {
		var itemId = this.__originalId;
		var imgSrc = $("#img-back-" + itemId).attr("src");
		var author = Prospero.findOne(itemId).basic.author;
		var title = Prospero.findOne(itemId).basic.title;
		$(".img-modal").attr("src", imgSrc);
		$(".modal-title").text(author + " - " + title + " • back image");
	},
	"click .js-visibility": function (event) {
		var itemId = this.__originalId;
		var visible = Prospero.findOne({ _id: itemId }).visible;
		Meteor.call("toggleItem", itemId, visible);
	}
})

// web ("/gallery/edit/:_id") > local ("/client/user/item-edit")
Template.editorEdit.events({
	"click .js-remove": function (event) {
		event.preventDefault();
		//this to meteor method
		var itemId = this._id;
		var dateFormat = Meteor.myFunctions.dateFormat();
		Meteor.call("hideItem", itemId, dateFormat);
		Router.go("/database/myitems");
	},
	'submit .js-edit-painting-data': function (event) {
		event.preventDefault();
		Meteor.myFunctions.updateData();
		Router.go("/gallery/details/" + Session.get("itemId"));
	}
})
