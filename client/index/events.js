Template.mainGallery.events({
	"mouseenter .img-list-block": function (event) {

		// chrome and safari calculate position() differently, so that's why offset()
		// and as it still spits out an error, thus setInterval
		var waitDocument = setInterval(function () {
			if ($(event.target).find('.img-list').length > 0) {
				const overlay = $(event.target).find('.img-list-overlay');
				const width = $(event.target).find('.img-list').width();
				const parentPos = $(event.target).offset().left;
				const imgPos = $(event.target).find('.img-list').offset().left;
				const left = imgPos - parentPos;
				overlay.css({ width, left }).animate({ height: '100%' }, 500);
				clearInterval(waitDocument);
			}
		}, 50)
	},
	"mouseleave .img-list-block": function (event) {
		$(event.target).find('.img-list-overlay').animate({ height: '0%' }, 500);
	},

	'click .category-list-block': function (e) {
		var category = $(e.target).closest('.category-list-block').attr('data-value')
		Session.set("categorySelected", category);
		GalleryIndex.getComponentMethods()
			.addProps('guestCategory', category)
	},
})
