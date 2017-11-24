Template.mainGallery.events({
	"mouseenter .img-list-block": function (event) {
		const overlay = $(event.target).find('.img-list-overlay');
		const width = $(event.target).find('.img-list').width();

		// chrome and safari calculate position() differently, so that's why offset()
		const parentPos = $(event.target).offset().left;
		const imgPos = $(event.target).find('.img-list').offset().left;
		const left = imgPos - parentPos;

		overlay.css({ width, left }).animate({ height: '100%' }, 500);
	},
	"mouseleave .img-list-block": function (event) {
		$(event.target).find('.img-list-overlay').animate({ height: '0%' }, 500);
	}
})
