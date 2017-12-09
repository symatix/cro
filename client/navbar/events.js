// web ("") / local ("index/navbar")
Template.navbar.events({
	'click #getModalHelp': function (event) {
		setTimeout(function () {
			if ($(".tab-help").hasClass("active")) {
				console.log("ima");
				$('#help-home-first').addClass('active');
				$('#help-home').addClass('active');

			} else {
				$(".tab-help").removeClass("active");
				$('#help-home-first').addClass('active');
				$('#help-home').addClass('active');
			}

		}, 200)
	},
	'keypress input': function (event) {
		if (event.which === 13) {
			event.stopPropagation();
			return false;
		}
	},
	'click .home-route': function () {
		Session.set("categorySelected", false);
		GalleryIndex.getComponentMethods()
			.addProps('guestCategory', false);
	},
	'click .toggle-active': function (event) {
		$('.active').removeClass('active');
		$(event.target).parent().addClass("active");
	},
	"click .logout": function (event) {
		event.preventDefault();
		Meteor.logout();
		Router.go("/login");
	},
	'change .sorting-view': function (e) {
		GalleryIndex.getComponentMethods()
			.addProps('limit', limit);
	},
	'change .sorting-users': (e) => {
		UsersIndex.getComponentMethods()
			.addProps('sortBy', $(e.target).val())
	},
	'change .sorting-paintings': (e) => {
		PaintingIndex.getComponentMethods()
			.addProps('sortBy', $(e.target).val())
	},
	'change .sorting-admin': (e) => {
		AdminIndex.getComponentMethods()
			.addProps('sortBy', $(e.target).val())
	},
	'change .sorting-admin-category': function (e) {
		AdminIndex.getComponentMethods()
			.addProps('categoryFilter', $(e.target).val())
	},
	'change .sorting-editor': (e) => {
		ModeratorIndex.getComponentMethods()
			.addProps('sortByFilter', $(e.target).val())
	},
	'change .sorting-moderator': function (e) {
		ModeratorIndex.getComponentMethods()
			.addProps('categoryFilter', $(e.target).val())
	},
	'change .sorting-guest': (e) => {
		GalleryIndex.getComponentMethods()
			.addProps('guestSort', $(e.target).val())
	},
	'change .sorting-category-guest': function (e) {
		GalleryIndex.getComponentMethods()
			.addProps('guestCategory', $(e.target).val())
	},
	'click .newItem-href': function () {
		delete Session.keys.itemId;
	},
	'click .newUser-href': function () {
		delete Session.keys.userId;
	},
	'change .sorting-filter': function () {
		Session.set("first_entry", false);
		Session.set("last_entry", false);
		Session.set("last_edit", false);
		Session.set("addedBy", false);
		Session.set("title_a", false);
		Session.set("title_z", false);
		Session.set("author_a", false);
		Session.set("author_z", false);
		var value = $(".sorting-filter").val();

		if (value === "first_entry") {
			Session.set("first_entry", true);
		}
		if (value === "last_entry") {
			Session.set("last_entry", true);
		}
		if (value === "last_edit") {
			Session.set("last_edit", true);
		}
		if (value === "addedBy") {
			Session.set("addedBy", true);
		}
		if (value === "title_a") {
			Session.set("title_a", true);
		}
		if (value === "title_z") {
			Session.set("title_z", true);
		}
		if (value === "author_a") {
			Session.set("author_a", true);
		}
		if (value === "author_z") {
			Session.set("author_z", true);
		}
	},
})
