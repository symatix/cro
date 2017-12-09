Template.item_details.events({
	'click .home-route': function () {
		Session.set("categorySelected", false);
		GalleryIndex.getComponentMethods()
			.addProps('guestCategory', false);
	},
	'click .pagination-next': function (event) {
		const _id = this._id;
		const session = Session.keys;
		const type = session.categorySelected;
		let sorting;

		Object.keys(Session.keys).forEach(function (key) {
			if (Session.keys[key] == "true" && key !== "details" && key !== "addedBy" && key !== "noFilter") {
				sorting = key;
			}
		});
		sorting = sorting === undefined ? "last_edit" : sorting;

		console.log(sorting);
	}
})

Template.methods_view.events({
	'click .btn_toggleMethods': function (event) {
		event.preventDefault();
		$('.toggleMethods').slideToggle('').toggleClass('active');

		if ($('.toggleMethods').hasClass('active')) {
			$('.btn_toggleMethods').text('Expand');
		} else {
			$('.btn_toggleMethods').text('Colapse');
		}
	}
})

Template.methods_checkbox_view.events({
	'click .method-checkbox': function (event) {
		event.stopPropagation();
		event.preventDefault();
		var methodId = $(event.target).attr('for');

		console.log(methodId);
		$('#object_toggle-' + methodId).slideToggle('').toggleClass('active');

		if ($('#object_toggle-' + methodId).hasClass('active')) {
			$(event.target).addClass('check-active');
		} else {
			$(event.target).removeClass('check-active');
		}
	}
})

Template.painting_list.events({
	"mouseenter .img-list": function (event) {
		var imgSrc = $("#img-front-" + this.__originalId).attr("src");
		var author = Prospero.findOne(this.__originalId).basic.author;
		var title = Prospero.findOne(this.__originalId).basic.title;
		$(".img-modal").attr("src", imgSrc);
		$(".modal-title").text(author + " - " + title);
	}
})
