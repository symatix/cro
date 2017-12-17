Template.mainGallery.events({
	"mouseenter .img-list-block": function (event) {

		// chrome and safari calculate position() differently, so that's why offset()
		// and as it turns out, they still spit an error in the console, thus setInterval
		// ... eat that chrome!
		var imgReady = setInterval(function () {
			if ($(event.target).find('.img-list').length > 0) {
				const overlay = $(event.target).find('.img-list-overlay');
				const width = $(event.target).find('.img-list').width();
				const parentPos = $(event.target).offset().left;
				const imgPos = $(event.target).find('.img-list').offset().left;
				const left = imgPos - parentPos;
				overlay.css({ width, left }).animate({ height: '100%' }, 250);
				clearInterval(imgReady);
			}
		}, 50)
	},
	"mouseleave .img-list-block": function (event) {
		$('.img-list-overlay').animate({ height: '0%' }, 250);
	},

	'click .category-list-block': function (e) {
		var category = $(e.target).closest('.category-list-block').attr('data-value')
		Session.set("categorySelected", category);
		GalleryIndex.getComponentMethods()
			.addProps('guestCategory', category)
	},
})
